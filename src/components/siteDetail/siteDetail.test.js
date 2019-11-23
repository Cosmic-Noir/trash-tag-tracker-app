import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";
import SiteDetail from "./siteDetail";
import { BrowserRouter } from "react-router-dom";

describe("SiteDetail Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(
      <BrowserRouter>
        <SiteDetail
          match={{
            params: { siteId: 2 },
            isExact: true,
            path: "/sites/:siteId",
            url: "/sites/2"
          }}
        />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <SiteDetail
          match={{
            params: { siteId: 2 },
            isExact: true,
            path: "/sites/:siteId",
            url: "/sites/2"
          }}
        />
      </BrowserRouter>
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
