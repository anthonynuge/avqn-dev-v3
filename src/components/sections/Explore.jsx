import FilterTree from "../explorer/FileTree";
import { Files } from "../explorer/Files";
import { projects } from "../../lib/data/projects";
import { experiences } from "../../lib/data/experiences";
import { useMemo } from "react";

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

const TYPES = ["PROJECT", "EXPERIENCE"];
const toText = (s = "") => s.toLowerCase();
const parseDate = (d) => {
  const t = Date.parse(d ?? "");
  return Number.isNaN(t) ? 0 : t;
};

function makeRows(projectsArr, experiencesArr) {
  const proj = projectsArr.map((p) => ({
    id: p.id, // Remove the "p-" prefix to get the actual project ID
    type: "PROJECT",
    date: p.timeline?.end || p.timeline?.start || p.when || "",
    dateISO: parseDate(p.timeline?.end || p.timeline?.start),
    name: p.title + " — " + p.description,
    tags: [
      ...(p.stack?.frontEnd || []),
      ...(p.stack?.backEnd || []),
      ...(p.stack?.tools || []),
    ],
    search: toText([p.title, p.description, p.summary].join(" ")),
  }));

  const exp = experiencesArr.map((e) => ({
    id: `e-${e.id}`,
    type: "EXPERIENCE",
    date: /present/i.test(e.end) ? e.start : e.end || e.start,
    dateISO: parseDate(e.end) || parseDate(e.start),
    name: `${e.company} — ${e.role}`,
    tags: [
      ...(e.stack?.frontEnd || []),
      ...(e.stack?.backEnd || []),
      ...(e.stack?.tools || []),
    ],
  }));

  return [...proj, ...exp].sort((a, b) => b.dateISO - a.dateISO);
}

const Explore = () => {
  const rows = useMemo(() => makeRows(projects, experiences), []);

  return (
    <div>
      <h2 className="text-4xl">EXPLORER</h2>
      {/* <div className="flex flex-col gap-12 md:flex-row">
        <div className="w-[30%]">
          <FilterTree data={filters} />
        </div>
        <div className="flex-1">
          <Files data={rows} />
        </div>
      </div> */}
    </div>
  );
};

export default Explore;
