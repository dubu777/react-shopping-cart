import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton/IconButton";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";


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
    iconPath: { control: "text", description: "아이콘 경로", defaultValue: "https://kr.object.ncloudstorage.com/icons/ic-back-arrow"},
    alt: { control: "text", description: "아이콘 설명", defaultValue: "뒤로가기 버튼"},
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/ic-public-delete-dark.svg",
    alt: 'icon'
  },
};