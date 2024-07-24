import type { Meta, StoryObj } from "@storybook/react";
import LabelCheckBox from "../components/common/LabelCheckBox/LabelCheckBox";
import { fn } from "@storybook/test";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";


const meta = {
  title: "Buttons/LabelCheckBox",
  component: LabelCheckBox,
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
    isChecked: { control: "boolean", description: "선택 여부"},
    size: { control: "select", description: "사이즈"},
    children: { control: "text", description: "텍스트"},
  },
  args: {
    onClick: fn(),
  }

} satisfies Meta<typeof LabelCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    isChecked: false,
    size: 'medium',
    children: '선택',
  },
};

export const Medium: Story = {
  args: {
    isChecked: false,
    size: 'small',
    children: '선택',
  },
};