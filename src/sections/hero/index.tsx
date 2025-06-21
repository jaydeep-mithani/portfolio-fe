"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroTyperwriterText } from "@/constants/data";

const Hero = () => {
  const typewriterRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const texts = heroTyperwriterText;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = typewriterRef.current;
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;

    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (typewriterElement)
        if (isDeleting) {
          typewriterElement.textContent = currentText.substring(
            0,
            charIndex - 1
          );
          charIndex--;
        } else {
          typewriterElement.textContent = currentText.substring(
            0,
            charIndex + 1
          );
          charIndex++;
        }

      let nextTimeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        nextTimeout = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(typeWriter, nextTimeout);
    };

    // Start typewriter effect after initial animations
    setTimeout(typeWriter, 1500);

    // Hero animation
    const heroTl = gsap.timeline();

    heroTl
      .set(".fade-in-up", { opacity: 0, y: 50 })
      .to(".hero-content h1", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      })
      .to(
        ".hero-content p",
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        ".hero-content .fade-in-up:last-child",
        {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="floating absolute top-20 left-10 w-72 h-72 gradient-bg rounded-full mix-blend-multiply filter blur-xl opacity-20" />
        <div
          className="floating absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="floating absolute bottom-20 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <div className="hero-content">
          <h1 className="text-6xl md:text-8xl font-black mb-6 fade-in-up">
            <span className="gradient-text">Jaydeep</span>
            <br />
            <span className="text-white">Mithani</span>
          </h1>
          <p
            id="typewriter"
            ref={typewriterRef}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto typewriter min-h-[3rem] fade-in-up"
          />
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 fade-in-up">
            <a
              id="viewWorkBtn"
              className="magnetic-btn gradient-bg px-8 py-4 rounded-full text-white font-semibold text-lg"
              href="#projects"
            >
              View My Work
            </a>
            <a
              href="./docs/Resume.pdf"
              target="_blank"
              className="magnetic-btn border-2 border-purple-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-purple-500 transition-colors"
              download={"Jaydeep Mithani Resume.pdf"}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
