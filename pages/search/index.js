import CustomButton from "@/mixins/Button";
import CustomInput from "@/mixins/Input";
import SearchIcon from "@/mixins/SearchIcon";
import { useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-32">
      <div className="p-12 flex items-center">
        <SearchIcon />
        <div className="mr-4" />
        <CustomInput
          placeholder={"시리즈, 영화, 카테고리 검색"}
          value={search}
          setValue={setSearch}
        />
        <div className="ml-4" />
        <div className="w-24">
          <CustomButton
            name={"검색"}
            onClickFunc={() => window.alert(search)}
          />
        </div>
      </div>
    </div>
  );
}
