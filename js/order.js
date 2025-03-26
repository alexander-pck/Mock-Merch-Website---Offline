function find_productbyID(id) {
    for (let key in produkt_liste) {
        josnproduct = produkt_liste[key]
        if(josnproduct.id == id) {
            return josnproduct
        }
    }
}
function compress_cart(cart) {
    function combineEntries(cart) {
      const combinedCart = {};
      const ret = {}
      c = 0
      for (const key in cart) {
        c += 1
        const entry = cart[key];
        const entryKey =  entry.itemobj.id;
        if (combinedCart[entryKey] ) {
          console.log(combinedCart[entryKey].grosse,entry.grosse)
          if (combinedCart[entryKey].grosse == entry.grosse) {
            combinedCart[entryKey].stuckzahl =  parseInt(combinedCart[entryKey].stuckzahl) + parseInt(entry.stuckzahl);
          } else {
            combinedCart[entryKey+c] = { ...entry, stuckzahl: parseInt(entry.stuckzahl),"key":key};
          }
          
        } else {
          combinedCart[entryKey] = { ...entry, stuckzahl: parseInt(entry.stuckzahl),"key":key};
        }
      }
      for (const nkey in combinedCart) {
        const entry = combinedCart[nkey]
        ret[entry.key] = entry
      }
      return ret;
    }
      return combineEntries(cart)
  }
  
  function getnumfromhash(hashHex,amountnum) {
    const numericValue = parseInt(hashHex, 16);
    return numericValue.toString().slice(0, amountnum).replace(/\./g, '');
  }
  

function putincart() {
    if(!bigviewopen) {return}

    const id = bigview_div.querySelector('.productid').innerHTML;

    const Stueckzahl = bigview_div.querySelector('.quantity_field').value;
    var size = "-"
    for (let key in incart_check) {
        if(!incart_check[key]) {
            if (key == "sizeoptions") {missingsize();return false}
        }

        if (key == "sizeoptions" && !sizeselected()) {return false}
        if (key == "sizeoptions" && sizeselected()) {size = bigview_div.querySelector('.divoption.pressed').innerHTML}
    }

    // console.log("Waren korb registiert")
    if(Object.keys(compress_cart(shoppingcart)).length >= 30) {
        return
    }

    const productjson = find_productbyID(id)
    registerincart()
    putinternalcart(productjson,Stueckzahl,size)
}

function sizeselected() {
    const buttons = bigview_div.querySelector('.divoption.pressed')
    if( buttons != null) {return true}
    return false
}
  

function missingsize() {
    sizes_div.scrollIntoView({behavior:"smooth"})
    
    const buttons = bigview_div.getElementsByClassName('divoption');
    Array.from(buttons).forEach(element => {
        element.classList.add('pulse')
        setTimeout(() => element.classList.remove('pulse'),3000)
    });
}

cart.addEventListener("click",() => {
    putincart() 
})

const thankyou_div = document.querySelector('.thankyou_div');
const sendoffer_button = thankyou_div.querySelector('.sendoffer');
const cartcontainer = document.querySelector('.cartcontainer');



// sendoffer_button.addEventListener("click",() => { window.location.href = "#cart";
// })

cartcontainer.addEventListener("click",() => { 
    if (window.location.hash.substring(1) != "cart"){
    window.location.href = "#cart";} else {
        window.history.back();
    }
})


function registerincart() {
    // window.location.href = "#content2"
    thankyou_active = true
    openitemifwanted()
    


}

//create customer ID 
async function establish_customerid() {
    const randomNum = Math.floor(Math.random() * 1000000);

    // Get the current timestamp
    const currentTime = new Date().getTime();

    // Combine random number and timestamp
    const random_generator = `${randomNum}_${currentTime}`;
    hashHex = await enSHA256(random_generator)
    const numericValue = parseInt(hashHex, 16);


    return "#B"+numericValue.toString().slice(0, 9).replace(/\./g, '');

}
userid = establish_customerid()
