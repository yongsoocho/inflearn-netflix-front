export const MovieCard = ({ data }) => {
	return (
		<div
			className="relative h-[140xp] w-[240px] cursor-pointer
    duration-300 hover:scale-110 rounded overflow-hidden"
		>
			<img
				src="/profile.png"
				alt="thumbnail"
				className="object-cover bg-center"
			/>
			<span className="text-3xl text-red-500 absolute top-0">
				{data.movieId}
			</span>
		</div>
	);
};
