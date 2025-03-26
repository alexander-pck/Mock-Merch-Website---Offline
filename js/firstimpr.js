const elements = document.querySelectorAll('.textshow');

function playAnimation(index) {
  if (index >= elements.length) {
    // Reset index if it exceeds the number of elements
    index = 0;
  }

  const element = elements[index];

  // Add animation class to the element
  element.classList.add('animated');

  // Remove animation class after the animation finishes
  setTimeout(() => {
    element.classList.remove('animated');

    // Play the next animation after a delay
    playAnimation(index + 1);
  }, 2500);
}

// Start playing the animations
playAnimation(0);
