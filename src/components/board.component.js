import { MovieCard } from "./card.component";

export const MovieBoard = () => {
  const test = new Array(30)
    .fill({})
    .map((e, i) => <MovieCard key={i} data={{ movieId: i }} />);

  return (
    <div
      className="grid
  grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]
  grid-rows-[repeat(auto-fill,_minmax(150px,_1fr))]
  px-4 py-24 gap-x-2 gap-y-4
  "
    >
      {test}
    </div>
  );
};
