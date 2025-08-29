import { Link } from "react-router";
import SectionDivider from "../SectionDivider";
import { featuredProjects } from "../../lib/data/projects";

const FeaturedProjects = () => {
  return (
    <div className="w-full">
      <SectionDivider title="Featured Projects" />
      <div className="flex flex-col md:flex-row gap-8">
        {featuredProjects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            className="h-120 w-full md:w-1/2 bg-amber-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-full flex flex-col">
              {/* Project Image/Video Placeholder */}
              <div className="h-32 bg-gradient-to-r from-amber-200 to-amber-300 flex items-center justify-center">
                <span className="text-amber-800 font-medium">
                  📱 {project.title}
                </span>
              </div>

              {/* Project Info */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.frontEnd?.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.backEnd?.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <Link
                  to={`/project/${project.id}`}
                  className="mt-auto bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
