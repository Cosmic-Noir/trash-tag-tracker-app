import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import AddComment from "./addComment";

describe("AddComment Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<AddComment />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<AddComment />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
