import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { asPath } = useRouter();

  if (asPath == "/") {
    return (
      <div className="flex items-center pl-4 w-screen absolute top-0 z-[999]">
        <div>
          <Link href="/">
            <img src="./netflix_title.png" width="256px" height="auto" />
          </Link>
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
