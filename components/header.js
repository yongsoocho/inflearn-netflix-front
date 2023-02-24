import MovieIcon from "@/mixins/MovieIcon";
import MyListIcon from "@/mixins/MyListIcon";
import SearchIcon from "@/mixins/SearchIcon";
import SeriesIcon from "@/mixins/SeriesIcon";
import UserIcon from "@/mixins/UserIcon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();

  if (asPath == "/login" || asPath === "/signup") {
    return (
      <div className="flex items-center pl-4 w-screen absolute top-0 z-[999]">
        <div>
          <Link href="/login">
            <img src="./netflix_title.png" width="256px" height="auto" />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center p-4 w-screen absolute top-0 z-[999] bg-black">
        <div className="flex items-center">
          <Link href="/" className="mr-16">
            <img src="./netflix_title.png" width="150px" height="auto" />
          </Link>

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

          <Link href="/my-video" className="headerLink">
            <MyListIcon />
            <span>내가 찜한 목록</span>
          </Link>
        </div>

        <div />

        <div className="flex justify-center items-center w-12 h-12 bg-netflix-red p-2 rounded-lg hover:cursor-pointer mr-8">
          <UserIcon />
        </div>
      </div>
    );
  }
}
