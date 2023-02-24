import MovieGrid from "@/components/MovieGrid";

export default function MoviePage() {
  const arr = new Array(20).fill({});

  return (
    <div className="mt-32">
      <MovieGrid data={arr} />
    </div>
  );
}
