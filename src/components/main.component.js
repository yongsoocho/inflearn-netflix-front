import { MovieList } from "./movieList.component";

const PlayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  );
};

export const MainComponent = () => {
  return (
    <div className="pb-32">
      <div className="relative pb-[500px]">
        <div className="absolute bottom-8 z-10 left-8">
          <img
            src="/netflix_title.png"
            alt="banner"
            className="bg-no-repeat bg-cover bg-center w-80"
          />

          <div className="flex justify-center items-center text-lg">
            <button className="flex items-center mr-8 common-black-box bg-black bg-opacity-70">
              <PlayIcon />
              재생
            </button>
            <button className="common-black-box bg-black bg-opacity-70">
              재생
            </button>
          </div>
        </div>
      </div>

      <video
        className="scale-[2.5] absolute z-0 top-0 left-0"
        autoPlay
        muted
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="relative">
        <MovieList
          title={"타이틀"}
          bg={"linear-gradient(0, rgba(0, 0, 0, 0.7) 30%, transparent)"}
        />
        <MovieList
          title={"타이틀"}
          bg={"linear-gradient(0, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.7))"}
        />
        <MovieList
          title={"타이틀"}
          bg={"linear-gradient(0, rgba(0, 0, 0, 0.95) 30%, rgba(0, 0, 0, 0.9))"}
        />
        <MovieList title={"타이틀"} />
        <MovieList title={"타이틀"} />
        <MovieList title={"타이틀"} />
      </div>
    </div>
  );
};
