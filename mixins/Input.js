import { useCallback, useRef, useState } from "react";

export default function CustomInput({
  placeholder,
  value,
  setValue,
  checkFunc,
  errorMessage,
  setIsFocus,
  type = "text",
  label = "입력해주세요",
}) {
  const [showErr, setShowErr] = useState(false);

  const onChangeEvent = useCallback((e) => {
    if (checkFunc) {
      const check = checkFunc(e.target.value);

      if (!check) {
        setShowErr(true);
      } else {
        setShowErr(false);
      }
    }

    setValue(e.target.value);
  }, []);

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="bg-[#333333] rounded-md px-2 py-4 text-xl text-white relative focus:outline-none w-full focus:[&>label]:top-0 focus:[&>label]:text-md"
        value={value}
        onChange={onChangeEvent}
        type={type}
      />
      <span className="text-[#E87C03] absolute -bottom-8 left-2">
        {showErr ? errorMessage : ""}
      </span>
    </div>
  );
}
