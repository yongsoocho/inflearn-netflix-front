export const CustomForm = ({ title, children }) => {
  return (
    <div
      className="w-screen h-screen bg-login-page relative
      bg-cover bg-center after:content=[''] after:w-full after:h-full
      after:bg-black after:z-10 after:absolute after:top-0 after:left-0
      after:bg-opacity-50 flex justify-center items-center"
    >
      <form
        className="z-20 bg-black p-12 rounded
      bg-opacity-60 backdrop-blur-sm w-[480px]"
      >
        <h1 className="text-3xl mb-4">{title}</h1>

        <div className="flex flex-col">{children}</div>
      </form>
    </div>
  );
};
