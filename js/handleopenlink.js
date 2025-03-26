//check for product link
openitemifwanted();
var printordershow = false;
const scrolltopdiv = document.querySelector(".scrolltopdiv")

function removeAll() {
  listofscreens = [
    "content",
    "bigview_content",
    "thankyou_content",
    "cart_content",
    "introinfo",
    "pickupinfo",
    "finishemail",
    "enternickname",
    "printorder",
    "thankyouorder",
    "data-privacy",
    "agb",
    "intro"]
  
  listofscreens.forEach(screenname => {
    body.classList.remove(screenname);
  });
}




window.addEventListener("hashchange", openitemifwanted);
function leavemenue() {
  if ( bigviewopen) {
    window.location.href = "#"+lastid;
  }
  else {
    window.location.href = "#content2"
  }
}
function openitemifwanted() {
    const fragment = window.location.hash.substring(1);
    // console.log("navigating to url#"+fragment)

    if(fragment == "content1" || fragment == "content2" || fragment=="") {
      removeAll() 
      body.classList.add("content");
      if(fragment == "content2") {
        content2.scrollIntoView()
      } 
    }

    

    if(fragment == "cart") {
      setcart();
      removeAll() 
      body.classList.add("cart_content")


    }

    if(fragment == "introinfo") {
      removeAll() 
      body.classList.add("introinfo");

    }
    if(fragment == "pickupinfo") {
      if(Object.keys(shoppingcart).length === 0) {window.location.href = "#content2";return;}
      removeAll() 
      body.classList.add("pickupinfo");
    }
    if(fragment == "finishemail") {
      if(Object.keys(shoppingcart).length === 0) {window.location.href = "#content2";return;}
      removeAll()
      body.classList.add("finishemail");

    }

    if(fragment == "thankyouorder") {
      if(Object.keys(shoppingcart).length === 0) {window.location.href = "#content2";console.log("isopen");return;}
      removeAll()
      body.classList.add("thankyouorder");
    }

    if(fragment == "data-privacy") {
      removeAll()
      body.classList.add("data-privacy");
    }

    if(fragment == "agb") {
      removeAll()
      body.classList.add("agb");
    }

    
    if(fragment == "intro") {
      removeAll()
      body.classList.add("intro");
    }


    // if(fragment == "enternickname") {
    //   if(Object.keys(shoppingcart).length === 0) {window.location.href = "#content2";console.log("isopen");return;}
    //   removeAll()
    //   body.classList.add("enternickname");

    // }
    if(printordershow == true) {
      if(Object.keys(shoppingcart).length === 0) {window.location.href = "#content2";console.log("isopen");return;}
      removeAll()
      body.classList.add("printorder");

    }

    //find link in products
    for (let key in produkt_liste) {
      josnproduct = produkt_liste[key]
      if(josnproduct.id == fragment) {
        if (!bigviewopen) {
          removeAll()

        items[parseInt(key)-1].querySelector('.lookfurther').click(); 
        break;
        } else {
          removeAll()
          body.classList.add("bigview_content");
        }
      }
    }

    if(thankyou_active == true) {
      bigviewopen =  false
      removeAll()
      body.classList.add("thankyou_content")

      
      //play animation
      checkthanks.style.animation = "none";

      setTimeout(() => checkthanks.style.animation = "rotatecheck 0.5s ease-out  ",500)
      setTimeout(() => openitemifwanted(),1500)

      thankyou_active=false

    }
}



