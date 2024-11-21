import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import ProfilePage from "./ProfilePage";
import { mockAssets } from "../../services/MockData";

jest.mock("../../services/AuthContext", () => ({
  useAuth: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ProfilePage", () => {
  const mockLogout = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({
      user: { name: "Test User" },
      logout: mockLogout,
    });
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("renders the profile page with the user's assets", () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Profile: Test User/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Assets/i)).toBeInTheDocument();
    expect(
      mockAssets.filter((a) => a.assignedTo === "Senne").length,
    ).toBeGreaterThan(0);
  });

  it("calls logout and navigates to /login when clicking the logout button", () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /logout/i }));

    expect(mockLogout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("displays an alert when trying to assign without selecting asset or employee", () => {
    window.alert = jest.fn();

    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /assign asset/i }));

    expect(window.alert).toHaveBeenCalledWith(
      "Please select an asset and an employee.",
    );
  });
});
