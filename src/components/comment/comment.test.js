import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import Comment from "./comment";

describe("Comment Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Comment />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<Comment />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
