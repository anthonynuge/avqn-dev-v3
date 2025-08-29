import { Link } from "react-router";

const FileHeader = () => {
  return (
    <div className="w-full mt-2 text-xs col-span-full uppercase py-2 grid grid-cols-subgrid border-b border-black font-mono">
      <div className="col-span-2 "> / Date</div>
      <div className="col-span-2"> / Type</div>
      <div className="col-span-13"> / Title</div>
    </div>
  );
};

const FileItem = ({ date, type, title, id, isProject }) => {
  if (isProject) {
    return (
      <Link
        to={`/project/${id}`}
        className="w-full text-xs col-span-full grid grid-cols-subgrid border-b border-foreground place-items-start items-center py-4 hover:bg-teal-500/50 transition-colors duration-150 cursor-pointer"
      >
        <div className="col-span-2">{date}</div>
        <div className="col-span-2 uppercase">{type}</div>
        <div className="col-span-13 text-xl font-medium truncate">{title}</div>
        <div className="col-span-1 max-sm:col-span-1 justify-self-end text-teal-600">
          →
        </div>
      </Link>
    );
  }

  return (
    <div className="w-full text-xs col-span-full grid grid-cols-subgrid border-b border-foreground place-items-start items-center py-4 hover:bg-teal-500/50 transition-colors duration-150">
      <div className="col-span-2">{date}</div>
      <div className="col-span-2 uppercase">{type}</div>
      <div className="col-span-13 text-xl font-medium truncate">{title}</div>
      <button className="col-span-1 max-sm:col-span-1 justify-self-end">
        +
      </button>
    </div>
  );
};

export const Files = ({ data }) => {
  return (
    <ul className="grid grid-cols-[repeat(18,1fr)]">
      <FileHeader />
      {data.map((item) => (
        <FileItem
          key={item.id}
          id={item.id}
          date={item.date}
          type={item.type}
          title={item.name}
          isProject={item.type === "PROJECT"}
        />
      ))}
    </ul>
  );
};
