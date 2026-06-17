import Image from "next/image";

const floaters = [
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-1", size: 14, depth: 0.035 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-2", size: 15, depth: -0.025 },
  { src: "/figma/hero-sun.svg", className: "site-floater site-floater-3", size: 20, depth: 0.04 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-4", size: 22, depth: -0.03 },
  { src: "/figma/hero-smile.svg", className: "site-floater site-floater-5", size: 20, depth: 0.05 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-6", size: 14, depth: -0.04 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-7", size: 13, depth: 0.03 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-8", size: 16, depth: 0.045 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-9", size: 12, depth: -0.025 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-10", size: 20, depth: 0.035 },
  { src: "/figma/hero-sun.svg", className: "site-floater site-floater-11", size: 18, depth: -0.03 },
  { src: "/figma/hero-smile.svg", className: "site-floater site-floater-12", size: 18, depth: 0.04 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-13", size: 15, depth: -0.035 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-14", size: 14, depth: 0.03 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-15", size: 12, depth: 0.04 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-16", size: 20, depth: -0.03 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-17", size: 16, depth: 0.04 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-18", size: 15, depth: -0.035 },
  { src: "/figma/hero-sun.svg", className: "site-floater site-floater-19", size: 19, depth: 0.035 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-20", size: 13, depth: -0.025 },
  { src: "/figma/hero-smile.svg", className: "site-floater site-floater-21", size: 18, depth: 0.045 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-22", size: 21, depth: -0.04 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-23", size: 15, depth: 0.035 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-24", size: 14, depth: -0.03 },
];

export function DecorativeFloaters() {
  return (
    <div className="site-floaters" aria-hidden="true">
      {floaters.map((floater) => (
        <Image
          key={floater.className}
          className={floater.className}
          src={floater.src}
          alt=""
          width={floater.size}
          height={floater.size}
          data-parallax={floater.depth}
        />
      ))}
    </div>
  );
}
