import React from "react";
import Loading from "../loading.gif";

export default function Spinner() {
  return (
    <div id="spinner" className="my-3">
      <img src={Loading} alt="Loading" />
    </div>
  );
}
