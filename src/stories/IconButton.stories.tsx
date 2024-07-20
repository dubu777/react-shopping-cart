import type { Meta, StoryObj } from "@storybook/react";
import Text from "../components/Text/Text";
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
        <Story />
      </ThemeProvider>
    )
  ],
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "텍스트"},
    type: { control: "select", description: "텍스트 타입"},
  },

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: 'title',
    type: 'title',
  },
};

export const SubTitle: Story = {
  args: {
    children: 'subtitle',
    type: 'subtitle',
  },
};

export const Body: Story = {
  args: {
    children: 'body',
    type: 'body',
  },
};

export const Notification: Story = {
  args: {
    children: 'notification',
    type: 'notification',
  },
};