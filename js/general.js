// Detect if the user is on a mobile device

const body = document.body;
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
var thankyou_active = false
//animation stuff
const checkthanks = document.querySelector(".checkthanks")
const firstcontent = document.querySelector(".firstcontent")
const titleclosedatetxt = document.querySelector(".below_titleclosedatetxt")

//function for display type

function isvertical() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if(height > width) {return true}
}

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const orient = (typeof window.orientation !== "undefined")
  const userAgentindex = (userAgent.indexOf('IEMobile') !== -1)
  const userAgentanme = (/iPhone|iPad|iPod|Android|Windows Phone/i.test(userAgent))
    return orient ||  userAgentindex || userAgentanme ;
}

function isMobileTablet() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (width*1.7 > height) {return true}
}



function updateView(ismobile,istablet) {
  const ismobileclause = ismobile === undefined ? isMobileDevice() : ismobile
  const istabletclause = istablet === undefined ? isMobileTablet() : istablet

if (ismobileclause) {
  // document.documentElement.style.overflowY = "hidden";

  if(istabletclause) {
    document.body.classList.add('noarrow');
    document.body.classList.add('tablet');

  }
  else {
  document.body.classList.add('mobile');
  document.body.classList.add('noarrow');
  }
}
}
updateView()
apply_vertical(isvertical())

function apply_vertical(isvert) {
  if (isvert) {document.body.classList.add('verticalview');
  } else { document.body.classList.remove('verticalview');}
}


//TODO: Add automatic adjustment when resizing
var loadmobilestatus = isMobileDevice()
console.log(loadmobilestatus)
window.addEventListener( "resize",function () {
  apply_vertical(isvertical())
}); 
  // Add a class to the body element for mobile devices
  
//start start-animations
setTimeout(() => {
  const header = document.getElementsByClassName("header")[0];
  if(new Date().getTime() < closedate.getTime()) {
    document.body.classList.add("header_anidone");
    isMobileDevice() && !isMobileTablet()? header.style.height = '8rem': header.style.height = '6rem';
  }
  else {
    titleclosedatetxt.style.display = "block"

  }
},1000)

setTimeout(() => {
  var element = document.getElementsByClassName("title")[0];
  element.classList.add("swipe-in");
},200)



const smoothcontent2all = document.querySelectorAll(".smoothcontent2")
smoothcontent2all.forEach(i => {
  i.addEventListener("click",(e) => content2.scrollIntoView({behavior:"smooth"}))
})

function formatDate(currentDate) {

    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');

    return `${day}.${month}.${year}`;
}




const adressbarmargin = document.querySelectorAll('.adressbarmargin')
var lastadressbarmargin;
 

//adjust for adressbar on mobile
if (isMobileDevice()) {window.addEventListener( "resize",resize_adressbarmargin()); }

function resize_adressbarmargin() {

  const actualHeight = window.innerHeight;
  const elementHeight = document.getElementById('test100vh').clientHeight;
  const barHeight = elementHeight - actualHeight;
  if (barHeight == lastadressbarmargin) {return}
  // console.log(adressbarmargin)
  adressbarmargin.forEach((e) => {e.style.height = barHeight+"px";})
  lastadressbarmargin = barHeight
}

window.setInterval(resize_adressbarmargin,2000);
