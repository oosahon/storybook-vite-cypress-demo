import { describe, it, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "../../stories/App.stories";

afterEach(() => {
  cleanup();
});

const { AsMichaelScott } = composeStories(stories);

describe("With stories stories", () => {
  it("Renders the right data for Michael Scott", () => {
    const { getByText } = render(<AsMichaelScott />);

    expect(getByText("Hello Michael Scott")).toBeInTheDocument();
    expect(screen.getByTestId("select-colleague")).toBeInTheDocument();
  });
});
