import { CustomForm } from "../components/form.component";
import { Link } from "react-router-dom";

export const LoginPage = () => {
	return (
		<div>
			<CustomForm title={"Login"}>
				<div className="relative">
					<input className="common-input" />
					<label>Email</label>
				</div>

				<div className="relative">
					<input className="common-input" />
					<label>Password</label>
				</div>

				<div className="my-4" />

				<button
					className="rounded bg-netflix-red
        text-xl py-2
        "
				>
					Sign in
				</button>

				<div className="my-2" />

				<a id="kakao-login-btn" href="javascript:loginWithKakao()">
					<button
						className="rounded text-xl py-2
        bg-kakao-yellow text-kakao-brown w-full"
						type="button"
					>
						Kakao
					</button>
				</a>

				<div>
					<div className="my-8 flex items-center">
						<span className="text-gray-500 text-lg mr-4">
							Netflix의 회원이 아닌가요?
						</span>
						<Link to="/signup">
							<span className="text-xl">지금 가입하세요.</span>
						</Link>
					</div>
					<p className="text-gray-500">
						이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가
						<br />
						로봇이 아님을 확인합니다. 자세히 알아보기.
					</p>
				</div>
			</CustomForm>
		</div>
	);
};
