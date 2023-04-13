import { CustomForm } from "../components/form.component";

export const SignupPage = () => {
	return (
		<CustomForm title={"Sign up"}>
			<div className="relative">
				<input className="common-input" />
				<label>Email</label>
			</div>

			<div className="flex items-center justify-between">
				<div className="relative w-2/3">
					<input className="common-input" />
					<label>Code</label>
				</div>

				<button className="rounded bg-netflix-red text-lg px-2 py-2 w-1/4">
					verify
				</button>
			</div>
			<div className="relative">
				<input className="common-input" />
				<label>Password</label>
			</div>
			<div className="my-4" />
			<button className="rounded bg-netflix-red text-xl py-2 duration-300">
				Sign up
			</button>
			<div className="my-2" />
			<div>
				<p className="text-gray-500">
					이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가
					<br />
					로봇이 아님을 확인합니다. 자세히 알아보기.
				</p>
			</div>
		</CustomForm>
	);
};
