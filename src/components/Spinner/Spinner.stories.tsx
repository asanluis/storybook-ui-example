import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Spinner from './index';
import {SpinnerProps} from "./Spinner.types";

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    controls: {
    },
    default: 'Default',
  },
  argTypes: {
    rotate: { control: 'number' },
    delay: { control: 'number' }
  },
} as ComponentMeta<typeof Spinner>;


const Template: Story<SpinnerProps> = ({
  ...args
}) => (
    <Spinner {...args} />
);

export const TooFast = Template.bind({});
TooFast.args = {
  rotate: 30,
  delay: 10,
};

export const Default = Template.bind({});
Default.args = {
  rotate: 30,
  delay: 0.1,
};
