import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTextInput, AbTextInputProps } from '../src';

export default {
  title: 'components/AbTextInput',
  component: AbTextInput,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbTextInput>;

const Template: ComponentStory<typeof AbTextInput> = args => (
  <AbTextInput {...args} />
);

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Text',
  type: 'text',
} as AbTextInputProps;
