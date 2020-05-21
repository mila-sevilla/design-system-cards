import React from 'react';
import styled from 'styled-components';
import spaceDict from './common/spaceDict';

const getSpacingToken = ({ theme, spacing }) => spacing && spaceDict(theme)[spacing];

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  column-gap: ${getSpacingToken};
  row-gap: ${getSpacingToken};
  ${props => {
    if (props.tablet) {
      return ` 
      @media (min-width: ${props.theme.breakpoints.tablet}) {
        grid-template-columns: ${props.tablet.columns};
      }
      `;
    }
    return ``;
  }}
  ${props => {
    if (props.desktop) {
      return ` 
      @media (min-width: ${props.theme.breakpoints.desktop}) {
        grid-template-columns: ${props.desktop.columns};
      }
      `;
    }
    return ``;
  }}
`;

export default function Grid({ children, spacing, tablet, desktop, columns = '1fr' }) {
  return (
    <StyledGrid spacing={spacing} tablet={tablet} desktop={desktop} columns={columns}>
      {children}
    </StyledGrid>
  );
}
