const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
// An event listener that tracks the position of the mouse on the screen and updates the value when clicked

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
  /*
    When the mouse button is released, the position will reset back to 0
    The percentage slid is stored in thsi variable to use if the track is scrolled again
  */
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  // To make sure the code knows when the mouse is down, since the mouse down position is 0 before the mouse is pressed, the code below will be skipped
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

  // The maximum slider position is one half of the page and scrolls from one end to the other
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  /* 
    This part of the code creates an invisible slider
    It finds the relative position by subtracting the current position from the starting position
    By dividing the maximum value by the relative position and multiplying by 100, it returns a percentage of how far the user scrolled
  */
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  /* 
    The page can now be translated (scrolled) by the percentage found
    To ensure that the percentage does not reset back to 0%, the last percentage can be added to the new percentage to find the next percentage slid
  */
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
/* 
  This code loops over each image, and changed the horizontal percentage of the image according to how much the page was scrolled
  The scroll is animated for 1.2 seconds and set to fill so the animation is persisted even after the user stops scrolling. This creates a much smoother version
*/

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// These lines detect touch events for mobile and touchscreen devices

const button = document.getElementById('australia');

button.addEventListener('click', ()=>{
  window.location.href = 'html/australia.html';
})

const button2 = document.getElementById('cambodia');

button2.addEventListener('click', ()=>{
  window.location.href = 'html/cambodia.html';
})

const button3 = document.getElementById('china');

button3.addEventListener('click', ()=>{
  window.location.href = 'html/china.html';
})

const button4 = document.getElementById('fiji');

button4.addEventListener('click', ()=>{
  window.location.href = 'html/fiji.html';
})

const button5 = document.getElementById('newzealand');

button5.addEventListener('click', ()=>{
  window.location.href = 'html/newzealand.html';
})

const button6 = document.getElementById('rarotonga');

button6.addEventListener('click', ()=>{
  window.location.href = 'html/rarotonga.html';
})

const button7 = document.getElementById('singapore');

button7.addEventListener('click', ()=>{
  window.location.href = 'html/singapore.html';
})

const button8 = document.getElementById('vietnam');

button8.addEventListener('click', ()=>{
  window.location.href = 'html/vietnam.html';
})

/* 
  These lines are event listeners that are individually assigned to each image
  When the images are clicked, the event listener will redirect the browser to the new adress of the HTML file of the country
*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } 
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

/*
  This part of the code is an intersection oberserver
  An intersection observer detects when an element, in this case, all elements with the class 'hidden' are visible on screen
  It then targets these elements and adds the 'show' class
  Any elements with this 'show' class are animated with a transition
*/