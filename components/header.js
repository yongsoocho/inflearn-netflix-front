import MovieIcon from "@/mixins/MovieIcon";
import SearchIcon from "@/mixins/SearchIcon";
import SeriesIcon from "@/mixins/SeriesIcon";
import UserIcon from "@/mixins/UserIcon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();

  if (asPath == "/") {
    return (
      <div className="flex justify-between items-center p-4 w-screen absolute top-0 z-[999] bg-black">
        <div>
          <Link href="/">
            <img src="./netflix_title.png" width="200px" height="auto" />
          </Link>
        </div>

        <div className="flex">
          <Link href="/series" className="headerLink">
            <SeriesIcon />
            <span>시리즈</span>
          </Link>

          <Link href="/movies" className="headerLink">
            <MovieIcon />
            <span>영화</span>
          </Link>

          <Link href="/search" className="headerLink">
            <SearchIcon />
            <span>검색</span>
          </Link>
        </div>

        <div />

        <div className="w-20 h-20 bg-netflix-red p-2 rounded-full hover:cursor-pointer">
          <UserIcon />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center pl-4 w-screen absolute top-0 z-[999]">
        <div>
          <Link href="/login">
            <img src="./netflix_title.png" width="256px" height="auto" />
          </Link>
        </div>
      </div>
    );
  }
}
