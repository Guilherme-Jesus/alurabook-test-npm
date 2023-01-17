import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbBotao } from '../src/components/index';

export default {
  title: 'Components/AbBotao',
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

export const Primary = Template.bind({});
