"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  points: string[];
  blockquote?: string | null;
  start: string;
  end?: string;
  delayIndex?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  location,
  points,
  blockquote,
  start,
  end = "Present",
  delayIndex,
}) => {
  const experienceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 1,
        x: 0,
        delay: (delayIndex ?? 1) * 0.15,
        ease: "power3.out",
      }
    );
  }, [delayIndex]);

  return (
    <div
      ref={experienceRef}
      className="glass-effect p-8 rounded-2xl experience-card"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold gradient-text">{role}</h3>
          <p className="text-xl text-gray-300">
            {company} – {location}
          </p>
        </div>
        <span className="text-purple-400 font-semibold">
          {start} – {end}
        </span>
      </div>
      {/* <p className="text-gray-300 mb-4">
              Led entire frontend architecture for business management platform.
              Built proposal editor and Kanban task board with 1,000+ records
              support.
            </p> */}
      <ul className="text-gray-300 mb-4 list-disc ml-3.5">
        {points.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {blockquote && blockquote?.trim() !== "" && (
        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400">
          {blockquote}
        </blockquote>
      )}
    </div>
  );
};

export default ExperienceCard;
