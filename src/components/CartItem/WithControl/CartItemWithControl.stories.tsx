import type { Meta, StoryObj } from '@storybook/react';
import CartItemWithControl from './CartItemWithControl';
import { RecoilRoot } from 'recoil';

const meta = {
  title: 'Components/CartItemWithControl',
  component: CartItemWithControl,
  tags: ['autodocs'],
  argTypes: {
    product: {
      description: '',
      control: { type: 'object' },
    },
    quantity: {
      description: '',
      control: { type: 'number', min: 1 },
    },
    cartItemId: {
      description: '',
    },
  },
  args: {
    product: {
      id: 3,
      name: '아디다스',
      price: 2000,
      imageUrl: 'https://sitem.ssgcdn.com/74/25/04/item/1000373042574_i1_750.jpg',
      category: 'fashion',
    },
    quantity: 1,
    cartItemId: 1,
  },
} satisfies Meta<typeof CartItemWithControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ ...args }: CartItemWithControl) => {
    return (
      <RecoilRoot>
        <div style={{ width: '430px' }}>
          <CartItemWithControl {...args} />
        </div>
      </RecoilRoot>
    );
  },
};