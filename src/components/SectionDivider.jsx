const SectionDivider = (props) => {
  return (
    <div className="w-full my-2 text-xs">
      <h3 className="uppercase font-mono py-2"> / {props.title}</h3>
      <div className="h-[1px] bg-black" />
    </div>
  );
};

export default SectionDivider;
