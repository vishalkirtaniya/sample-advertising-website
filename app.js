gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".highlight").forEach((span) => {
  ScrollTrigger.create({
    trigger: span,
    start: "top 70%",
    toggleClass: "active",
  });
});
