import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon/Icon';

const StyledIconButton = styled.button(
  ({ theme }) => css`
    padding: ${theme.spacing.xs};
    border-radius: ${theme.shape.circle};
    border: 0px;
    transition: background 0.3s ease;
    &:hover {
      cursor: pointer;
      background-color: ${theme.palette.grey50};
    }
  `
);

export default function IconButton({
  disabled = false,
  icon,
  size = 'medium',
  color = 'inherit',
  className,
  viewBox = '0 0 16 16',
  ariaLabel,
}) {
  return (
    <StyledIconButton disabled={disabled}>
      <Icon
        icon={icon}
        viewBox={viewBox}
        size={size}
        className={className}
        color={color}
        ariaLabel={ariaLabel}
      />
    </StyledIconButton>
  );
}
