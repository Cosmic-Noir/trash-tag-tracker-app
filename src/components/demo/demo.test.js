import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import Demo from "./demo";
import { BrowserRouter } from "react-router-dom";

describe("Demo Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(
      <BrowserRouter>
        <Demo />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Demo />
      </BrowserRouter>
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
