import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import AddSite from "./addSite";

describe("AddSiteComponent", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<AddSite />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<AddSite />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
