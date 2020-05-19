import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button(
  ({ theme }) => css`
    font-size: ${theme.typography.body2.fontSize};
    font-family: ${theme.typography.fontFamily};
    padding: ${`${theme.spacing.xs} ${theme.spacing.sm}`};
    color: ${theme.palette.grey50};
    background-color: ${props => (props.disabled ? theme.palette.grey200 : theme.palette.primary)};
    border: ${props => !props.disabled && `1px solid ${theme.palette.primary}`};
    border-radius: ${theme.shape.borderRadius};
    transition: box-shadow 0.3s ease, background 0.8s;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
      box-shadow: ${props => !props.disabled && theme.shadows.medium};
      background: ${props =>
        !props.disabled &&
        `${theme.palette.primary} radial-gradient(circle, transparent 1%, ${theme.palette.primary} 1%) center/15000%`};
    }
    &:active {
      background-color: ${theme.palette.primaryLight};
      background-size: 100%;
      transition: background 0s;
    }
  `
);

export default function Button({ children, disabled = false }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}
