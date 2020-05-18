import React from 'react';
import styled, { css } from 'styled-components';

const StyledBadge = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    background-color: ${theme.palette.grey100};
    color: ${theme.palette.grey600};
    border-radius: ${theme.shape.borderRadiusLarge};
    padding: ${`${theme.spacing.xxs} ${theme.spacing.sm}`};
    font-size: ${theme.typography.subtitle1.fontSize};
  `
);

const Badge = ({ children }) => {
  return (
    <StyledBadge>
      <span>{children}</span>
    </StyledBadge>
  );
};

export default Badge;
