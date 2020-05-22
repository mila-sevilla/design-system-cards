import React from 'react';
import styled, { css } from 'styled-components';
import getSpacingToken from '../common/getSpacingToken';

const getPaddingToken = ({ theme, padding }) => padding && getSpacingToken(theme)[padding];

const StyledCard = styled.div(
  ({ theme }) => css`
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadows.small};
    padding: ${getPaddingToken};
    transition: box-shadow 0.3s ease;
    max-width: ${props => props.maxWidth && props.maxWidth};
    position: relative;
    &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.large};
    }
  `
);

export default function Card({ children, padding, maxWidth }) {
  return (
    <StyledCard padding={padding} maxWidth={maxWidth}>
      {children}
    </StyledCard>
  );
}
