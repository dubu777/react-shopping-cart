import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Header from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const meta = {
  title: "Buttons/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: "360px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    showBackButton: { control: "boolean", description: "뒤로가기 버튼 여부" },
    showTitle: { control: "boolean", description: "타이틀 여부" },
    title: { control: "text", description: "타이틀 여부" },
  },
  args: {
    onBackButtonClick: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showTitle: true,
    title: "SHOP",
  },
};
