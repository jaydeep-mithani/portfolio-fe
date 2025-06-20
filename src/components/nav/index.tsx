"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import HamburgerIcon from "../hamburgerIcon";
import { navItems } from "@/constants/data";

const Nav = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const navItems = navRef.current;
    const navLinks = navItems?.querySelectorAll<HTMLLIElement>(".nav-link");
    if (!marker || !navLinks) return;

    let isHovering = false;
    const sectionIds = ["home", "about", "projects", "experience", "contact"];

    const moveMarker = (element: HTMLElement, fast = false) => {
      const containerRect = navItems!.getBoundingClientRect();
      const itemRect = element.getBoundingClientRect();
      gsap.to(marker, {
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        duration: fast ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const setActive = (targetId: string) => {
      if (isHovering) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = Array.from(navLinks).find(
        (link) =>
          link.querySelector("a")?.getAttribute("href") === `#${targetId}`
      );
      if (activeLink) {
        activeLink.classList.add("active");
        moveMarker(activeLink as HTMLElement);
      }
    };

    // Mouse events
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        isHovering = true;
        moveMarker(link as HTMLElement, true);
      });
      link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    navItems?.addEventListener("mouseleave", () => {
      isHovering = false;
      const activeElement =
        navItems.querySelector<HTMLElement>(".nav-link.active");
      if (activeElement) moveMarker(activeElement, true);
    });

    // Improved scroll detection
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      if (isHovering) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case for bottom of page
      if (window.scrollY + windowHeight >= documentHeight - 10) {
        setActive("contact");
        return;
      }

      // Special case for top of page
      if (window.scrollY < 100) {
        setActive("home");
        return;
      }

      // Find the section that's most visible
      let activeSection = "home";
      let maxVisibility = 0;

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Calculate visibility percentage
        const viewportTop = window.scrollY;
        const viewportBottom = window.scrollY + windowHeight;

        const visibleTop = Math.max(sectionTop, viewportTop);
        const visibleBottom = Math.min(sectionBottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / windowHeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          activeSection = section.id;
        }
      });

      setActive(activeSection);
    };

    // Throttled scroll handler
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    // Initial setup
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Mobile menu
  useEffect(() => {
    const menu = menuRef.current;
    const button = buttonRef.current;
    if (!button || !menu) return;

    const handleToggle = () => menu.classList.toggle("-translate-x-full");
    const handleLinkClick = () => menu.classList.add("-translate-x-full");

    button.addEventListener("click", handleToggle);
    menu
      .querySelectorAll(".mobile-nav-link")
      .forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      button.removeEventListener("click", handleToggle);
      menu
        .querySelectorAll(".mobile-nav-link")
        .forEach((link) => link.removeEventListener("click", handleLinkClick));
    };
  }, []);

  return (
    <Fragment>
      <nav className="fixed top-0 w-full nav-glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-5xl font-black gradient-text md:mt-5 doto">
            JM
          </div>
          <ul ref={navRef} className="hidden md:flex links-container mt-5">
            {navItems.map((item, i) => (
              <li key={item} className={`nav-link ${i === 0 ? "active" : ""}`}>
                <a className="outline-none" href={`#${item.toLowerCase()}`}>
                  <span>{item}</span>
                </a>
              </li>
            ))}
            <div ref={markerRef} id="marker" className="desktop-marker" />
          </ul>
          <div className="md:hidden">
            <button ref={buttonRef} className="text-white focus:outline-none">
              <HamburgerIcon size={50} hoverColor="#96a9ff" />
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-gray-900 z-40 transform -translate-x-full transition-transform duration-300"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mobile-nav-link hover:text-purple-400 transition-all duration-300 hover:ml-10"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
