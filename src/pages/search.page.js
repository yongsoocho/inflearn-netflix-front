import { MovieBoard } from "../components/board.component";
import { useLocation } from "react-router-dom";

export const SearchPage = () => {
  const { search } = useLocation();
  console.log(search.slice(7));

  return <MovieBoard />;
};
