export default function CustomButton({ name, onClickFunc }) {
  return (
    <button
      className="bg-netflix-red text-white text-xl p-3 flex justify-center items-center rounded-lg hover:cursor-pointer hover:opacity-70 transition w-full"
      onClick={onClickFunc}
    >
      <span>{name}</span>
    </button>
  );
}
