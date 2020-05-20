import React from 'react';
import Card from './Card';
import Avatar from '../Avatar';
import Stack from '../Stack';
import Text from '../Text';
import Icon from '../Icon';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

export default function CandidateCard() {
  return (
    <Card maxWidth="540px">
      <CardHeader />
      <Stack flex padding="medium" spacingChildren="medium">
        <Avatar size="small" />
        <Stack flex direction="column" spacingChildren="small">
          <Text variant="h3" color="highlighted">
            Ennie Deininger
          </Text>
          <Stack flex direction="column">
            <Text variant="body2" spaceAfter="tiny">
              Business Manager for Poland, Czech Republic and Slovakia
            </Text>
            <Text variant="body2" color="subtitle">
              May 1994 - Feb 2018 (23 years, 10 months)
            </Text>
          </Stack>
          <Stack flex direction="column">
            <Text variant="body2" spaceAfter="tiny">
              Prozone Sports LTD
            </Text>
            <Stack flex align="center" spacingChildren="tiny">
              <Icon icon="clock" color="light" />
              <Text variant="body2" color="subtitle">
                Last visited 21/05/2019
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <CardFooter />
    </Card>
  );
}
