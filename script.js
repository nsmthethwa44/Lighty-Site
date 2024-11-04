// declare variables 
let header = document.querySelector(".header");
let menu = document.querySelector(".menu .fa-solid");
let navbar = document.querySelector(".navbar");
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// set menu and navbar to toggle when a menu button is clicked 
menu.onclick =() =>{
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  }

// show sticky header when a user scroll down
// or else remove sticky header 
window.onscroll = () =>{
    if (window.scrollY > 2){
        header.classList.add("sticky");
        navbar.classList.remove("active");
        menu.classList.remove("fa-xmark");
        scrollToTopBtn.classList.add("active");
    }else{
        header.classList.remove("sticky");
        scrollToTopBtn.classList.remove("active");
    }
}

// set a nav link to active state when a user clicks and remove the current active nav link 
// remove navbar 
// remove close or mark x or times when a nav link is clicked 
Array.from(navLink).forEach((item) =>{
    item.onclick = (e) =>{
      let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
      currentNavLink.classList.remove("active");
      e.target.classList.add("active");
      navbar.classList.remove("active");
      menu.classList.remove("fa-xmark");
    }
  })