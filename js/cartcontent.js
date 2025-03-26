const cartentry_div = document.querySelector(".cartentry_div")
const cartlabel = document.querySelector(".cartlabel")
const cart_container = document.querySelector(".cart_container")
const overall_price = cart_container.querySelector(".overall_price")
const incartnum = cart_container.querySelector(".incartnum")
// const pickupinfo_price_overview = document.querySelector(".pickupinfo_price_overview")
const lookmoreonscroll = cart_container.querySelector(".lookmoreonscroll")
const sendemailoffer_div = document.querySelector(".sendemailoffer_div")
const noinbag = document.querySelector(".noinbag")
const endfurthermorecart = cart_container.querySelector(".sendemailoffer_div .lookatmore")

function makeclickable(key){

    const cartentry = cartentry_div.querySelector("#orderid"+key)
    const cartentry_del =  cartentry.querySelector(".cartentry_actiondel")

    // delete button behaviour
    cartentry_del.addEventListener("click",(e) => {
        cartentry.classList.add("cartentry_remove")
        delete shoppingcart[key]
        const filllevel = uddatecartcounter()

        setTimeout(() => {setcart("remove")},500)})
    
}


function setcart(mode) {
    var injectioncart = ""
    var overallprice = 0
    var itemcount = 0;
    c = 0
    for (let key in shoppingcart) {
        c += 1
        const el = shoppingcart[key]
        injectioncart += create_html(el,key,c)
        const price_num = el.itemobj.price.price_num
        itemcount += parseInt(el.stuckzahl);
        overallprice += price_num*el.stuckzahl
    }

    cartentry_div.innerHTML = injectioncart;
    overall_price.innerHTML = overallprice+" €"
    incartnum.innerHTML = itemcount+" Artikel "+ (itemcount == 0 ? "" : "- "+overallprice+"€")
    // pickupinfo_price_overview.innerHTML = itemcount+" Artikel "+ (itemcount == 0 ? "" : "- "+overallprice+"€")

    if(Object.keys(shoppingcart).length === 0) {
        cartlabel.style.display = "none";
        sendemailoffer_div.style.display = "none";
        noinbag.style.display = "flex";
    } else {
        cartlabel.style.display = "flex";
        sendemailoffer_div.style.display = "flex";
        noinbag.style.display = "none";
    }
 

    for (let key in shoppingcart) {
        makeclickable(key)
    }
    
    uddatecartcounter()
    if(mode != "remove") {moveseemorebutton(itemcount)}
    if (itemcount == 0) {lookmoreonscroll.style.display = "none";}
}

function create_html(el,orderid,c) {
    josnproduct = el.itemobj
    const bgImage = josnproduct.productimage.imagebits;
    const bgColor = josnproduct.productimage.imagebgc;

    const proName = josnproduct.productname;

    const pronums = el.stuckzahl;
    const progrosse = el.grosse;


    const proprice = josnproduct.price.price_num*pronums + " €";

    const cartentry = `
    <div class="cartentry_container" id="orderid`+orderid+`">
        <div class="cartentry" >
            <div class="cartentry_num">#`+c+`</div>
            <div class="cartentry_name">`+proName+`</div>
            <div class="cartentry_pic" style='background-image: `+bgImage+`; background-color:`+bgColor+`; border: 1px solid black'></div>
            <div class="cartentry_size">`+progrosse+`</div>
            <div class="cartentry_stzahl"> x`+pronums+`</div>
            <div class="cartentry_price">`+proprice+`</div>
            <div class="closing_div4">
            </div>
        </div>
        <div class="cartentry_actions_div">
            <div class="cartentry_actions">
            <p class="cartentry_actiondel ">entfernen</p>
            </div>
        </div>
    </div>
    `

    return cartentry
}


function moveseemorebutton(itemcount) {
    if (cart_container.scrollHeight > cart_container.clientHeight) {
        // side is scrollable
        endfurthermorecart.classList.remove("lookatmore");
        endfurthermorecart.classList.add("disappear");
        lookmoreonscroll.style.display = "flex";
        incartnum.classList.add("removebottommargin")



      } else {
        // side is unscrollable
        incartnum.classList.add("removebottommargin")
        endfurthermorecart.classList.add("lookatmore");
        endfurthermorecart.classList.remove("disappear");
        lookmoreonscroll.style.display = "none";
        

      }
    
}