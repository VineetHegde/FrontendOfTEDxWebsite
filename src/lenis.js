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
  // Primary smoothness control (0.05-0.1 recommended)
  lerp: 0.07,
  
  // Scroll speed multipliers
  wheelMultiplier: 1,      // Desktop scroll wheel speed
  touchMultiplier: 1,      // Touch scroll speed
  
  // Basic smoothing settings
  smooth: true,
  smoothWheel: true,       // Enable smooth wheel scrolling
  smoothTouch: false,      // Disable smooth touch (prevents iOS issues)
  
  // Performance settings
  syncTouch: false,        // Better mobile compatibility
  touchInertiaMultiplier: 35, // Touch momentum
  
  // Boundary settings
  infinite: false,         // Don't allow infinite scroll
  orientation: 'vertical', // Scroll direction
  gestureOrientation: 'vertical',
  
  // Advanced settings
  normalizeWheel: true,    // Better cross-browser compatibility
  autoResize: true,        // Automatically handle resize events
});

// Animation frame loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// Start the animation loop
requestAnimationFrame(raf);

// Optional: Add window event listeners for debugging
if (process.env.NODE_ENV === 'development') {
  lenis.on('scroll', (e) => {
    console.log('Lenis scroll:', e);
  });
}

export default lenis;
