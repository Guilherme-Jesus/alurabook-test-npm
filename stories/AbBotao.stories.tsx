import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbBotao, AbBotaoProps } from '../src/components/AbBotao';

export default {
  title: 'Components/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = args => <AbBotao {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button Primary',
  tipo: 'primary',
} as AbBotaoProps;

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button Secondary',
  tipo: 'secondary',
} as AbBotaoProps;
