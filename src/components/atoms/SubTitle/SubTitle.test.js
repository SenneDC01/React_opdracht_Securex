import React from "react";
import { render, screen } from "@testing-library/react";
import BoldTitle from "./SubTitle";

describe("BoldTitle Component", () => {
  it("renders the children text and style correctly", () => {
    render(<BoldTitle>Test Title</BoldTitle>);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-lg font-semibold mt-6 mb-4");
  });
});
