gsap.registerPlugin(MotionPathPlugin);

// Make CSS variables accessible
const rootStyles = getComputedStyle(document.documentElement);
const sunriseColor = rootStyles.getPropertyValue('--yellow-light').trim();
const middayColor = rootStyles.getPropertyValue('--pink-light').trim();
const sunsetColor = rootStyles.getPropertyValue('--purple-light').trim();

// Animate sun and track progress
const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: { duration: 6, ease: "power1.inOut" },
  onUpdate: () => {
    const progress = tl.progress();

    // Interpolate background based on progress
    if (progress < 0.5) {
      document.body.style.backgroundColor = sunriseColor;
    } else if (progress < 0.8) {
      document.body.style.backgroundColor = middayColor;
    } else {
      document.body.style.backgroundColor = sunsetColor;
    }
  },
});

tl.to("#sun", {
  motionPath: {
    path: "#sunPath",
    align: "#sunPath",
    autoRotate: false,
  },
});
