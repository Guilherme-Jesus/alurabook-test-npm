import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputAmount, AbInputAmountProps } from '../src';

export default {
  title: 'components/AbInputAmount',
  component: AbInputAmount,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputAmount>;

const Template: ComponentStory<typeof AbInputAmount> = args => (
  <AbInputAmount {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Uma label interessante',
} as AbInputAmountProps;
