"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

interface LanguageCardProps {
  icon: string;
  name: string;
  skillLevel: string;
  proficiency: number;
  description: string;
  delayIndex: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({
  icon,
  name,
  skillLevel,
  proficiency,
  description,
  delayIndex = 1,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const proficiencyFillRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const card = cardRef.current;
    const proficiencyFill = proficiencyFillRef.current;

    if (!card || !proficiencyFill) return;

    // Card entrance animation
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 1,
        y: 0,
        scale: 1,
        delay: delayIndex * 0.15,
        ease: "power3.out",
      }
    );

    // Proficiency bar animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: card,
      start: "top 70%",
      onEnter: () => {
        setTimeout(() => {
          proficiencyFill.style.width = proficiency * 10 + "%";
        }, delayIndex * 200);
      },
    });

    // Floating particles animation
    const animateParticles = () => {
      particlesRef.current.forEach((particle, i) => {
        if (!particle || !card) return;

        const cardRect = card.getBoundingClientRect();

        gsap.set(particle, {
          x: Math.random() * cardRect.width,
          y: Math.random() * cardRect.height,
          scale: Math.random() * 0.5 + 0.5,
        });

        gsap.to(particle, {
          duration: 3 + Math.random() * 2,
          opacity: Math.random() * 0.7 + 0.3,
          x: Math.random() * cardRect.width,
          y: Math.random() * cardRect.height,
          ease: "none",
          repeat: -1,
          yoyo: true,
          delay: i * 0.5,
        });
      });
    };

    const timer = setTimeout(animateParticles, 1000);

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(particlesRef.current, {
        duration: 0.3,
        scale: 1.5,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(particlesRef.current, {
        duration: 0.3,
        scale: 1,
        opacity: 0.5,
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      clearTimeout(timer);
      scrollTrigger.kill();
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [proficiency, delayIndex]);

  return (
    <div
      ref={cardRef}
      className="language-card glass-effect p-8 rounded-2xl"
      data-proficiency={proficiency * 10}
    >
      <div className="floating-particles">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) particlesRef.current[i] = el;
            }}
            className="particle"
          />
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="language-icon">{icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-gray-400 skill-level">{skillLevel}</p>
          </div>
        </div>
        <div className="proficiency-number">
          {Number.isInteger(proficiency) ? proficiency.toFixed(1) : proficiency}
        </div>
      </div>

      <div className="proficiency-bar mb-4">
        <div className="proficiency-glow" />
        <div
          ref={proficiencyFillRef}
          className="proficiency-fill"
          data-width={proficiency * 10}
        >
          <div
            className="shimmer-effect"
            style={{ "--delay": "0s" } as React.CSSProperties}
          />
        </div>
      </div>

      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default LanguageCard;
