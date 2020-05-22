import React from 'react';
import Button from './Button';
import IconButton from './IconButton';
import Stack from '../Layouts/Stack';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Stack spacingChildren="medium">
    <Button>Button</Button>
    <Button disabled>Disabled Button</Button>
  </Stack>
);

export const IconButtons = () => (
  <Stack spacingChildren="tiny">
    <IconButton icon="star" color="dark" />
    <IconButton icon="mail" color="dark" />
    <IconButton icon="clock" color="dark" />
  </Stack>
);
