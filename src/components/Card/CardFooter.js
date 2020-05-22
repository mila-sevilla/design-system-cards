import React from 'react';
import styled, { css } from 'styled-components';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

const StyledCardFooter = styled.div(
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

export default function CardFooter() {
  return (
    <StyledCardFooter>
      <Badge>Potential applicant</Badge>
      <Button>Send a message</Button>
    </StyledCardFooter>
  );
}
