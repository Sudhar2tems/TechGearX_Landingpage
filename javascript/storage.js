function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

function toggleSubMenu(submenuId, element) {
    const submenu = document.getElementById(submenuId);
    
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        element.querySelector("i").classList.replace("fa-minus", "fa-plus");
    } else {
        submenu.style.display = "block";
        element.querySelector("i").classList.replace("fa-plus", "fa-minus");
    }
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon");
    const overlay = document.getElementById("overlay");
    
    if (!menu.contains(event.target) && !menuIcon.contains(event.target) && menu.classList.contains("active")) {
        toggleMenu();
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

