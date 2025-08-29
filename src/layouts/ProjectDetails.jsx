import { useParams, useNavigate } from "react-router";
import { projects } from "../lib/data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find the project by ID
  const project = projects.find((p) => p.id === projectId);

  // If project not found, redirect to home
  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div className="grid grid-cols-12 mt-12 px-12">
      {/* Header */}
      <div className="col-span-full bg-blue-100">
        <h1 className="text-8xl ">{project.title}</h1>
      </div>

      {/* Content */}
      <div className="col-start-5 col-end-[-1] grid grid-cols-subgrid bg-green-300">
        {/* Image */}
        <div className="col-start-1 col-end-[-1] aspect-video overflow-hidden rounded-xl bg-neutral-200">
          {/* <img src={...} className="h-full w-full object-cover" /> */}
        </div>

        {/* INTRO/SUMMARY snapping to tracks (e.g., columns 1–8 inside content) */}
        <div className="grid grid-cols-subgrid col-span-full">
          <p className="col-span-5 text-sm md:text-base leading-relaxed opacity-90">
            {project.summary}
          </p>

          {/* RIGHT ARROWS / CTAs aligned to the right tracks */}
          <div className="col-start-7 col-end-[-1] flex flex-col justify-between">
            <button className="px-3 py-1 border rounded-md">LIVE DEMO</button>
            <button className="px-3 py-1 border rounded-md">GITHUB</button>
          </div>
        </div>

        {/* Description */}
        <div className="col-start-2 col-end-[-2] grid grid-cols-subgrid col-span-full bg-red-100">
          <ul className="col-span-2">
            {project.scopes.map((scope) => (
              <li key={scope}>{scope}</li>
            ))}
          </ul>
          <ul className="col-span-2">
            {project.stack.frontEnd.map((stack) => (
              <li key={stack}>{stack}</li>
            ))}
          </ul>
          <ul className="col-span-2">
            {project.stack.backEnd.map((stack) => (
              <li key={stack}>{stack}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
