import { ExperienceCard } from "@/components";
import { experienceInfo } from "@/constants/data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experienceInfo.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              location={exp.location}
              points={exp.points}
              role={exp.role}
              start={exp.start}
              blockquote={exp.blockquote}
              end={exp.end}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
