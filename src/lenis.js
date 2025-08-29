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

// export default lenis;import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  // DISABLE all smoothing completely
  smooth: false,        // Main smoothing OFF
  smoothWheel: false,   // Wheel smoothing OFF  
  smoothTouch: false,   // Touch smoothing OFF
  
  // NO interpolation
  lerp: 0,             // Zero lerp = no interpolation
  
  // Normal scroll speeds
  wheelMultiplier: 1,   // Default wheel speed
  touchMultiplier: 1,   // Default touch speed
  
  // Minimal settings
  syncTouch: false,
  touchInertiaMultiplier: 1,
  normalizeWheel: false, // Let browser handle wheel events
  autoResize: true,      // Keep this for layout updates
});

// Keep the animation loop minimal
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;
