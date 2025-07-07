let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

  const con = document.getElementById("con");
  const navLinks = document.getElementById("nav-links");
  let hideTimeout;

  // Show menu on hover over hamburger icon
  con.addEventListener("mouseenter", () => {
    navLinks.classList.add("show");
    clearTimeout(hideTimeout);
  });

  // Keep menu open when hovering over nav
  navLinks.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
  });

  // Start hide timer when mouse leaves hamburger
  con.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      navLinks.classList.remove("show");
    }, 5000);
  });

  // Start hide timer when mouse leaves nav
  navLinks.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      navLinks.classList.remove("show");
    }, 100);
  });
  // Mission/Vision swipe effect
  let mvIndex = 0;
  const mvItems = document.querySelectorAll(".mv-item");

  function cycleMV() {
    mvItems.forEach(item => item.classList.remove("active"));
    mvIndex = (mvIndex + 1) % mvItems.length;
    mvItems[mvIndex].classList.add("active");
  }
  setInterval(cycleMV, 6000); // Change every 6 seconds

  // Testimonials slideshow
  let testimonialIndex = 0;
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");

  function showTestimonials() {
    testimonialSlides.forEach(s => s.classList.remove("show"));
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    testimonialSlides[testimonialIndex].classList.add("show");
  }
  setInterval(showTestimonials, 5000); // Change every 5 seconds




