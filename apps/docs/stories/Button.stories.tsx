import {Button} from '@carnival/cotton';
import type {Meta} from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => {
  return ( <Button {...args}>Press me</Button>)
};

Example.args = {
  onPress: () => alert('Hello world!')
};
