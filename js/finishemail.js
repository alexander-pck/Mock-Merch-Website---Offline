const finishemail_div = document.querySelector(".finishemail_div")
const sendorderemail = document.querySelector(".sendorderemail")
const ex7 = finishemail_div.querySelector(".ex7")
const loader = finishemail_div.querySelector(".loader")
const sendorderemailoader = document.querySelector(".sendorderemail.loader")
const ldsring = finishemail_div.querySelector(".loader .lds-ring")
const body2 = document.querySelector(".body2")




//onsite function
ex7.addEventListener("click",() => {
  window.history.back()
})

function changeloadingdisplay(t) {
  const div_height = window.getComputedStyle(sendorderemail).height;
  ldsring.style.height = div_height
  ldsring.style.width = div_height

  sendorderemailoader.style.height = div_height;
  sendorderemailoader.style.display = "flex"
  sendorderemail.style.display = "none"
  setTimeout(() => {
    sendorderemailoader.style.display = "none"
    sendorderemail.style.display = "flex"
  },5000)
  if (t == "reset") {
    sendorderemailoader.style.display = "none"
    sendorderemail.style.display = "flex"
  }
}

function activateButton() {
  button.classList.add('active');
  setTimeout(() => {
      button.classList.remove('active'); 
  }, 2000); 
}




function openqrcode() {

  orderbasket = compress_cart(shoppingcart)
  order_send = {}
  if ( Object.keys(orderbasket).length === 0) {return}
  changeloadingdisplay()

  c = 1
  for (let key in orderbasket) {

      suborder = {
        "BN.": "SB"+getnumfromhash(key+c,8),                       //Bestellungsnr
        "PN.": "P"+getnumfromhash(orderbasket[key]["itemobj"]["id"],9),//Produktnr
        "P": orderbasket[key]["itemobj"]["price"]["price_num"]+"EU",       //Preis
        "N": orderbasket[key]["stuckzahl"],                          //Stueckzahl
        "S": ""+orderbasket[key]["grosse"],                             //Groesse
        
      }
      order_send["#"+c] = suborder
      c += 1
  }
  // formatlist = formatDataAsList(order_send)
  renderqrcode(order_send)
  // content = ""
  // content += emailtxt
  // content += generateSeparator(80)
  // content += formatlist
  // redirectToEmail(content,formatlist)
 
}

sendorderemail.addEventListener("click",openqrcode)

function renderqrcode(order_send) {
  generateQRCode(order_send);
  printordershow = true
  body2.style.display = "none";
  openitemifwanted();
  reverttostandardview()

  setTimeout(() => {
    document.documentElement.style.overflowY  = "hidden";
    body.style.overflowY  = "hidden";

    window.print()
    doafterprint()
  },100)

}
function doafterprint() {
  body2.style.display = "block";
  document.documentElement.style.overflowY  = "auto";
  body.style.overflowY  = "auto";

  printordershow = false
  thankyouordershow = true
  openitemifwanted()
  window.location.href = "#thankyouorder"
}
async function reverttostandardview() {

  if (window.matchMedia) {
    const media = window.matchMedia("print");
    const myFunc = mediaQueryList => {
      if (!mediaQueryList.matches) {
        doafterprint()
        try {
          media.removeEventListenerEventListener("change", myFunc);
        } catch (error) {
          try {
          media.removeListener(myFunc);
          } catch (error) {
            console.debug('Error', error)
          }
        }
      }
    };
    try {
      media.addEventListener("change", myFunc);
    } catch (error) {
      try {
      media.addListener(myFunc);
      } catch (error) {
        console.debug('Error', error)
      }
    }
  }
}

