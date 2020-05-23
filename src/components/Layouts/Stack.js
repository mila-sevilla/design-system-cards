import React from 'react';
import styled from 'styled-components';
import getSpacingToken from '../common/getSpacingToken';

const getAlignValue = ({ align }) => {
  const alignValues = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };
  return alignValues[align];
};

const getJustifyValue = ({ justify }) => {
  const justifyValues = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
  };
  return justifyValues[justify];
};

const getSpaceAfterToken = ({ theme, spaceAfter }) =>
  spaceAfter && getSpacingToken(theme)[spaceAfter];

const getPaddingToken = ({ theme, padding }) => padding && getSpacingToken(theme)[padding];

const getSpacingChildrenToken = ({ theme, spacingChildren }) =>
  spacingChildren && getSpacingToken(theme)[spacingChildren];

const StyledStack = styled.div`
  display: ${props => (props.block ? 'block' : 'flex')};
  flex-wrap: ${props => (props.noWrap ? 'no-wrap' : 'wrap')};
  flex-direction: ${props => props.direction};
  align-items: ${getAlignValue};
  justify-content: ${getJustifyValue};
  margin-bottom: ${getSpaceAfterToken};
  padding: ${getPaddingToken};
  & > * + * {
    margin: ${props =>
      props.direction === 'row'
        ? `0 0 0 ${getSpacingChildrenToken(props)}`
        : `${getSpacingChildrenToken(props)} 0 0 0`};
  }
  ${props => {
    if (!props.tablet) return '';
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
  }}
  ${props => {
    if (!props.desktop) return '';
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
