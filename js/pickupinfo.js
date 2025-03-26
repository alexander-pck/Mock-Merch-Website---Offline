const pickupinfo_div = document.querySelector(".pickupinfo_div")
const sendemailoffer = document.querySelector(".sendemailoffer")

const ex6 = pickupinfo_div.querySelector(".ex6")

const overview_info = pickupinfo_div.querySelector(".overview_info")

const continue_checkout_but = pickupinfo_div.querySelector(".continue_checkout_but")
const overview_Anfragenr_txt = document.querySelectorAll(".overview_Anfragenr_txt")
const pickupinfo_overview_pickup = pickupinfo_div.querySelector(".pickupinfo_overview_pickup")

userid.then(o => overview_Anfragenr_txt.forEach(i => i.innerHTML = "Ihre Anfragenr. ist:   <br>"+o))
ex6.addEventListener("click",() => {
    window.location.href = "#cart"
})
 
overview_info.innerHTML = `Über Änderungen informieren wir Sie nicht ;). Hier könnte Ihre Werbung stehen! (Scherz)`


continue_checkout_but.addEventListener("click",() => {
    window.location.href = "#finishemail"
})
 
pickupinfo_overview_pickup.innerHTML = pickuptxt


//add event listiner to button
sendemailoffer.addEventListener("click",(e) => {
    window.location.href = "#pickupinfo"
})