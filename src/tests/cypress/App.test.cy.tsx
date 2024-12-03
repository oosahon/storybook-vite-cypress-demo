/// <reference types="cypress" />

import { findByTestId } from "../testUtils";
import { mount } from "cypress/react18";
import { render } from "@testing-library/react";
import App from "../../App";
import { AuthProvider } from "../../AuthContext";
import { usersRepo } from "../../repo/users.repo";

describe("Without stories", () => {
  it("Renders the right data for Michael Scott", () => {
    mount(
      <AuthProvider mockUser={usersRepo[0]}>
        <App />
      </AuthProvider>
    );
    cy.contains("Hello Michael Scott");
    findByTestId("select-colleague").should("be.visible").select(1);
    cy.contains("Pulling pranks on Dwight");
  });

  it("Renders the right data for Jim", () => {
    render(
      <AuthProvider mockUser={usersRepo[1]}>
        <App />
      </AuthProvider>
    );
    cy.contains("Hello Jim");
    findByTestId("select-colleague").should("be.visible").select(1);
  });
});
