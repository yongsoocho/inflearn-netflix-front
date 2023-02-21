import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center pl-4 w-screen absolute top-0 z-[999]">
      <div>
        <Link href="/">
          <img src="./netflix_title.png" width="256px" height="auto" />
        </Link>
      </div>
    </div>
  );
}
