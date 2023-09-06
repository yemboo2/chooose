import type { Meta, StoryObj } from '@storybook/react';

import ExperienceCard from './ExperienceCard';

const meta = {
  title: 'Molecules/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof ExperienceCard>;

export const Experience: Story = {
  args: {
    title: 'Trekking in the Himalayas',
    imageUrl: 'https://www.triptipedia.com/tip/img/PyaGqRXAo.jpg',
    countries: 3,
    days: 12,
    offset: 5470,
    rating: 4.8,
  },
};
