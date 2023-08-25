import { FcRating } from "react-icons/fc";
function Card({ item, src, title, rating, menu, location, className }) {
  return (
    <div
      className={
        "flex flex-col gap-2 hover:scale-95 transform-scale ease-in duration-100 " +
        className
      }
    >
      <img
        className="rounded-2xl object-cover h-[182px]"
        src={item?.src || src}
      />
      <div className="flex flex-col ">
        <h3>{item?.title || title}</h3>
        <div className="flex items-center gap-1">
          <FcRating />
          <h4>{item?.rating || rating}</h4>
        </div>
        <h5 className="text-[#676A6D] overflow-hidden">{item?.menu || menu}</h5>
        <h5 className="text-[#676A6D]">{item?.location || location}</h5>
      </div>
    </div>
  );
}

export default Card;
