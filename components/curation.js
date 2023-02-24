import { useCallback, useEffect, useRef, useState } from "react";
import MovieTemplate from "./MovieTemplate";

export default function Curation({ title }) {
  const arr = new Array(20).fill({});
  const dragable = useRef(false);
  const swiper = useRef(null);

  // 에러
  // swiper.current.clientWidth = arr.length * 336;

  const onDragStartEvent = useCallback((e) => {
    dragable.current = true;
    console.log("start");
  }, []);
  const onDragEvent = useCallback((e) => {
    if (dragable.current) {
      // console.dir(swiper.current);
    }
  }, []);
  const onDragEndEvent = useCallback((e) => {
    dragable.current = false;
    console.log("end");
  }, []);

  return (
    <div className="p-8">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>

      <div className="overflow-x-hidden">
        <div
          className="relative flex hover:cursor-pointer"
          onDragStart={onDragStartEvent}
          onDrag={onDragEvent}
          onDragEnd={onDragEndEvent}
          style={{ width: arr.length * 336 }}
          ref={swiper}
        >
          {arr.map((item, index) => (
            <MovieTemplate key={index} item={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
