import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import CommentList from "./commentList";

describe("CommentList Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<CommentList />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<CommentList />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
