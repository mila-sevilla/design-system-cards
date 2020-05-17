import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Default = () => (
  <div>
    <Text variant="h1">Heading 1 </Text>
    <Text variant="h2">Heading 2</Text>
    <Text variant="h3">Heading 3</Text>
    <Text> Body 1 (Default) </Text>
    <Text variant="body2">Body 2</Text>
    <Text variant="subtitle1">Subtitle</Text>
    <Text color="highlighted"> Highlighted Text</Text>
  </div>
);
