// import { useEffect } from "react";

import { TechCard } from "@/components";
import { keyAchievements, techStack } from "@/constants/data";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  // useEffect()
  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Frontend-focused Full-Stack Developer with nearly 3 years of
            experience delivering scalable, performant web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Professional Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in creating exceptional user experiences using
                modern frontend technologies. From leading entire frontend
                architectures to building complex interactive components, I've
                successfully delivered solutions for SMBs, enterprises, and
                healthcare providers.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Key Achievements
              </h3>
              <ul className="space-y-2 text-gray-300">
                {keyAchievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-purple-500 mr-3 mt-1"
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold gradient-text mb-8">
                Tech Stack
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack?.map((techItem, index) => (
                <TechCard
                  label={techItem.title}
                  delayIndex={index}
                  icon={techItem.icon}
                  iconColor={techItem.color}
                  custom={techItem.custom}
                  customIcon={techItem.customIcon}
                  key={techItem.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
