import React from 'react';
import styled, { css } from 'styled-components';
import Stack from '../Stack';
import IconButton from '../IconButton';

const StyledCardHeader = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.spacing.xs};
    right: ${theme.spacing.xs};
  `
);

export default function CardHeader() {
  return (
    <StyledCardHeader>
      <Stack>
        <IconButton icon="star" color="dark" />
        <IconButton icon="mail" color="dark" />
      </Stack>
    </StyledCardHeader>
  );
}
