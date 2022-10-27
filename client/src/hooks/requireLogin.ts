import { useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import { useUserToken } from "../components/userTokenProvider";

const useRequireLogin = () => {
  const token = useUserToken();
  const navigate = useNavigate();
  createEffect(() => {
    if (!token.token()) navigate("/login");
  });
};

export default useRequireLogin;
