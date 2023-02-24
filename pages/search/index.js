import MovieGrid from "@/components/MovieGrid";
import CustomButton from "@/mixins/Button";
import CustomInput from "@/mixins/Input";
import SearchIcon from "@/mixins/SearchIcon";
import { useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const arr = new Array(20).fill(0);

  return (
    <div className="mt-32">
      <div className="p-12 flex items-center">
        <SearchIcon />

        <div className="w-full relative mx-4">
          <CustomInput
            placeholder={"시리즈, 영화, 카테고리 검색"}
            value={search}
            setValue={setSearch}
            isFocus={isFocus}
            setIsFocus={setIsFocus}
          />

          {isFocus ? (
            <div className="w-full absolute bg-[#333333] -translate-y-1 text-3xl hover:cursor-pointer">
              {arr.slice(0, 8).map((e, idx) => (
                <div
                  className="p-4 text-lg hover:bg-black"
                  key={idx}
                  onClick={() => setSearch}
                >
                  <span>{idx}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="w-24">
          <CustomButton
            name={"검색"}
            onClickFunc={() => window.alert(search)}
          />
        </div>
      </div>

      <div>
        <MovieGrid data={arr} />
      </div>
    </div>
  );
}
