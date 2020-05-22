import React from 'react';
import Card from './Card';
import Avatar from '../Avatar/Avatar';
import Stack from '../Layouts/Stack';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

export default function CandidateCard({ avatar, name, jobs, lastVisited }) {
  return (
    <Card>
      <CardHeader />
      <Stack
        padding="medium"
        spacingChildren="medium"
        direction="column"
        desktop={{ direction: 'column' }}
        tablet={{ direction: 'row' }}
      >
        <Avatar size="small" src={avatar} />
        <Stack direction="column" spacingChildren="small">
          <Text variant="h3" color="highlighted">
            {name}
          </Text>
          <Stack direction="column">
            <Text variant="body2" spaceAfter="tiny">
              {jobs[0].title}
            </Text>
            <Text variant="body2" color="subtitle">
              {`${jobs[0].start} - ${jobs[0].end}`}
            </Text>
          </Stack>
          <Stack direction="column">
            <Text variant="body2" spaceAfter="tiny">
              {jobs[1].title}
            </Text>
            <Stack align="center" spacingChildren="tiny">
              <Icon icon="clock" color="light" />
              <Text variant="body2" color="subtitle">
                {`Last visited ${lastVisited}`}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <CardFooter />
    </Card>
  );
}
