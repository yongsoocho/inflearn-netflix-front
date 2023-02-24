import Link from "next/link";

export default function MovieTemplate({ item }) {
  return (
    <Link href={`/video/${item.id}`}>
      <div
        className="rounded-lg w-80 h-96 bg-red-800 mr-4 text-5xl"
        onDragStart={() => false}
        onDrop={() => false}
      >
        {item}
      </div>
    </Link>
  );
}
