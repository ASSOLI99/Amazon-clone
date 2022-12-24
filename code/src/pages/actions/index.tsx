import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
function Actions() {
  const couter = useSelector((state: RootState) => state.counter.value);
  return <div>Actions {couter}</div>;
}

export default Actions;
