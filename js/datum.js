var calcNewYear;
var salesactive = false
var saleover = false


// if(!isMobileTablet() && isMobileDevice()) {
//     //is tablet
//     datumobj = document.querySelectorAll ('.datum')[1];
// }   else {
//     datumobj = document.querySelectorAll ('.datum')[0];
// }
const wtag_div = document.querySelectorAll(".valwdaydatum");
const tag_div = document.querySelectorAll(".valdaydatum");
const stunden_div = document.querySelectorAll(".valweekdatum");
const minuten_div = document.querySelectorAll(".valyeardatum");
const datumtext = document.querySelectorAll(".datumtext");
const datum_clock = document.querySelectorAll(".datum_clock");

var lastate = null
function d2d(x) {
    if(x < 10) {
        return "0" + x
    } else return x
}
function update_display() {
    date_now = new Date();
    let newstate;
    if (date_now.getTime()<opendate.getTime()) {
        newstate = 1;
        var date_future = opendate;
        datumtext.forEach(item => {item.innerHTML = "Angebot öffnet am";})
        salesactive = true
        document.body.classList.add("salesinactive");
        
    } else if(date_now.getTime()<closedate.getTime()) {
        newstate = 2;
        var date_future = closedate
        datumtext.forEach(item => {item.innerHTML = "Angebot endet am";})
        salesactive = false
        document.body.classList.remove("salesinactive");
    } else{
        salesactive = false
        saleover = true
        newstate = 3;
        var date_future = new Date()
        var date_now = new Date()
        console.log("Die Angebot hat geendet")
        datumtext.forEach(item => {item.innerHTML = "Die Angebot hat geendet";})
        document.body.classList.add("salesinactive");
        datum_clock.forEach(item => {item.style.display = "none"})
        clearInterval(calcNewYear)

    }
    
    const options = { weekday: 'short', timeZone: 'Europe/Berlin' };
    wtag_div.forEach(item => {item.innerHTML = date_future.toLocaleString('de-DE', options);})
    tag_div.forEach(item => {item.innerHTML = date_future.getDate();})
    stunden_div.forEach(item => {item.innerHTML = date_future.getMonth() +1;})
    minuten_div.forEach(item => {item.innerHTML = date_future.getFullYear();})

    if (lastate != null){if (lastate != newstate){window.location.reload();}}
    lastate = newstate
}


update_display()
calcNewYear = setInterval(update_display,1000 * 2)