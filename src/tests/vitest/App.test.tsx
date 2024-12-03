import { describe, it, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "../../App";
import { AuthProvider } from "../../AuthContext";
import { usersRepo } from "../../repo/users.repo";

afterEach(() => {
  cleanup();
});

describe("Without stories", () => {
  it("Renders the right data for Michael Scott", () => {
    const { getByText } = render(
      <AuthProvider mockUser={usersRepo[0]}>
        <App />
      </AuthProvider>
    );

    expect(getByText("Hello Michael Scott")).toBeInTheDocument();
    expect(screen.getByTestId("select-colleague")).toBeInTheDocument();
  });
});
