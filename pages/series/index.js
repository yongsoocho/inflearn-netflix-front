import MovieGrid from "@/components/MovieGrid";
import MovieTemplate from "@/components/MovieTemplate";

export default function SeriesPage() {
  const arr = new Array(20).fill({});

  return (
    <div className="mt-32">
      <MovieGrid data={arr} />
    </div>
  );
}
