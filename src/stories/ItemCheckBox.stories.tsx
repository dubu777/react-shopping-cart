import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import ItemCheckBox from "@/components/Cart/ItemCheckBox/ItemCheckBox";


const meta = {
  title: "Buttons/ItemCheckBox",
  component: ItemCheckBox,
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
    showButton: { control: "boolean", description: "선택 여부"},
    buttonText: { control: "text", description: "선택삭제"},
    labelText: { control: "text", description: "전체선택"},
  },
  args: {
    onButtonClick: fn(),
    onCheckBoxClick: fn(),
  }

} satisfies Meta<typeof ItemCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showButton: true,
    buttonText: '선택삭제',
    labelText: '전체선택',
  },
};