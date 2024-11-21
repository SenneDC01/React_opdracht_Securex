import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  it("renders the label correctly", () => {
    render(
      <Dropdown
        label="Select an Option"
        options={[]}
        value=""
        onChange={() => {}}
      />,
    );

    const labelElement = screen.getByText("-- Select an Option --");
    expect(labelElement).toBeInTheDocument();
  });

  it("renders the options correctly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(
      <Dropdown
        label="Choose an option"
        options={options}
        value=""
        onChange={() => {}}
      />,
    );

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  it("calls the onChange callback when an option is selected", () => {
    const mockOnChange = jest.fn();
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(
      <Dropdown
        label="Choose an option"
        options={options}
        value=""
        onChange={mockOnChange}
      />,
    );

    const selectElement = screen.getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "option1" } });

    expect(mockOnChange).toHaveBeenCalledWith("option1");
  });

  it("sets the selected value correctly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(
      <Dropdown
        label="Choose an option"
        options={options}
        value="option2"
        onChange={() => {}}
      />,
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement.value).toBe("option2");
  });
});
