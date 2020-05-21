import React from 'react';
import Avatar from './Avatar';
import Stack from './Stack';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const All = () => (
  <Stack align="center" spacingChildren="medium">
    <Avatar size="large" src="https://avatars2.githubusercontent.com/u/132554" />
    <Avatar
      size="medium"
      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    />
    <Avatar
      size="small"
      src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </Stack>
);
