/**
 * Nexus Mind - Core JavaScript
 * 0 Libraries, 0 Bullshit.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- Sticky Navbar ---
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Parallax Effect ---
  // Minimal parallax for the hero elements
  const hero = document.getElementById("hero");
  const glows = document.querySelectorAll(".glow");

  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    glows.forEach((glow, index) => {
      const factor = (index + 1) * 2;
      glow.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });

  // --- Scroll Reveal ---
  // Uses the native Intersection Observer API
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  reveals.forEach((el) => revealObserver.observe(el));

  // --- Smooth Anchor Navigation ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
