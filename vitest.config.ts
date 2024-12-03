import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // Enable global expect, describe, etc.
    setupFiles: "./vitest.setup.ts", // Path to your setup file
  },
});
