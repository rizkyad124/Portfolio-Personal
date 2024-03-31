const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const exit = document.querySelector('.exit'); // Menambahkan selector untuk tombol exit

burger.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  // Burger Animation
  burger.classList.toggle('toggle');
});

// Menambahkan event listener untuk tombol exit
exit.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');

  // Burger Animation
  burger.classList.toggle('toggle');
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
