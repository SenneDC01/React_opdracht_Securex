import React from "react";
import { render, screen } from "@testing-library/react";
import FormField from "./FormField"; // Adjust the import path as necessary

describe("FormField Component", () => {
  it("renders the input with the correct placeholder", () => {
    render(
      <FormField
        placeholder="Enter your username"
        value=""
        type="text"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(
      <FormField
        placeholder="Enter your username"
        value="John"
        type="text"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement.value).toBe("John");
  });

  it("supports different input types", () => {
    render(
      <FormField
        placeholder="Enter your password"
        value=""
        type="password"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter your password");
    expect(inputElement.type).toBe("password");
  });
});
