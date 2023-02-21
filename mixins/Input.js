import { useCallback, useRef, useState } from "react";

export function CustomInput({
  placeholder,
  value,
  setValue,
  checkFunc,
  errorMessage,
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
    <>
      <input
        placeholder={placeholder}
        className="bg-[#333333] rounded-md px-2 py-4 text-xl text-white relative focus:outline-none"
        value={value}
        onChange={onChangeEvent}
      />
      <span className="text-[#E87C03]">{showErr ? errorMessage : ""}</span>
    </>
  );
}
