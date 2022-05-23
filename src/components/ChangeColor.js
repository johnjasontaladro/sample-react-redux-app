import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../reducer/theme";

export default function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </>
  );
}
