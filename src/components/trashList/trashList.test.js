import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import TrashList from "./trashList";

describe("TrashList component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(
      <BrowserRouter>
        <TrashList />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <TrashList />
      </BrowserRouter>
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
