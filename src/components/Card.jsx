import { FcRating } from "react-icons/fc";
function Card({ item }) {
  return (
    <div className="flex flex-col gap-2 hover:scale-95 transform-scale ease-in duration-100">
      <img className="rounded-2xl object-cover h-[182px]" src={item.src} />
      <div className="flex flex-col ">
        <h3>{item.title}</h3>
        <div className="flex items-center gap-1">
          <FcRating />
          <h4>{item.rating}</h4>
        </div>
        <h5 className="text-[#676A6D]">{item.menu}</h5>
        <h5 className="text-[#676A6D]">{item.location}</h5>
      </div>
    </div>
  );
}

export default Card;
