import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title Component", () => {
  it("renders the children text and style correctly", () => {
    render(<Title>My Title</Title>);

    const titleElement = screen.getByText("My Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-xl font-bold mb-4");
  });
});
