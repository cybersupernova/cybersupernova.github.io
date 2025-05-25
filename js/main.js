document.addEventListener("DOMContentLoaded", function() {
  // Get the current page path
  const currentPath = window.location.pathname.split("/").pop();

  // Get all navigation links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function(link) {
    const linkPath = link.getAttribute("href");
    
    // Remove active class from all links first
    link.classList.remove("active"); 
    // The .active class for navbar links in Bootstrap typically applies to the parent <li> (nav-item)
    // However, the CSS for underline was set on .nav-link itself. Our custom CSS for the underline targets .nav-link.active.

    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });
});
