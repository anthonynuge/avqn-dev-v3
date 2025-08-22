// src/components/ScrollSpySide.jsx
import { useEffect, useMemo, useRef, useState } from "react";

// Map labels to section IDs on the page
const LINKS = [
  { label: "FEATURED", id: "featured" },
  { label: "EXPLORER", id: "explorer" },
  { label: "SKILLS", id: "skills" },
  { label: "ABOUT", id: "about" },
];

export default function ScrollSpySide() {
  const [active, setActive] = useState(LINKS[0].id);
  const itemRefs = useRef({});
  const indicatorRef = useRef(null);

  // Update active section as you scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      {
        root: null,
        // trigger when a section is roughly in the middle of the screen
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  // Move the indicator to the active item
  const moveIndicator = () => {
    const el = itemRefs.current[active];
    const ind = indicatorRef.current;
    if (!el || !ind) return;
    const { offsetTop, offsetHeight } = el;
    ind.style.transform = `translateY(${offsetTop + offsetHeight / 2 - 10}px)`; // center the dot (20px tall)
  };

  useEffect(() => {
    moveIndicator();
    const onResize = () => moveIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  // (Optional) smooth scroll behavior for in-page links
  const onClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Build the nav items
  const items = useMemo(
    () =>
      LINKS.map(({ label, id }) => {
        const isActive = active === id;
        return (
          <li
            key={id}
            ref={(node) => (itemRefs.current[id] = node)}
            className="relative"
          >
            <a
              href={`#${id}`}
              onClick={(e) => onClick(e, id)}
              className={[
                "block select-none",
                "transition-transform duration-300",
                isActive ? "scale-102" : "scale-100",
              ].join(" ")}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={[
                  "text-sm ",
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-80",
                ].join(" ")}
              >
                {label}
              </span>
            </a>

            {/* per-item subtle underline grows when active */}
            <span
              className={[
                "pointer-events-none absolute left-0 right-0 bottom-0 h-px",
                isActive ? "scale-x-100" : "scale-x-0",
              ].join(" ")}
            />
          </li>
        );
      }),
    [active]
  );

  return (
    <>
      <nav
        className="
          fixed z-[80] hidden md:block
          top-1/2 -translate-y-1/2
           w-32 translate-x-[48px]
        "
        aria-label="Section navigation"
      >
        <div
          className="
            relative          "
        >
          {/* Vertical rail */}
          <ul className="relative font-medium">{items}</ul>
        </div>
      </nav>
    </>
  );
}
