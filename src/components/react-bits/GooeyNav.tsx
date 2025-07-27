import React, { useRef, useEffect, useState } from "react";

interface GooeyNavItem {
  label: string;
  onClick: () => void;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 4, 5, 6, 1, 2],
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);
  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number
  ): [number, number] => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };
  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number
  ) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };
  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // console.log("Err");
          }
        }, t);
      }, 30);
    }
  };
  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };
  const handleClick = (
    e: React.MouseEvent<HTMLLIElement>,
    index: number,
    onClick: () => void
  ) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
    onClick();
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
    onClick: () => void
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          { currentTarget: liEl } as React.MouseEvent<HTMLLIElement>,
          index,
          onClick
        );
      }
    }
  };
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
            
            /* Light mode colors - Blue theme */
            --color-1: #3b82f6;
            --color-2: #6366f1;
            --color-3: #8b5cf6;
            --color-4: #10b981;
            --color-5: #3b82f6;
            --color-6: #84cc16;
            --nav-bg-light: rgba(255, 255, 255, 0.95);
            --nav-text-light: #1e293b;
            --nav-text-shadow-light: 0 1px 2px rgba(0, 0, 0, 0.1);
            --nav-active-bg-light: #3b82f6;
            --nav-active-text-light: #ffffff;
            --filter-bg-light: #ffffff;
            --filter-blend-light: multiply;
            
            /* Dark mode colors - keeping original */
            --color-1-dark: #ffffff;
            --color-2-dark: #e5e5e5;
            --color-3-dark: #cccccc;
            --color-4-dark: #a855f7;
            --color-5-dark: #f59e0b;
            --color-6-dark: #ef4444;
            --nav-bg-dark: rgba(0, 0, 0, 0.95);
            --nav-text-dark: #ffffff;
            --nav-text-shadow-dark: 0 1px 1px rgba(255, 255, 255, 0.1);
            --nav-active-bg-dark: #ffffff;
            --nav-active-text-dark: #1a1a1a;
            --filter-bg-dark: #000000;
            --filter-blend-dark: lighten;
          }
          
          /* Dark mode overrides */
          .dark {
            --color-1: var(--color-1-dark);
            --color-2: var(--color-2-dark);
            --color-3: var(--color-3-dark);
            --color-4: var(--color-4-dark);
            --color-5: var(--color-5-dark);
            --color-6: var(--color-6-dark);
          }
          
          .gooey-nav {
            background: var(--nav-bg-light);
            color: var(--nav-text-light);
            text-shadow: var(--nav-text-shadow-light);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            /* Removed box-shadow here */
          }
          
          .dark .gooey-nav {
            background: var(--nav-bg-dark);
            color: var(--nav-text-dark);
            text-shadow: var(--nav-text-shadow-dark);
            border: 1px solid rgba(255, 255, 255, 0.1);
            /* Removed box-shadow here */
          }
          
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          
          .effect.text {
            color: var(--nav-text-light);
            transition: color 0.3s ease;
          }
          
          .dark .effect.text {
            color: var(--nav-text-dark);
          }
          
          .effect.text.active {
            color: var(--nav-active-text-light);
          }
          
          .dark .effect.text.active {
            color: var(--nav-active-text-dark);
          }
          
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: var(--filter-blend-light);
          }
          
          .dark .effect.filter {
            mix-blend-mode: var(--filter-blend-dark);
          }
          
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: var(--filter-bg-light);
          }
          
          .dark .effect.filter::before {
            background: var(--filter-bg-dark);
          }
          
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--nav-active-bg-light);
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
            /* Removed box-shadow here */
          }
          
          .dark .effect.filter::after {
            background: var(--nav-active-bg-dark);
            /* Removed box-shadow here */
          }
          
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease 1 -350ms;
          }
          
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) ease 1 -350ms;
            /* Removed box-shadow here */
          }
          
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          
          .gooey-nav li.active {
            color: var(--nav-active-text-light);
            text-shadow: none;
          }
          
          .dark .gooey-nav li.active {
            color: var(--nav-active-text-dark);
          }
          
          .gooey-nav li.active::after {
            opacity: 1;
            transform: scale(1);
          }
          
          .gooey-nav li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: var(--nav-active-bg-light);
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
            /* Removed box-shadow here */
          }
          
          .dark .gooey-nav li::after {
            background: var(--nav-active-bg-dark);
            /* Removed box-shadow here */
          }
          
          .gooey-nav li:hover {
            transform: translateY(-1px);
            transition: transform 0.2s ease;
          }
          
          .gooey-nav li:hover::after {
            transform: scale(0.95);
          }
        `}
      </style>
      <div className="relative" ref={containerRef}>
        <nav
          className="gooey-nav flex relative p-2 w-fit"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="flex gap-2 list-none p-0 px-2 m-0 relative z-[3]"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`py-2 px-2 rounded-lg relative cursor-pointer transition-all duration-300 ease font-medium ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, index, item.onClick)}
              >
                <button
                  onKeyDown={(e) => handleKeyDown(e, index, item.onClick)}
                  className="outline-none text-inherit no-underline bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;
