import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage Component", () => {
  it("renders the error message when provided", () => {
    render(<ErrorMessage error="An error occurred!" />);

    const errorMessage = screen.getByText("An error occurred!");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("text-red-500 mb-4");
  });
});
