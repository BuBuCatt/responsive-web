 // Wait for the DOM to fully load before running the script
 document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger icon
    var hamburger = document.querySelector('.hamburger');
    // Select the navigation menu
    var navItems = document.querySelector('.nav-items ul');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', function() {
      // Toggle the .active class on the navigation menu
      navItems.classList.toggle('active');
    });
  });