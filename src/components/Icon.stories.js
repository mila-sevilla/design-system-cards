import React from 'react';
import Icon from './Icon';
import Text from './Text';

export default {
  title: 'Icons',
  component: Icon,
};

export const All = () => (
  <>
    <Icon icon="mail" color="dark" size="large" />
    <Text>Mail</Text>
    <Icon icon="clock" color="dark" size="large" />
    <Text>Clock</Text>
    <Icon icon="star" color="dark" size="large" />
    <Text>Star</Text>
  </>
);
