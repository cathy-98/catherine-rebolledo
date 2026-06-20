"use client";

import { useEffect } from "react";

export function ScrollImmersion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const root = document.documentElement;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.style.setProperty("--scroll-progress", "1");
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll-progress", `${Math.min(1, window.scrollY / maxScroll).toFixed(4)}`);

      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const depth = Number(item.dataset.parallax || "0.08");
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - itemCenter) * depth;
        item.style.setProperty("--scroll-shift", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    const handleTiltMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      target.style.setProperty("--spot-x", `${(x * 100).toFixed(2)}%`);
      target.style.setProperty("--spot-y", `${(y * 100).toFixed(2)}%`);
      target.style.setProperty("--tilt-x", `${((0.5 - y) * 4).toFixed(2)}deg`);
      target.style.setProperty("--tilt-y", `${((x - 0.5) * 4).toFixed(2)}deg`);
      target.classList.add("is-tilting");
    };

    const handleTiltLeave = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.classList.remove("is-tilting");
    };

    tiltItems.forEach((item) => {
      item.addEventListener("pointermove", handleTiltMove);
      item.addEventListener("pointerleave", handleTiltLeave);
    });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      if (frame) window.cancelAnimationFrame(frame);
      tiltItems.forEach((item) => {
        item.removeEventListener("pointermove", handleTiltMove);
        item.removeEventListener("pointerleave", handleTiltLeave);
      });
    };
  }, []);

  return (
    <div className="scroll-immersion-guide" aria-hidden="true">
      <span />
    </div>
  );
}
