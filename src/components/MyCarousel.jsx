import { useRef } from "react";
import Image from "./Image";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function MyCarousel({ title, dataArray, isImage, className }) {
  const imageParentDivRef = useRef(null);

  function scrollPrev() {
    let divContainer = imageParentDivRef.current;

    if (divContainer) {
      const scroll = 425;
      divContainer.scrollLeft -= scroll;
    }
  }
  function scrollNext() {
    let divContainer = imageParentDivRef.current;

    if (divContainer) {
      const scroll = 425;
      divContainer.scrollLeft += scroll;
    }
  }

  return (
    <div className={"relative mt-6 " + className}>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="flex items-center gap-3">
          <GoArrowLeft
            size={35}
            className="rounded-full bg-[#E2E2E7] p-2 hover:cursor-pointer"
            onClick={scrollPrev}
          />
          <GoArrowRight
            size={35}
            className="rounded-full bg-[#E2E2E7] p-2 hover:cursor-pointer"
            onClick={scrollNext}
          />
        </div>
      </div>
      <div
        ref={imageParentDivRef}
        className="flex items-center overflow-scroll gap-3 scroll-smooth mt-4"
      >
        {dataArray.map((item) => (
          <Image key={item.id} item={item} isImage={isImage} />
        ))}
      </div>
    </div>
  );
}

export default MyCarousel;
