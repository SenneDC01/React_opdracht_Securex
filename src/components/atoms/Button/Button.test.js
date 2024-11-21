import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with default properties", () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",
    );
    expect(button).toHaveAttribute("type", "button");
  });

  it("applies the correct color class based on the 'color' prop", () => {
    render(<Button color="red">Delete</Button>);

    const button = screen.getByRole("button", { name: "Delete" });
    expect(button).toHaveClass("bg-red-500 hover:bg-red-600");
  });

  it("applies the correct 'type' attribute", () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("calls the 'onClick' function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders children correctly", () => {
    render(<Button>Save Changes</Button>);

    const button = screen.getByRole("button", { name: "Save Changes" });
    expect(button).toHaveTextContent("Save Changes");
  });
});
