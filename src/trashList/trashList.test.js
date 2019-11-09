import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import TrashList from "./trashList";

describe("TrashList component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<TrashList />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(<TrashList />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
