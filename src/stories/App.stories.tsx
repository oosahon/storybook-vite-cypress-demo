import type { StoryObj } from "@storybook/react";
import { AuthProvider } from "../AuthContext";
import { usersRepo } from "../repo/users.repo";
import App from "../App";

const meta = {
  title: "Example/App",
  component: App,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AsUnAuthenticatedUser: Story = {};

export const AsMichaelScott: Story = {
  render: (args) => {
    return (
      <AuthProvider mockUser={usersRepo[0]}>
        <App {...args} />
      </AuthProvider>
    );
  },
};

export const AsJimHalpert: Story = {
  render: (args) => {
    return (
      <AuthProvider mockUser={usersRepo[1]}>
        <App {...args} />
      </AuthProvider>
    );
  },
};
