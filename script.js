  // Wait for the DOM to fully load
  document.addEventListener('DOMContentLoaded', function() {
    // Open the mobile menu when the hamburger icon is clicked
    document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('.mobile-menu').classList.add('active');
    });

    // Close the mobile menu when the close icon is clicked
    document.querySelector('.close-menu').addEventListener('click', function() {
      document.querySelector('.mobile-menu').classList.remove('active');
    });
  });




//   Day and night 

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('night');
    });
  });
  
