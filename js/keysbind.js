var listionforkeys = false

//backarrow
const backaction3 = document.querySelector('.ex3.backaction');
const backaction5 = document.querySelector('.ex5.backaction');

//all look at more buttons
const lookatmore_button = document.querySelectorAll('input.generalbuttons.lookatmore');
const back_button = document.querySelectorAll('input.back_but');
const generalback_button = document.querySelectorAll('input.back_but_g');



//assign key presses
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !bigviewopen) {
      container.querySelector('.middle').querySelector('.lookfurther').click();
    }
    
    if (e.key === "Escape" && bigviewopen) {
        ex2.click();
      }

    if (e.key === "ArrowLeft" && !bigviewopen) {
        arrowright.click();
    }
    if (e.key === "ArrowLeft" && !bigviewopen) {
        arrowleft.click();
    }
    if (e.key === "Escape") {
      window.history.back()
    }

});


backaction3.addEventListener("click",() => { 
  console.log(window.history)
  if (bigviewopen) {window.location.href = "#"+lastid}
  else {window.location.href = "#content2"}

})

backaction5.addEventListener("click",() => 
{
  openitemifwanted()
}
)

lookatmore_button.forEach((e) => e.addEventListener("click",() => { window.location.href = "#content2";openitemifwanted()}))
back_button.forEach((e) => e.addEventListener("click",() => {if(bigviewopen) {ex2.click()} else { window.location.href = "#content2";};}))
generalback_button.forEach((e) => e.addEventListener("click",() => {window.history.back()}))
