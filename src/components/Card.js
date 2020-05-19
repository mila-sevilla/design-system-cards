import React from 'react';
import styled, { css } from 'styled-components';
import spaceDict from './common/spaceDict';

const getPaddingToken = ({ theme, padding }) => {
  return padding && spaceDict(theme)[padding];
};

const StyledCard = styled.div(
  ({ theme }) => css`
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadows.small};
    padding: ${getPaddingToken};
  `
);

export default function Card({ children, padding }) {
  return <StyledCard padding={padding}>{children}</StyledCard>;
}
