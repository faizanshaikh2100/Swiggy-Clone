import MyCarousel from "./components/MyCarousel";
import Navbar from "./components/Navbar";
import { offerBannerData, otherFoodData, cardItems } from "./config";

function App() {
  return (
    <div>
      <header className="container px-2 py-4">
        <Navbar />
      </header>
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
        />
        <MyCarousel
          title="Top restaurant chains in Pune"
          dataArray={cardItems}
        />
      </div>
    </div>
  );
}

export default App;
