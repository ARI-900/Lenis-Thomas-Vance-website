// ...Lenis configaration  >>>
const lenis = new Lenis({
  duration: 1.5, // Adjust the duration to make scrolling slower
  easing: (t) => t * (2 - t) // Optional: Custom easing function for smoother scrolling
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

// ...Lenis configaration ....

let elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();

  let xTransform = gsap.utils.random(-100, 100);

  tl
    .set(image, {
      transformOrigin: `${xTransform < 0 ? 0 : '100%'}`
    }, "start")
    .to(image, {
      scale: 0,
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    }, "start")
    .to(elem, {
      xPercent: xTransform,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    }, "start")

})