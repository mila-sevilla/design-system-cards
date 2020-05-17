import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyle from '../src/globalStyle';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{padding: theme.spacing.xl}}>
    <GlobalStyle />
    {story()}
    </div>
  </ThemeProvider>
));
