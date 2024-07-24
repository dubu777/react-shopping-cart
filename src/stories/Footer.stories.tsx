import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Footer from "../components/common/Footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const meta = {
  title: "Buttons/Footer",
  component: Footer,
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
    children: { control: "text", description: "결제하기" },
    isDisable: { control: "boolean", description: "isDisable" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '결제하기',
    isDisable: false,
  },
};
