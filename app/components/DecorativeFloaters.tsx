import Image from "next/image";

const floaters = [
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-1", size: 14 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-2", size: 15 },
  { src: "/figma/hero-sun.svg", className: "site-floater site-floater-3", size: 20 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-4", size: 22 },
  { src: "/figma/hero-smile.svg", className: "site-floater site-floater-5", size: 20 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-6", size: 14 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-7", size: 13 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-8", size: 16 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-9", size: 12 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-10", size: 20 },
  { src: "/figma/hero-sun.svg", className: "site-floater site-floater-11", size: 18 },
  { src: "/figma/hero-smile.svg", className: "site-floater site-floater-12", size: 18 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-13", size: 15 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-14", size: 14 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-15", size: 12 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-16", size: 20 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-17", size: 16 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-18", size: 15 },
  { src: "/figma/hero-sun.svg", className: "site-floater site-floater-19", size: 19 },
  { src: "/figma/stars-icon.svg", className: "site-floater site-floater-20", size: 13 },
  { src: "/figma/hero-smile.svg", className: "site-floater site-floater-21", size: 18 },
  { src: "/figma/hero-doodle-left-top.svg", className: "site-floater site-floater-22", size: 21 },
  { src: "/figma/hero-flower.svg", className: "site-floater site-floater-23", size: 15 },
  { src: "/figma/hero-heart.svg", className: "site-floater site-floater-24", size: 14 },
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
        />
      ))}
    </div>
  );
}
