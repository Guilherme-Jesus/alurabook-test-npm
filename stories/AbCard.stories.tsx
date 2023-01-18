// stories/Card.stories.tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard } from '../src/components/AbCard';

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = args => <AbCard {...args} />;

export const Default = Template.bind({});


Default.args = {
  children: <h1>Olá, eu sou um card</h1>,
};
