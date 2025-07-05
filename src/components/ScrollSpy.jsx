import { useEffect } from "react";

const sectionIds = ["home", "services", "about", "projects", "contact"];

function ScrollSpy() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      let visibleSection = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection) {
        const newHash = `#${visibleSection}`;
        if (visibleSection !== "home" && window.location.hash !== newHash) {
          window.history.replaceState(null, "", newHash);
        } else {
          window.history.replaceState(null, "", "/");
        }
      } else {
          if (window.scrollY < 100 && window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
      }
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ScrollSpy;
