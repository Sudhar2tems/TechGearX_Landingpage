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


function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.classList.add("toast", type);
    toast.textContent = message;

    document.getElementById("toast-container").appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000); // Hide after 4s
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const missingFields = [];

    // Check if all are empty
    if (!firstName && !lastName && !email && !phone && !message) {
      showToast("🚫 Please fill in the form fields.", "error");
      return;
    }
  
    if (!firstName) missingFields.push("First Name");
    if (!lastName) missingFields.push("Last Name");
    if (!email) missingFields.push("Email");
    if (!phone) missingFields.push("Phone Number");
    if (!message) missingFields.push("Message");
  
    // If any field is missing
    if (missingFields.length > 0) {
      showToast("⚠️ Please fill: " + missingFields.join(", "), "error");
      return;
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      showToast("📧 Please enter a valid email.", "error");
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      showToast("📞 Enter a valid 10-digit phone number.", "error");
      return;
    }

    showToast(`✅ Thanks, ${firstName}! Message sent successfully.`, "success");
    form.reset();
  });