import Curation from "@/components/curation";
import PlayIcon from "@/mixins/PlayIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-[800px] relative overflow-hidden">
        <img src="/main.jpg" className="w-full -translate-y-1/4" />

        <div className="absolute top-2/4 -translate-y-2/4 p-16">
          <h1 className="text-6xl font-bold mb-8">Movie Title</h1>

          <p className="w-[396px] text-3xl mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="flex justify-center items-center bg-white rounded py-2 w-36 cursor-pointer shadow-xl">
            <PlayIcon />

            <span className="text-xl text-black font-bold">재생</span>
          </div>
        </div>
      </div>

      <div>
        <Curation title={"내가 시청 중인 콘텐츠"} />

        <Curation title={"오직 넷플릭스에서"} />

        <Curation title={"이번 주 인기 TOP 10"} />
      </div>
    </div>
  );
}
