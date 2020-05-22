import React from 'react';
import styled from 'styled-components';
import getSpacingToken from '../common/getSpacingToken';

const getGapToken = ({ theme, gap }) => gap && getSpacingToken(theme)[gap];

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  column-gap: ${getGapToken};
  row-gap: ${getGapToken};
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

export default function Grid({ children, gap, tablet, desktop, columns = '1fr' }) {
  return (
    <StyledGrid gap={gap} tablet={tablet} desktop={desktop} columns={columns}>
      {children}
    </StyledGrid>
  );
}
