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