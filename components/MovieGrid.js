import MovieTemplate from "./MovieTemplate";

export default function MovieGrid({ data }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(384px,_1fr))] hover:cursor-pointer gap-4 p-8">
      {data.map((e, idx) => (
        <MovieTemplate item={idx} key={idx} />
      ))}
    </div>
  );
}
