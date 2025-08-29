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
import Lenis from '@studio-freight/lenis';

let lenisInstance = null;
let initialized = false;

// Detect touchpad based on wheel event characteristics
function isTouchpad(event) {
  // Touchpads typically have deltaMode 0 (pixels) and small delta values
  return event.deltaMode === 0 && Math.abs(event.deltaY) < 15;
}

// Initialize Lenis only for non-touchpad users
function initializeLenis(enable) {
  if (initialized) return;
  
  if (enable) {
    // Initialize Lenis for mouse users
    lenisInstance = new Lenis({
      smooth: true,
      lerp: 0.07,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      smoothTouch: false,
      syncTouch: false,
      normalizeWheel: true,
      autoResize: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Make available globally for other components
    window.lenisInstance = lenisInstance;
    console.log("✅ Lenis enabled for mouse users");
  } else {
    // Touchpad detected - disable Lenis completely
    console.log("🚫 Lenis disabled for touchpad users - using native scroll");
  }
  
  initialized = true;
}

// Listen for first wheel event to detect input device
function onFirstWheel(event) {
  const isTouchpadInput = isTouchpad(event);
  
  // Enable Lenis only if NOT touchpad
  initializeLenis(!isTouchpadInput);
  
  // Remove listener after detection
  window.removeEventListener('wheel', onFirstWheel, { passive: true });
}

// Start listening for wheel events
window.addEventListener('wheel', onFirstWheel, { passive: true });

// Fallback initialization after 2 seconds (assume mouse if no wheel event)
setTimeout(() => {
  if (!initialized) {
    console.log("⏱️ Fallback: No wheel detected, enabling Lenis");
    initializeLenis(true);
  }
}, 2000);

export default lenisInstance;
