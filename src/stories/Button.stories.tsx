import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/common/Button/Button";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: "360px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    $buttonTheme: {
      control: "select",
      description: "버튼 테마",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "icon",
    },
    isDisable: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: true,
    },
    size: {
      control: "select",
      description: "버튼 크기",
      defaultValue: "medium",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    $buttonTheme: "dark",
    isDisable: false,
    children: "Button",
    size: "medium",
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    $buttonTheme: "light",
    isDisable: false,
    size: "medium",
  },
};

export const Gray: Story = {
  args: {
    children: "Button",
    $buttonTheme: "gray",
    isDisable: false,
    size: "medium",
  },
};
