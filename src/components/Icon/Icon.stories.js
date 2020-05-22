import React from 'react';
import Icon from './Icon';
import Text from '../Text/Text';
import Stack from '../Layouts/Stack';

export default {
  title: 'Icons',
  component: Icon,
};

export const All = () => (
  <Stack spacingChildren="medium">
    <Stack direction="column" align="center">
      <Icon icon="mail" color="dark" size="medium" />
      <Text variant="body2" spaceBefore="small">
        Mail
      </Text>
    </Stack>
    <Stack direction="column" align="center">
      <Icon icon="clock" color="dark" size="medium" />
      <Text variant="body2" spaceBefore="small">
        Clock
      </Text>
    </Stack>
    <Stack direction="column" align="center">
      <Icon icon="star" color="dark" size="medium" />
      <Text variant="body2" spaceBefore="small">
        Star
      </Text>
    </Stack>
  </Stack>
);
