// App.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

jest.mock("../data/blog", () => ({
  data: {
    blogName: "Test Blog",
    aboutText: "About this blog",
    image: "test-image.jpg",
    posts: [
      {
        id: 1,
        title: "Components 101",
        date: "December 15, 2020",
        preview: "Setting up the building blocks of your site",
        minutes: 5,
      },
      {
        id: 2,
        title: "React Data Flow",
        date: "December 11, 2020",
        preview: "Passing props is never passé",
        minutes: 15,
      },
      {
        id: 3,
        title: "Function vs Class Components",
        preview: "React, meet OOJS.",
        minutes: 47,
      },
    ],
  },
}));

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App div aside")).toBeInTheDocument(); // Update this line
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
