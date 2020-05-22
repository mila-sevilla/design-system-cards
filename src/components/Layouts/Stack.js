import React from 'react';
import styled from 'styled-components';
import spaceDict from '../common/spaceDict';

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

const getSpacingToken = ({ theme, spaceAfter }) => spaceAfter && spaceDict(theme)[spaceAfter];

const getPaddingToken = ({ theme, padding }) => padding && spaceDict(theme)[padding];

const getSpacingChildrenToken = ({ theme, spacingChildren }) =>
  spacingChildren && spaceDict(theme)[spacingChildren];

const StyledStack = styled.div`
  display: ${props => (props.block ? 'block' : 'flex')};
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
  ${props => {
    if (props.tablet) {
      return ` 
        @media (min-width: 560px) {
          flex-direction: ${props.tablet.direction && props.tablet.direction};;
          & > * + * {
            margin: ${
              props.tablet.direction === 'row'
                ? `0 0 0 ${getSpacingChildrenToken(props)}`
                : `${getSpacingChildrenToken(props)} 0 0 0`
            };
          };
        }
      `;
    }
    return ``;
  }}
  ${props => {
    if (props.desktop) {
      return ` 
        @media (min-width: 765px) {
          flex-direction: ${props.desktop.direction && props.desktop.direction};;
          & > * + * {
            margin: ${
              props.desktop.direction === 'row'
                ? `0 0 0 ${getSpacingChildrenToken(props)}`
                : `${getSpacingChildrenToken(props)} 0 0 0`
            };
          };
        }
      `;
    }
    return ``;
  }}
`;

export default function Stack({
  children,
  block,
  align = 'start',
  direction = 'row',
  tablet,
  desktop,
  justify = 'start',
  spaceAfter,
  spacingChildren,
  padding,
  noWrap,
}) {
  return (
    <StyledStack
      block={block}
      align={align}
      tablet={tablet}
      desktop={desktop}
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
