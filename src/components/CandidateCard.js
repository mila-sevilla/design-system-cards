import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card';
import Avatar from './Avatar';
import Stack from './Stack';
import Text from './Text';
import Badge from './Badge';
import Icon from './Icon';
import Button from './Button';
// import spaceDict from './common/spaceDict';

// const getPaddingToken = ({ theme, padding }) => {
//   return padding && spaceDict(theme)[padding];
// };

const StyledCandidateCard = styled.div(({ theme }) => css``);

const CardActionArea = styled.div(
  ({ theme }) => css`
    background-color: ${theme.palette.lightBg};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${`${theme.spacing.xs} ${theme.spacing.md}`};
    box-sizing: border-box;
  `
);

export default function CandidateCard() {
  return (
    <Card>
      <Stack flex padding="medium" spacingChildren="medium">
        <Avatar size="small" />
        <Stack flex direction="column" spacingChildren="small">
          <Text variant="h3" color="highlighted">
            Ennie Deininger
          </Text>
          <Stack flex direction="column" spacingChildren="tiny">
            <Text variant="body2"> Business Manager for Poland, Czech Republic and Slovakia</Text>
            <Text variant="body2" color="subtitle">
              {' '}
              May 1994 - Feb 2018 (23 years, 10 months)
            </Text>
          </Stack>
          <Stack flex direction="column" spacingChildren="tiny">
            <Text variant="body2"> Prozone Sports LTD </Text>
            <Text variant="body2" color="subtitle">
              <Icon icon="clock" />
              Last visited 21/05/2019
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <CardActionArea>
        <Badge>Potential applicant</Badge>
        <Button>Send a message</Button>
      </CardActionArea>
    </Card>
  );
}
