import FilterTree from "../explorer/FileTree";
import Files from "../explorer/Files";

const filters = [
  {
    label: "Type",
    children: [
      { label: "Blog", count: 12 },
      { label: "Video", count: 8 },
    ],
  },
  {
    label: "Skills",
    children: [
      { label: "Partners", count: 4 },
      { label: "AI", count: 4 },
      { label: "Workflows", count: 3 },
      { label: "Sandboxes", count: 16 },
    ],
  },
  {
    label: "Topic",
    children: [
      { label: "Partners", count: 4 },
      { label: "AI", count: 4 },
      { label: "Workflows", count: 3 },
      { label: "Sandboxes", count: 16 },
    ],
  },
];

const Explore = () => {
  return (
    <div>
      <h2 className="text-4xl">EXPLORER</h2>
      <div className="flex gap-12">
        <div className="w-[30%]">
          <FilterTree data={filters} />
        </div>
        <div className="flex-1">
          <Files />
        </div>
      </div>
    </div>
  );
};

export default Explore;
