document.addEventListener('DOMContentLoaded', function () {
  // Select the hamburger icon
  const hamburger = document.querySelector('.hamburger');
  // Select the menu
  const navMenu = document.querySelector('.nav-items ul');

  const closeMenu = document.querySelector('.close-menu');

  // Listen for a click on the hamburger
  hamburger.addEventListener('click', function () {
    // Toggle the 'active' class on the menu
    navMenu.classList.toggle('active');
  });




});



//   Day and night 

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('night');
    });
  });
  
