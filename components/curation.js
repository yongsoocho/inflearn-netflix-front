import { useCallback, useRef, useState } from "react";
import MovieTemplate from "./MovieTemplate";

export default function Curation({ title }) {
  const arr = new Array(20).fill({});
  const draggable = useRef(null);
  const startX = useRef(0);
  const [nowX, setNowX] = useState(0);

  // 에러
  // swiper.current.clientWidth = arr.length * 336;

  const onMouseDownEvent = (e) => {
    draggable.current = true;
    startX.current = e.clientX;
  };

  const onMouseMove = useCallback(
    (e) => {
      if (draggable.current) {
        const moveX = Math.round((startX.current - e.clientX) * 0.02);
        setNowX(() => nowX + moveX);
      }
    },
    [nowX]
  );

  const onMouseLeaveOrLeaveEvent = () => {
    draggable.current = false;
  };

  return (
    <div className="p-8">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>

      <div className="overflow-x-hidden">
        <div
          className="relative flex hover:cursor-grab"
          onMouseDown={onMouseDownEvent}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseLeaveOrLeaveEvent}
          onMouseLeave={onMouseLeaveOrLeaveEvent}
          // onDragStart
          // onDrag
          // onDragEnd
          style={{ width: arr.length * 336, right: nowX }}
        >
          {arr.map((item, index) => (
            <MovieTemplate key={index} item={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
