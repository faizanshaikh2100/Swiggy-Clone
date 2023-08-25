// import FilterMenu from "../components/FilterMenu";
import Card from "./Card";
import { LuSettings2 } from "react-icons/lu";
function MainMenu({ mainRestaurants }) {
  return (
    <div className="container">
      <span className="flex items-center justify-between">
        <h2 className="font-bold text-2xl whitespace-nowrap overflow-hidden">
          Restaurants in Pune
        </h2>
        <LuSettings2 size={30} className="border border-black p-2 " />
        {/* <FilterMenu /> */}
      </span>
      <div>
        <ul className="grid grid-cols-4 gap-5">
          {mainRestaurants.map((item) => (
            <li key={item.info.id}>
              <Card
                item={null}
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.info.cloudinaryImageId
                }
                title={item.info.name}
                rating={item.info.avgRating}
                menu={item.info.cuisines.join()}
                location={item.info.areaName}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
