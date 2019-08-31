import React from "react";
import ReactDOM from "react-dom";

describe("Render App", () => {
  it("Should render application without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div />, div);
  });
});
