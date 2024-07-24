import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/common/IconButton/IconButton";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { fn } from "@storybook/test";


const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ],
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", description: "아이콘 사이즈 선택"},
    alt: { control: "text", description: "alt"},
    iconPath: { control: "text", description: "icon path"},
  },
  args: {
    onClick: fn(),
  }

} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    alt: 'icon',
    iconPath: 'https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/ic-public-delete-dark.svg',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    alt: 'icon',
    iconPath: 'https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/ic-public-delete-dark.svg',
  },
};