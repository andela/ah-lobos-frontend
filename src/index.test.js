import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("Render App", () => {
  it("Should render application without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App token="string" decodeToken="string" />, div);
  });
});
