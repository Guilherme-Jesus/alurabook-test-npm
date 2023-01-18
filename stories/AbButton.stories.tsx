import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbButton, AbButtonProps } from '../src/components/AbButton';

export default {
  title: 'Components/AbBotao',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button Primary',
  tipo: 'primary',
} as AbButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button Secondary',
  tipo: 'secondary',
} as AbButtonProps;
