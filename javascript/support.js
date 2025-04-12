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



document.getElementById("warrantyForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    const model = document.getElementById("model").value.trim();
    const serial = document.getElementById("serial").value.trim();

    if (model && serial) {
      alert(`Tracking warranty for Model: ${model}, Serial: ${serial}`);
      // You can replace the alert with actual API call or redirect
    } else {
      alert("Please fill in both fields.");
    }
  });



  const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("active");
        header.classList.toggle("open");
      });
    });


