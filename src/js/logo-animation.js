// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the animation
gsap.utils.toArray(".logo").forEach((logo2, index) => {
  gsap.from(logo2, {
    y: "-=100", // Start from above
    duration: 1.5, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 55%", // Trigger animation when the logo is 80% from the top
      end: "bottom 20%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play none none reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});

gsap.utils.toArray(".logo2").forEach((logo2, index) => {
  gsap.from(logo2, {
    y: "+=100", // Start from above
    duration: 1.5, // Animation duration
    scrollTrigger: {
      trigger: logo2,
      start: "top 80%", // Trigger animation when the logo is 80% from the top
      end: "bottom 20%", // Animation ends when the logo reaches 20% from the bottom
      toggleActions: "play none none reverse", // Animation plays when scrolled into view, reverses when scrolled out
    },
  });
});
