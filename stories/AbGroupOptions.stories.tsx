import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbGroupOptions } from '../src/components/AbGroupOptions';

export default {
  title: 'Components/AbGroupOptions',
  component: AbGroupOptions,
} as ComponentMeta<typeof AbGroupOptions>;

const Template: ComponentStory<typeof AbGroupOptions> = () => (
  <AbGroupOptions />
);

export const Default = Template.bind({});
Default.args = {};
