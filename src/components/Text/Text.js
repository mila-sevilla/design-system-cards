import React from 'react';
import styled from 'styled-components';
import spaceDict from '../common/spaceDict';

const getColorToken = ({ theme, color }) => {
  const colorToken = {
    default: theme.palette.grey800,
    highlighted: theme.palette.primary,
    subtitle: theme.palette.grey400,
  };
  return colorToken[color];
};

const getWeightToken = ({ theme, variant }) => {
  const weightToken = {
    h1: theme.typography.fontWeight.bold,
    h2: theme.typography.fontWeight.bold,
    h3: theme.typography.fontWeight.bold,
    body1: theme.typography.fontWeight.regular,
    body2: theme.typography.fontWeight.regular,
    subtitle1: theme.typography.fontWeight.regular,
  };
  return weightToken[variant];
};

const getVariantToken = ({ theme, variant }) => {
  const variantToken = {
    h1: theme.typography.h1.fontSize,
    h2: theme.typography.h2.fontSize,
    h3: theme.typography.h3.fontSize,
    body1: theme.typography.body1.fontSize,
    body2: theme.typography.body2.fontSize,
    subtitle1: theme.typography.subtitle1.fontSize,
  };
  return variantToken[variant];
};

const getSpaceAfterToken = ({ theme, spaceAfter }) => spaceAfter && spaceDict(theme)[spaceAfter];

const getSpaceBeforeToken = ({ theme, spaceBefore }) =>
  spaceBefore && spaceDict(theme)[spaceBefore];

export const StyledText = styled(({ element: TextElement, children, className }) => (
  <TextElement className={className}>{children}</TextElement>
))`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  letter-spacing: 0.3px;
  margin-top: ${getSpaceBeforeToken};
  margin-bottom: ${getSpaceAfterToken};
  color: ${getColorToken};
  font-weight: ${getWeightToken};
  font-size: ${getVariantToken};
  text-align: ${props => (props.align ? props.align : 'left')};
`;

const Text = ({
  element = 'p',
  variant = 'body1',
  color = 'default',
  spaceAfter = 'none',
  spaceBefore = 'none',
  align,
  children,
}) => {
  return (
    <StyledText
      element={element}
      variant={variant}
      spaceAfter={spaceAfter}
      spaceBefore={spaceBefore}
      color={color}
      align={align}
    >
      {children}
    </StyledText>
  );
};

export default Text;
