import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (
  email: string,
  password: string
) => {
  const res = await $host.post("api/user/registration", {
    email,
    password,
  });
  // TODO: handle response error
  localStorage.setItem("token", res.data.token);
  return jwtDecode(res.data.token);
};

export const login = async (
  email: string,
  password: string
) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  // TODO: handle response error
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  // TODO: handle response error
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
