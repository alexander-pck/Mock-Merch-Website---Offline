const thankyouorder_div = document.querySelector(".thankyouorder_div")
const ex5 = thankyouorder_div.querySelector(".ex5")

const optionsthankyou = thankyouorder_div.querySelector(".optionsthankyou")
const changecart = optionsthankyou.querySelector(".changecart")
const reprint = optionsthankyou.querySelector(".reprint")
// const terminatewindow = optionsthankyou.querySelector(".terminatewindow")





changecart.addEventListener("click", () => {
 window.location.href = "#content1"
})

reprint.addEventListener("click", () => {
    openqrcode()
})

// terminatewindow.addEventListener("click", () => {
//     window.open('','_self').close()
// })

ex5.addEventListener("click", () => {
     window.location.href = "#content1"

})