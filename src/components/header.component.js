import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};

const MovieIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};

const ListIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 mx-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [query, setQuery] = useState("");
  const navi = useNavigate();

  const onSubmitQuery = useCallback(
    (e) => {
      e.preventDefault();

      navi(`/search?query=${query}`);
    },
    [query]
  );

  useEffect(() => {
    const headerScroll = () => {
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", headerScroll);

    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0
    flex justify-between items-center w-screen px-4 z-[999]"
      style={{
        background: `${
          isScroll
            ? "black"
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 30%, transparent)"
        }`,
      }}
    >
      <div className="flex items-center">
        <img
          src="netflix_title.png"
          alt="header-logo"
          className="w-auto h-20"
        />

        <nav className="flex items-center">
          <Link to="/browse" className="header-link">
            <HomeIcon />
            <span>Home</span>
          </Link>

          <Link to="/movie" className="header-link">
            <MovieIcon />
            <span>Movie</span>
          </Link>

          <Link to="/my-list" className="header-link">
            <ListIcon />
            <span>List</span>
          </Link>
        </nav>
      </div>

      <div className="flex items-center">
        <form onSubmit={onSubmitQuery}>
          <input
            className="common-black-box"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <button>
          <SearchIcon />
        </button>

        <div className="ml-8">
          <button className="w-10 h-10 rounded bg-blue-500"></button>
        </div>
      </div>
    </header>
  );
};
