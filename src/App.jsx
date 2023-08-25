import MyCarousel from "./components/MyCarousel";
import Navbar from "./components/Navbar";
import { offerBannerData, otherFoodData, cardItems } from "./config";
import { useState, useEffect } from "react";
import MobileMenu from "./components/MobileMenu";
import MainMenu from "./components/MainMenu";
async function getRestaurantsData() {
  const res = await fetch(
    "https://www.swiggy.com/mapi/homepage/getCards?lat=18.682397&lng=73.849854"
  );

  const data = await res.json();
  const restaurantsArray =
    data.data.success.cards[4].gridWidget.gridElements.infoWithStyle
      .restaurants;

  return await restaurantsArray;
}

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mainRestaurants, setMainRestaurants] = useState([]);
  // const [filterRestaurants, setFilterRestaurant] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const restaurantsArray = await getRestaurantsData();
      setMainRestaurants(restaurantsArray);
    }

    fetchData();
  }, []);
  return (
    <div>
      <header className="md:container px-2 py-4 bg-slate-500">
        <Navbar
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </header>

      <div className="md:hidden w-full">{showMobileMenu && <MobileMenu />}</div>
      {!showMobileMenu && (
        <div className="container px-2 py-4">
          <MyCarousel
            title="Best Offer For You"
            dataArray={offerBannerData}
            isImage={true}
          />
          <MyCarousel
            title="Whats on your mind"
            dataArray={otherFoodData}
            isImage={true}
            className="border-b"
          />
          <MyCarousel
            title="Top restaurant chains in Pune"
            dataArray={cardItems}
            className="border-b pb-10"
          />
        </div>
      )}
      <MainMenu mainRestaurants={mainRestaurants} />
    </div>
  );
}

export default App;
