"use client";

import Pill from "../pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faFolder,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { tailwindPalette } from "@/constants/palette";

interface ProjectCardProps {
  image?: string;
  title: string;
  description?: string;
  skills?: string[];
  url?: string | null;
  code?: string | null;
  delayIndex?: number;
}

function shuffle(array: string[]) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description = "",
  skills = [],
  url,
  code,
  delayIndex,
}) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const [skillColors, setSkillColors] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_DESC_LENGTH = 120;
  const MAX_SKILLS = 4;

  const truncatedDescription =
    description.length > MAX_DESC_LENGTH
      ? description.substring(0, MAX_DESC_LENGTH) + "..."
      : description;

  const visibleSkills = isExpanded ? skills : skills.slice(0, MAX_SKILLS);
  const hasMoreContent =
    description.length > MAX_DESC_LENGTH || skills.length > MAX_SKILLS;

  useEffect(() => {
    const shuffledColors = shuffle(tailwindPalette);
    const colors = skills.map(
      (_, index) => shuffledColors[index % shuffledColors.length]
    );
    setSkillColors(colors);
  }, [skills]);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 100 },
      {
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 1,
        y: 0,
        delay: (delayIndex ?? 1) * 0.2,
        ease: "power3.out",
      }
    );
  }, [delayIndex]);

  return (
    <div
      ref={projectRef}
      className="project-card glass-effect p-6 rounded-2xl hover:[&_img]:scale-[1.2] [&_img]:rounded-2xl h-full flex flex-col"
    >
      <div className="gradient-bg h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
        {image && image?.trim() !== "" ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-contain p-10 transition-all duration-300"
          />
        ) : (
          <FontAwesomeIcon icon={faFolder} className="text-6xl text-white" />
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {isExpanded ? description : truncatedDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {visibleSkills.map((label, index) => (
            <Pill
              label={label}
              key={label}
              backgroundColor={skillColors[index] || "bg-gray-500"}
            />
          ))}
          {!isExpanded && skills.length > MAX_SKILLS && (
            <span className="text-sm text-gray-400 self-center">
              +{skills.length - MAX_SKILLS} more
            </span>
          )}
        </div>

        {hasMoreContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm mb-4 self-start flex items-center gap-1"
          >
            {isExpanded ? "Show less" : "Show more"}
            <FontAwesomeIcon
              icon={isExpanded ? faChevronUp : faChevronDown}
              className="text-xs"
            />
          </button>
        )}

        <div className="flex space-x-4 mt-auto">
          {url && url?.trim() !== "" && (
            <a
              className="text-purple-400 hover:text-purple-300 transition-colors"
              target="_blank"
              href={url}
            >
              <FontAwesomeIcon className="mr-2" icon={faExternalLink} />
              Live Demo
            </a>
          )}
          {code && code?.trim() !== "" && (
            <a
              className="text-purple-400 hover:text-purple-300 transition-colors"
              target="_blank"
              href={code}
            >
              <FontAwesomeIcon className="mr-2" icon={faGithub} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
