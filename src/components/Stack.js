import React from 'react';
import styled from 'styled-components';
import spaceDict from './common/spaceDict';

const getAlignToken = ({ align }) => {
  const alignToken = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };
  return alignToken[align];
};

const getJustifyToken = ({ justify }) => {
  const justifyToken = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
  };
  return justifyToken[justify];
};

const getSpacingToken = ({ theme, spaceAfter }) => {
  return spaceAfter && spaceDict(theme)[spaceAfter];
};

const getPaddingToken = ({ theme, padding }) => {
  return padding && spaceDict(theme)[padding];
};

const getSpacingChildrenToken = ({ theme, spacingChildren }) => {
  return spacingChildren && spaceDict(theme)[spacingChildren];
};

const StyledStack = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-wrap: ${props => (props.noWrap ? 'no-wrap' : 'wrap')};
  flex-direction: ${props => props.direction};
  align-items: ${getAlignToken};
  justify-content: ${getJustifyToken};
  margin-bottom: ${getSpacingToken};
  padding: ${getPaddingToken};
  & > * + * {
    margin: ${props =>
      props.direction === 'row'
        ? `0 0 0 ${getSpacingChildrenToken(props)}`
        : `${getSpacingChildrenToken(props)} 0 0 0`};
  }
`;

export default function Stack({
  children,
  flex,
  align = 'start',
  direction = 'row',
  justify = 'start',
  spaceAfter,
  spacingChildren,
  padding,
  noWrap,
}) {
  return (
    <StyledStack
      flex={flex}
      align={align}
      direction={direction}
      justify={justify}
      spacingChildren={spacingChildren}
      spaceAfter={spaceAfter}
      padding={padding}
      noWrap={noWrap}
    >
      {children}
    </StyledStack>
  );
}
