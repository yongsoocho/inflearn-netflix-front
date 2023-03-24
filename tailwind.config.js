/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-page": "url(/public/login.jpg)",
      },
      colors: {
        "netflix-red": "var(--netflix-red)",
        "netflix-gray": "var(--netflix-gray)",
        "kakao-yellow": "var(--kakao-yellow)",
        "kakao-brown": "var(--kakao-brown)",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [],
};
