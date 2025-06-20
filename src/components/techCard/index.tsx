"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface TechCardProps {
  icon?: IconProp;
  iconColor?: string;
  label: string;
  delayIndex?: number;
  custom?: boolean;
  customIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const TechCard: React.FC<TechCardProps> = ({
  icon,
  iconColor = "#fff",
  label = "",
  delayIndex = 0,
  custom,
  customIcon: CustomIcon,
}) => {
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll animations
    const card = techRef.current;
    gsap.fromTo(
      card,
      { opacity: 0, y: 100 },
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
        delay: (delayIndex ?? 1) * 0.1,
        ease: "power3.out",
      }
    );
  }, [delayIndex]);

  return (
    <div
      ref={techRef}
      className="tech-card glass-effect p-4 rounded-xl text-center"
    >
      {icon && !custom ? (
        <FontAwesomeIcon icon={icon} className={`${iconColor} text-4xl mb-2`} />
      ) : CustomIcon ? (
        <div className="flex items-start justify-center">
          <CustomIcon />
        </div>
      ) : (
        <div className="text-4xl mb-2" />
      )}
      <p className="font-semibold">{label}</p>
    </div>
  );
};

export default TechCard;
