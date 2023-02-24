export default function MovieTemplate({ item }) {
  return (
    <div
      className="rounded-lg w-80 h-96 bg-red-800 mr-4 text-5xl"
      onDragStart={() => false}
      onDrop={() => false}
    >
      {item}
    </div>
  );
}
