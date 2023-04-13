import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const RedirectPage = () => {
  const { search } = useLocation();
  const code = search.split("=")[1];

  useEffect(() => {
    console.log("백엔드에다가 code 보내주기...");
  }, []);

  return <div></div>;
};
