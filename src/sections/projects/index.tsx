import { Pill, ProjectCard } from "@/components";
import { projectsData } from "@/constants/data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              code={project.code}
              description={project.description}
              image={project.thumbnail}
              skills={project.skills}
              url={project.url}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
