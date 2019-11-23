import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import CleanList from "./cleanList";

describe("CleanList component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<CleanList />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<CleanList />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
