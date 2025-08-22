import SectionDivider from "../SectionDivider";

const FeaturedProjects = () => {
  return (
    <div className="w-full">
      <SectionDivider title="Featured Projects" />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="h-120 w-full md:w-1/2 bg-amber-100"></div>
        <div className="h-120 w-full md:w-1/2 bg-amber-100"></div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
