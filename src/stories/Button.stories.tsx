import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button/Button";


const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "icon",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: true,
    },
    size: { control: "select", description: "버튼 크기", defaultValue: "medium"},
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
    theme: "dark",
    disabled: true,
    children: "Button",
    size: "medium",
  },
};


export const Light: Story = {
  args: {
    children: "Button",
    theme: "light",
    disabled: false,
    size: "medium",
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    disabled: false,
    size: "medium",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    disabled: false,
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: true,
    size: "medium",
  },
};
