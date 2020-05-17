import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button(
  ({ theme }) => css`
    font-size: ${theme.typography.body2.fontSize};
    font-family: ${theme.typography.fontFamily};
    padding: ${`${theme.spacing.xs} ${theme.spacing.sm}`};
    color: ${theme.palette.grey50};
    background-color: ${theme.palette.primary};
    border: ${`1px solid ${theme.palette.primary}`};
    border-radius: ${theme.shape.borderRadius};
    transition: box-shadow 0.3s ease, background 0.8s;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.medium};
      background: ${`${theme.palette.primary} radial-gradient(circle, transparent 1%, ${theme.palette.primary} 1%) center/15000%`};
    }
    &:active {
      background-color: ${theme.palette.primaryLight};
      background-size: 100%;
      transition: background 0s;
    }
  `
);

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
