// Select your horizontal scrollable div
const debug = document.getElementById("debug")

let isScrolling = false;
let startTouchX = 0;
let currentTouchX = 0;
let velocity = 0;

let lastTouchX = null;
let lastTimestamp = null;
let lastVelocity = null
let scrollDistance = 0;


let startX = 0;
let currentX = 0;
let lastidx = null;
let lastmiddle = null;


// document.addEventListener('touchstart', function(event) {
//   startX = event.touches[0].clientX;
//   lastmiddle = container.querySelector(".middle")
//   lastidx = Array.from(items).indexOf(lastmiddle);
// });

// document.addEventListener('touchmove', function(event) {
//   currentX = event.touches[0].clientX;
// });

// document.addEventListener('touchend', function() {
//   findnext()

// });

// function findnext() {
//   const middle = container.querySelector(".middle")
//   const currentidx = Array.from(items).indexOf(middle);
//   if(currentidx == -1) {
//     setTimeout(findnext,50);
//     return 
//   }
//   console.log((currentidx > lastidx),currentidx,lastidx,lastmiddle)
//   var scrollmiddle = (currentidx < lastidx) ? lastmiddle.nextSibling : lastmiddle.previousSibling;
//   scrollmiddle = (currentidx == lastidx) ? lastmiddle : scrollmiddle

//   container.scroll({left:getstartscroll(scrollmiddle)-container.clientWidth/2, block: 'center'})
// }







container.addEventListener('touchstart', (e) => {
  isScrolling = true;
  startTouchX = e.touches[0].clientX;
  currentTouchX = startTouchX;
  lastTimestamp = performance.now();
});

container.addEventListener('touchmove', (e) => {

  const currentTimestamp = performance.now();

  const deltaTime = currentTimestamp - lastTimestamp;
  const deltaX = currentTouchX - lastTouchX;

  currentTouchX = e.touches[0].clientX;
  scrollDistance = currentTouchX - startTouchX;

  // Update the scroll position based on scrollDistance

  // Update the start position for the next move event
  lastVelocity = deltaX / deltaTime;
  startTouchX = currentTouchX;
  lastTimestamp = currentTimestamp
  // scrollDistance = container.scrollLeft
});

container.addEventListener('touchend', (e) => {
  debug.innerHTML = lastVelocity+"<br>"+scrollDistance
  // if(lastVelocity > 3) {
  //   container.scrollLeft = scrollDistance
  // }
  console.log("touchend",lastVelocity)
  return
  isScrolling = false;

  // Calculate velocity based on the final scrollDistance
  velocity = scrollDistance;

  // Apply a deceleration factor (you can adjust this value)
  const deceleration = 0.95;

  // Function to animate the deceleration effect
  function decelerate() {
    if (Math.abs(velocity) > 0.1) {
      container.scrollLeft -= velocity;
      velocity *= deceleration;
      requestAnimationFrame(decelerate);
    }
  }

  // Start the deceleration animation
  decelerate();
});
