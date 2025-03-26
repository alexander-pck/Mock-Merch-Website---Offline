let menue_button = document.getElementById("menue_button")
let menue_options = document.getElementById("menue_options")
let optionNprivacy = document.querySelector(".optionN.privacy_button")
let optionNintro_button = document.querySelector(".optionN.intro_button")
let optionNagb_button = document.querySelector(".optionN.agb_button")
let optionNcart_button = document.querySelector(".optionN.cart_button")
let optionNproduct_button= document.querySelector(".optionN.product_button")
let optionNhome_button= document.querySelector(".optionN.home_button")


let showprivacy = false;
let showagb = false;

var menuetimeout;
menue_options.addEventListener("mouseover",() => {
    console.log("clear")
    setTimeout(() => {
    clearTimeout(menuetimeout)
    menuetimeout = setTimeout(() => {
        if(menue_options.classList.contains("displaying_menue_options")) {
            menue_options.classList.toggle("displaying_menue_options")
        }
    },3000)
    },1000)
})

menue_options.addEventListener("click",() => {
    menue_options.classList.remove("displaying_menue_options")
})

menue_button.addEventListener("click",() => {
    
    clearTimeout(menuetimeout)
    console.log("opacity done")
    menue_options.classList.toggle("displaying_menue_options")

    menuetimeout = setTimeout(() => {
        if(menue_options.classList.contains("displaying_menue_options")) {
            menue_options.classList.toggle("displaying_menue_options")
        }
    },3000)
})

optionNprivacy.addEventListener("click",() => {
    showprivacy = !showprivacy
    if (showprivacy) {
        window.location.href = "#data-privacy"
    }
    else {
        window.history.back()
    }
})

optionNagb_button.addEventListener("click",() => {
    showagb = !showagb
    if (showagb) {
        window.location.href = "#agb"
    }
    else {
        window.history.back()

    }
})

optionNproduct_button.addEventListener("click",() => {
    window.location.href = "#content2";
    console.log("optionNproduct_button")
})

optionNcart_button.addEventListener("click",() => {
    window.location.href = "#cart"
    console.log("optionNproduct_button")

})

optionNintro_button.addEventListener("click",() => {
    window.location.href = "#intro"
})

optionNhome_button.addEventListener("click",() => {
    window.location.href = "#content1"
})