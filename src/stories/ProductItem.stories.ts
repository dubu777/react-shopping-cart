import type { Meta, StoryObj } from '@storybook/react';

import ProductItem from '../components/ProductItem/ProductItem';

const meta = {
  title: 'ShoppingCart/ProductItem',
  component: ProductItem,
  args: {
    information: {
      id: 1,
      name: '치킨',
      price: 10000,
      imageUrl: 'https://www.asiaa.co.kr/news/photo/202204/83451_94243_5547.png',
    },
  },
} satisfies Meta<typeof ProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};