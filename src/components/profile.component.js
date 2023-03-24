import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
};

const ProfileCard = ({ isSetable }) => {
  const navi = useNavigate();

  const onClickRouteToEditPage = (e) => {
    e.stopPropagation();

    navi(`/manageProfile/${123}`);
  };

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <div
        className="w-48 h-48 rounded
      hover:shadow mx-8 relative"
        style={{
          backgroundImage: "url('/profile.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={() => console.log("route")}
      >
        {isSetable && (
          <div
            className="w-full h-full z-20 absolute
          bg-black bg-opacity-70 flex justify-center items-center"
            onClick={onClickRouteToEditPage}
          >
            <EditIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export const Profile = () => {
  const [isSetable, setIsSetable] = useState();
  const arr = new Array(4)
    .fill(4)
    .map((e, i) => <ProfileCard key={i} isSetable={isSetable} />);

  return (
    <div
      className="flex flex-col justify-center items-center
    w-screen h-screen"
    >
      <h3 className="text-5xl font-semibold">Who's watching?</h3>

      <div className="flex my-16">{arr}</div>

      <button
        className="common-black-box"
        onClick={() => setIsSetable(!isSetable)}
      >
        {isSetable ? "Done" : "Edit Profile"}
      </button>
    </div>
  );
};
