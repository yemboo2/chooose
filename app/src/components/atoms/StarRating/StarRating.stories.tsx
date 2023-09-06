import type { Meta, StoryObj } from '@storybook/react';

import StarRating from './StarRating';

const meta = {
  title: 'Atoms/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
    rating: 'number',
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Rating: Story = {
  args: {
    rating: 3.1,
  },
};
