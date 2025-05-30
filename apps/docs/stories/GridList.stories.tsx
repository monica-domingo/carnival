import {GridList, GridListItem} from '@carnival/cotton';

import type {Meta} from '@storybook/react';

const meta: Meta<typeof GridList> = {
  component: GridList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => (
  <GridList aria-label="Ice cream flavors" {...args}>
    <GridListItem>Chocolate</GridListItem>
    <GridListItem>Mint</GridListItem>
    <GridListItem>Strawberry</GridListItem>
    <GridListItem>Vanilla</GridListItem>
  </GridList>
);

Example.args = {
  onAction: null,
  selectionMode: 'multiple'
};
