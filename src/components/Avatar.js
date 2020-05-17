import React from 'react';
import styled, { css } from 'styled-components';

const getSizeToken = ({ theme, size }) => {
  const sizeToken = {
    large: '64px',
    medium: '56px',
    small: '48px',
  };
  return sizeToken[size];
};

const StyledAvatar = styled.div(
  ({ theme }) => css`
    background-color: ${theme.palette.grey200};
    border-radius: 50%;
    height: ${getSizeToken};
    width: ${getSizeToken};
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  `
);

const Avatar = ({ src, size }) => {
  return (
    <StyledAvatar size={size}>
      <img src={src} alt="avatar" />
    </StyledAvatar>
  );
};

export default Avatar;
