import React from 'react';
import styled from 'styled-components';
import Icons from '../icons';

const getSizeToken = ({ size }) => {
  const sizeToken = {
    large: '24px',
    medium: '16px',
    small: '12px',
  };
  return sizeToken[size];
};

const getColorToken = ({ theme, color }) => {
  const colorToken = {
    inherit: 'currentColor',
    dark: theme.palette.grey600,
    light: theme.palette.grey400,
    primary: theme.palette.primary,
  };
  return colorToken[color];
};

const StyledIcon = styled(({ className, viewBox, icon, ariaHidden, ariaLabel }) => {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      aria-hidden={ariaHidden ? 'true' : undefined}
      aria-label={ariaLabel}
    >
      {icon}
    </svg>
  );
})`
  width: ${getSizeToken};
  height: ${getSizeToken};
  flex-shrink: 0; // prevent shrinking when used in flex-box
  vertical-align: middle;
  fill: currentColor;
  color: ${getColorToken};
`;

const Icon = ({
  size = 'medium',
  color = 'inherit',
  className,
  icon,
  viewBox = '0 0 16 16',
  ariaHidden,
  ariaLabel,
}) => {
  return (
    <StyledIcon
      viewBox={viewBox}
      size={size}
      className={className}
      color={color}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
      icon={Icons[icon]}
    />
  );
};

export default Icon;
