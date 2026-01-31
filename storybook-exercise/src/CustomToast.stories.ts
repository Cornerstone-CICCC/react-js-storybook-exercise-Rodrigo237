import type { Meta, StoryObj } from "@storybook/react";
import { CustomToast } from "./stories/CustomToast";

const meta: Meta<typeof CustomToast> = {
  title: "Components/CustomToast",
  component: CustomToast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CustomToast>;

export const Success: Story = {
  args: {
    status: "success",
    text: "Operation completed successfully!",
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    text: "Be careful, something might be wrong.",
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: "error",
    text: "An error occurred. Please try again.",
    hasIcon: true,
  },
};
