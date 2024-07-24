import type { Meta, StoryObj } from "@storybook/react";
import Text from "../components/common/Text/Text";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";


const meta = {
  title: "Buttons/Text",
  component: Text,
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
    type: { control: "select", description: "사이즈"},
    children: { control: "text", description: "텍스트"},
    color: { control: "select", description: "색상"},
  },

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    type: 'title',
    children: '텍스트',
    color: 'dark',
  },
};

export const SubTitle: Story = {
  args: {
    type: 'subTitle',
    children: '텍스트',
    color: 'dark',
  },
};

export const Body: Story = {
  args: {
    type: 'body',
    children: '텍스트',
    color: 'dark',
  },
};

export const Notification: Story = {
  args: {
    type: 'notification',
    children: '텍스트',
    color: 'dark',
  },
};