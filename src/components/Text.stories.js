import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Variants = () => (
  <>
    <Text variant="h1" spaceAfter="small">
      Heading 1
    </Text>
    <Text variant="h2" spaceAfter="small">
      Heading 2
    </Text>
    <Text variant="h3" spaceAfter="small">
      Heading 3
    </Text>
    <Text spaceAfter="small"> Body 1 (Default) </Text>
    <Text variant="body2" spaceAfter="small">
      Body 2
    </Text>
    <Text variant="subtitle1" spaceAfter="small">
      Subtitle 1
    </Text>
    <Text color="highlighted" spaceAfter="small">
      Highlighted Text
    </Text>
  </>
);
