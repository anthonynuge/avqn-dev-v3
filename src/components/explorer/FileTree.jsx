import { useState } from "react";
import SectionDivider from "../SectionDivider";

const FilterTree = ({ data }) => {
  return (
    <div className="space-y-24">
      <SectionDivider title="File Tree" />
      <div className="grid grid-cols-2 text-sm font-mono">
        {data.map((section, idx) => (
          <TreeNode key={idx} node={section} />
        ))}
      </div>
      <div className="bg-zinc-600 w-full h-64"></div>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left hover:opacity-70"
      >
        <span>{node.label}</span>
        {/* {node.children && <span className="text-xs">{open ? "−" : "+"}</span>} */}
      </button>

      {open && node.children && (
        <ul className="ml-4 mt-1 space-y-1">
          {node.children.map((child, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              <span>{child.label}</span>
              {child.count !== undefined && (
                <span className="text-gray-400 text-xs">({child.count})</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterTree;
