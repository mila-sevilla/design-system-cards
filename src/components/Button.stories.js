import React from 'react';
// import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <>
    <Button>Button</Button>
    <Button disabled>Disabled Button</Button>
  </>
);
