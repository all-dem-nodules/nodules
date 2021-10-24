import { Story, Meta } from '@storybook/react';
import { Styleguide, StyleguideProps } from './styleguide';

export default {
  component: Styleguide,
  title: 'Styleguide',
} as Meta;

const Template: Story<StyleguideProps> = (args) => <Styleguide {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
