/// <reference types="cypress" />

import { findByTestId } from "../testUtils";
import { render } from "@testing-library/react";
import * as stories from "../../stories/App.stories";
import { composeStories } from "@storybook/react";

const { AsMichaelScott, AsJimHalpert } = composeStories(stories);

it("Renders the right data for Michael Scott", () => {
  render(<AsMichaelScott />);
  cy.contains("Hello Michael Scott");
  findByTestId("select-colleague").should("be.visible").select(1);
  cy.contains("Pulling pranks on Dwight");
});

it("Renders the right data for Jim", () => {
  render(<AsJimHalpert />);
  cy.contains("Hello Jim");
  findByTestId("select-colleague").should("be.visible").select(1);
});
