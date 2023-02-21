import SignPage from "@/components/SignPage";
import CustomInput from "@/mixins/Input";
import CustomButton from "@/mixins/Button";
import { useState } from "react";

export default function Signup() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [code, setCode] = useState("");

  const onClickSignup = () => {
    console.log(id, pw);
  };

  return (
    <SignPage title={"회원가입"}>
      <CustomInput
        placeholder="이메일 주소"
        value={id}
        setValue={setId}
        checkFunc={(id) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(id)) {
            return true;
          }
          return false;
        }}
        errorMessage={"올바른 이메일을 입력해주세요"}
      />

      <div className="mb-4" />

      <div className="w-full flex items-center justify-between">
        <div className="w-120">
          <CustomInput
            placeholder="코드 6자리"
            value={code}
            setValue={setCode}
          />
        </div>

        <div className="w-120">
          <CustomButton name={"코드 확인"} />
        </div>
      </div>

      <div className="mb-12" />

      <CustomInput
        placeholder="비밀번호"
        value={pw}
        setValue={setPw}
        checkFunc={(pw) => {
          if (pw.length < 4) {
            return false;
          }
          return true;
        }}
        errorMessage={"4자리 이상 비밀번호를 입력해주세요"}
        type={"password"}
      />

      <div className="mb-12" />

      <CustomButton name={"회원가입"} onClickFunc={onClickSignup} />
    </SignPage>
  );
}
