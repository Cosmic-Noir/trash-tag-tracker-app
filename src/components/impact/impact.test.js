import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import Impact from "./impact";

describe("Impact Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Impact />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<Impact />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
