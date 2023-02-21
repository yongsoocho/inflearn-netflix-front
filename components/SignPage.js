export default function SignPage({ children, title }) {
  return (
    <div className="h-screen relative before:content-[''] before:absolute before:bg-black before:opacity-50 before:w-full before:h-full before:z-0">
      <div className="h-full w-full bg-[url('/login.jpg')] bg-no-repeat bg-cover">
        <div className="flex justify-center items-center w-120 p-14">
          <div className="w-[480px] p-12 z-10 h-full flex flex-col justify-center bg-black bg-opacity-75 rounded-lg mt-48">
            <span className="text-white text-4xl mb-8">{title}</span> {children}
          </div>
        </div>
      </div>
    </div>
  );
}
