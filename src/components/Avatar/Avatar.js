import React from 'react';
import styled, { css } from 'styled-components';

const getSizeToken = ({ theme, size }) => {
  const sizeToken = {
    large: theme.avatar.large,
    medium: theme.avatar.medium,
    small: theme.avatar.small,
  };
  return sizeToken[size];
};

const StyledAvatar = styled.div(
  ({ theme }) => css`
    background-color: ${theme.palette.grey200};
    border-radius: ${theme.shape.circle};
    height: ${getSizeToken};
    width: ${getSizeToken};
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  `
);

const Avatar = ({ src, size = 'medium' }) => {
  return <StyledAvatar size={size}>{src && <img src={src} alt="avatar" />}</StyledAvatar>;
};

export default Avatar;
