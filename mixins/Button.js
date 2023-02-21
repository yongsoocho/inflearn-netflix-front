export default function CustomButton({ name, func }) {
  return (
    <div className="bg-netflix-red text-white text-xl py-3 flex justify-center items-center rounded-lg hover:cursor-pointer hover:opacity-70 transition" onClick={func}>
      <span>{name}</span>
    </div>
  );
}
