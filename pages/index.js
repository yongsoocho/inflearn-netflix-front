import Curation from "@/components/curation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-[800px] relative overflow-hidden">
        <img src="/main.jpg" className="w-full -translate-y-1/4" />
      </div>

      <div>
        <Curation title={"내가 시청 중인 콘텐츠"} />

        <Curation title={"오직 넷플릭스에서"} />

        <Curation title={"이번 주 인기 TOP 10"} />
      </div>
    </div>
  );
}
