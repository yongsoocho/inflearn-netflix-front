import SignPage from "@/components/SignPage";
import CustomButton from "@/mixins/Button";
import { CustomInput } from "@/mixins/Input";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onClickLogin = () => {
    console.log(id, pw);
  };

  return (
    <SignPage>
      <span className="text-white text-4xl mb-8">로그인</span>

      <CustomInput
        placeholder="이메일 주소 또는 전화번호"
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
      />

      <div className="mb-12" />

      <div>
        <span className="text-lg mr-4">Netflix의 회원이 아닌가요?</span>
        <Link className="text-xl text-zinc-400 font-medium" href="/signup">
          <span>지금 가입하기</span>
        </Link>
      </div>

      <div className="mb-12" />

      <div>
        <span className="text-lg mr-4">비밀번호를 잊으셨나요?</span>
        <Link className="text-xl text-zinc-400 font-medium" href="/pw-find">
          <span>비밀번호 찾기</span>
        </Link>
      </div>

      <div className="mb-12" />

      <CustomButton name={"로그인"} func={onClickLogin} />
    </SignPage>
  );
}
