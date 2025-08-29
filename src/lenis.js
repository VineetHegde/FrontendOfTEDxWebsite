// import Lenis from '@studio-freight/lenis';

// const lenis = new Lenis({
//   duration: 1.6,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
//   smooth: true,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// export default lenis;
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  lerp: 0.01,           // Almost no smoothing
  smooth: true,
  smoothWheel: false,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;
