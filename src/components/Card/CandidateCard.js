import React from 'react';
import Card from './Card';
import Avatar from '../Avatar/Avatar';
import Stack from '../Layouts/Stack';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import Candidates from '../../data/candidates.json';

export default function CandidateCard({ candidateId = 0 }) {
  const candidate = Candidates[candidateId];
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
        <Avatar size="small" src={candidate.avatar} />
        <Stack direction="column" spacingChildren="small">
          <Text variant="h3" color="highlighted">
            {candidate.name}
          </Text>
          <Stack direction="column">
            <Text variant="body2" spaceAfter="tiny">
              {candidate.job1.title}
            </Text>
            <Text variant="body2" color="subtitle">
              {`${candidate.job1.start} - ${candidate.job1.end}`}
            </Text>
          </Stack>
          <Stack direction="column">
            <Text variant="body2" spaceAfter="tiny">
              {candidate.job2.title}
            </Text>
            <Stack align="center" spacingChildren="tiny">
              <Icon icon="clock" color="light" />
              <Text variant="body2" color="subtitle">
                {`Last visited ${candidate.lastVisited}`}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <CardFooter />
    </Card>
  );
}
