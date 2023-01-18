import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {
  AbGroupOptions,
  IAbGroupOptionsProps,
} from '../src/components/AbGroupOptions';

export default {
  title: 'Components/AbGroupOptions',
  component: AbGroupOptions,
} as ComponentMeta<typeof AbGroupOptions>;

const Template: ComponentStory<typeof AbGroupOptions> = args => (
  <AbGroupOptions {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 0,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'E-book',
      body: 'R$ 0,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'E-book',
      body: 'R$ 0,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as IAbGroupOptionsProps;
