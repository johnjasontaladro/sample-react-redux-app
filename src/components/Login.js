import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducer/user";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }}>
      <button
        style={{ color: themeColor }}
        onClick={() =>
          dispatch(
            login({ name: "John Doe", age: 30, email: "john.doe@test.com" })
          )
        }
      >
        Login
      </button>
      <button style={{ color: themeColor }} onClick={() => dispatch(logout())}>
        Logout
      </button>
      <hr />
    </div>
  );
}
