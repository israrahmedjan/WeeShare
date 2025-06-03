export function initIntersectionObserver(selector = ".reveal", activeClass = "active", threshold = 0.1) {
  const reveals = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(activeClass);
      }
    });
  }, { threshold });

  reveals.forEach((el) => {
    observer.observe(el);
  });

  // Cleanup function
  return () => {
    reveals.forEach((el) => observer.unobserve(el));
  };
}


