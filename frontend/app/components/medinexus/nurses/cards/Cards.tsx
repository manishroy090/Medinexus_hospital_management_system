const Card = ({
  label,
  total,
  icon,
}: {
  label: number | string;
  total:number | string;
}) => {
  return (
    <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">{label}</span>
          <span className="font-bold text-xl text-[#14967f] ">{total}</span>
        </div>
      <span className="font-bold text-xl text-[#14967f] ">{icon}</span>
      </div>
  );
};

export default Card;
