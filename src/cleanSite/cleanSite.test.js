import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import CleanSite from "./cleanSite";

describe("CleanSite Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<CleanSite />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<CleanSite />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
