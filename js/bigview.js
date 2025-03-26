

const bigview_div = document.querySelector('.bigview_div');

const desctop_show = bigview_div.querySelector('.desctop_show');
const ex2 = document.querySelector('.ex2');
const lookfurther = document.querySelector('.lookfurther');
const bigid = bigview_div.querySelector('.productid');
const bigimage = bigview_div.querySelector('.bigimage');
const bigpreis = bigview_div.querySelector('.bigpreis');
const bigdesc = bigview_div.querySelector('.bigdesc');
const bigname = bigview_div.querySelector('.bigname');
const sizes_div = bigview_div.querySelector('.sizes_div');
const organicdesc = bigview_div.querySelector(".organicdesc")
const organiciconbig = bigview_div.querySelector(".organiciconbig")


const i = isMobileDevice() ? 1 : 0;
const cart = document.querySelectorAll('.incart')[i];
var bigviewopen = false
var incart_check = {}
var lastid = null


function preventDefaultScroll(event) {event.preventDefault();}

function trypulse() {
  cart.classList.remove('pulse');
  function checkstatus() {
    for (let key in incart_check) {
      if(!incart_check[key]) {return false}
    }
    return true
  }
  if(checkstatus()) {cart.classList.add('pulse');}
}

function oneselectsize(check_idx) {
  const buttons = bigview_div.getElementsByClassName('divoption');
  // Attach event listeners to each button
  Array.from(buttons).forEach(button => {
    let buttonState = false;
    const buttons = bigview_div.getElementsByClassName('divoption');

    button.addEventListener('click', () => {
      

      buttonState = !buttonState; 
      Array.from(buttons).forEach(button => {
          button.classList.remove('pressed');
      });
      button.classList.add('pressed'); // Add or remove 'active' class
      incart_check.sizeoptions = true
      trypulse() 
    });
  });
}


function returnbutton() {
  bigview_div.style.animationName = "slideout";
  window.location.href = "#content2";
  endbigview()
}

function endbigview() {
  bigviewopen = false
  cart.classList.remove('pulse');
  setTimeout(() => {
    //prevent spam block
      if(!bigviewopen) {
        bigview_div.style.display  = "none";
      }
    }
    ,800)
  document.body.classList.remove("bigview_content")
}

function endbigview_silent() {
  setTimeout(
    () => {
    //prevent spam block
      if(!bigviewopen) {
        bigview_div.style.display  = "none";
      }
    } 
    ,200)
  bigviewopen = false
  cart.classList.remove('pulse');
  document.body.classList.remove("bigview_content")
}

ex2.addEventListener("click", function(e) {
    returnbutton()
    
  }); 



  
function  openbigview(key,id) {
   // open bigview 
      
   cart.classList.remove('pulse');
   document.body.classList.add("bigview_content")

   window.location.href = "#"+id.innerHTML
   bigviewopen = true

   bigview_div.style.display  = "flex";
   bigview_div.style.animationName = "slidein";        
   incart_check = {};
   changebigview(key.innerHTML,id)
   if(id.innerHTML != lastid) {desctop_show.scrollTop = 0; }
   lastid = id.innerHTML
   resize_adressbarmargin()
}




function changebigview(key,id) {
  const josnproduct = produkt_liste[key]
  bigimage.style.backgroundImage = josnproduct.productimage.imagebits;
  bigimage.style.backgroundColor = josnproduct.productimage.imagebgc;
  bigimage.style.backgroundSize  = josnproduct.productimage.image_size;
  bigpreis.innerHTML = josnproduct.price.price_str;
  bigdesc.innerHTML = josnproduct.productdesc;
  bigname.innerHTML = josnproduct.productname;
  bigid.innerHTML = josnproduct.id
  quantity_field.value = 1
  organicdesc.innerHTML = josnproduct.organic
  organiciconbig.style.display = josnproduct.organic != "" ? "block" : "none";
  organiciconbig.addEventListener("click",e => {eventorganic(organiciconbig,organicdesc);});
  const greencolor = getComputedStyle(document.documentElement).getPropertyValue('--green_like');
  bigimage.style.border = josnproduct.organic != "" ? "5px solid "+greencolor : "5px solid  rgb(171 171 171)";
  bigimage.style.outline = "5px solid "+josnproduct.productimage.imagebgc;

  

  handleoptions(josnproduct,sizes_div)
}


function handleoptions(josnproduct,sizes_div) {
  sizes_div.style.display="none"

  josnproduct.selection.forEach(selectoption => {
    const selecttype = Object.keys(selectoption)[0]
    if(selecttype == "sizeoptions") {sizeoptions(selectoption[selecttype],sizes_div);sizes_div.style.display=""} 

  })
}


function sizeoptions(arr,sizes_div) {
  const checkid = incart_check.length
  incart_check.sizeoptions = false
  opti = ""
  arr.forEach(sizeopti => {
    opti = opti+'<div class="divoption">'+sizeopti+'</div>'
  })
            
  const legend = '<legend class="size_label" for="size">Größe:</legend>'
  const slection = legend+'<div class="bigsizes"><div class="select_size">'+opti+'</div></div>'
  sizes_div.innerHTML = slection
  oneselectsize(checkid);

}



















const quantity_field = bigview_div.querySelector('.quantity_field');

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  if ( value < 10) {
    value++;
    input.value = value;
  }

  
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}


function textcount(a, input) {
  if(input.value > 10) {input.value = 10;return;}
  if(input.value < 1) {input.value = 1;return;}

}




