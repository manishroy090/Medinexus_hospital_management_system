const Card = ({
  label,
  total,
  icons
  
}: {
  label: number | string;
  total:number | string;
  icons?:string
}) => {
  return (
    <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">{label}</span>
          <span className="font-bold text-xl text-[#14967f] ">{total}</span>
        </div>
        <div className=" h-14 w-14">
          <img src={icons} alt="logo" className="w-full" />
        </div>
      </div>
  );
};

export default Card;
