import {Link} from '@carnival/cotton';

import type {Meta} from '@storybook/react';

const meta: Meta<typeof Link> = {
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => <Link {...args}>The missing link</Link>;

Example.args = {
  href: 'https://www.imdb.com/title/tt6348138/',
  target: '_blank'
};
