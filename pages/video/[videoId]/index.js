import { useRouter } from "next/router";

export default function VideoDetail() {
  const {
    query: { videoId },
  } = useRouter();

  return <div></div>;
}
