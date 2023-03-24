import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ManagePage = () => {
  const navi = useNavigate();
  const [progress, setProgress] = useState(40);

  return (
    <div
      className="h-screen w-[480px] mx-auto
  flex flex-col justify-center"
    >
      <div>
        <h1 className="text-3xl">Profile Edit</h1>
      </div>

      <div className="flex my-8">
        <div
          className="w-48 h-48 relative rounded mr-4"
          style={{
            backgroundImage: "url('/profile.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <input type="file" className="w-full h-full opacity-0" />

          {progress != 0 && progress != 100 && (
            <div
              className="absolute w-full h-2 left-0 -bottom-4
  bg-gray-500 rounded overflow-hidden bg-opacity-50"
            >
              <div className="bg-netflix-red w-1/2 h-full rounded-sm" />
            </div>
          )}
        </div>

        <div>
          <input className="common-black-box w-60" />
        </div>
      </div>

      <div className="mt-32">
        <button className="common-black-box mr-8">Submit</button>
        <button className="common-black-box" onClick={() => navi(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};
