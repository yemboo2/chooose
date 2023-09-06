import type { Meta, StoryObj } from '@storybook/react';

import HomeTemplate from './HomeTemplate';

const meta = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

export const Home: Story = {
  args: {
    experiences: [],
  },
};
