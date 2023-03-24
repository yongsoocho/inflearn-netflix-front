import { MovieCard } from "./card.component";
import { useRef, useCallback } from "react";

const LeftIcon = ({ onClickFunc }) => {
  return (
    <div onClick={() => onClickFunc("left")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="row-button -left-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

const RightIcon = ({ onClickFunc }) => {
  return (
    <div onClick={() => onClickFunc("right")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="row-button -right-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export const MovieList = ({ title, bg = "black" }) => {
  const sliderRef = useRef(null);

  const handleScroll = useCallback((type) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;

      if (scrollLeft === 0 && type === "left") return;
      if (scrollLeft === scrollWidth - clientWidth && type === "right") return;

      const cards = Math.floor(clientWidth / 240) * 240;
      let left;

      if (type === "right") {
        if (scrollWidth - scrollLeft - clientWidth <= cards)
          left = scrollWidth - clientWidth;
        else left = scrollLeft + cards;
      } else if (type === "left") {
        if (scrollLeft <= cards) left = 0;
        else left = scrollLeft - cards;
      }

      sliderRef.current.scrollTo({ left, behavior: "smooth" });
    }
  }, []);

  const test = new Array(20)
    .fill({})
    .map((e, i) => <MovieCard data={{ movieId: i }} key={i} />);

  return (
    <div className="p-12" style={{ background: `${bg}` }}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="relative">
        <LeftIcon onClickFunc={handleScroll} />
        <div
          className="grid h-40 grid-cols-20 items-center overflow-x-hidden gap-x-4 overflow-y-auto"
          ref={sliderRef}
        >
          {test}
        </div>
        <RightIcon onClickFunc={handleScroll} />
      </div>
    </div>
  );
};
