const fontWeight = {
  bold: 700,
  regular: 300,
};

const theme = {
  palette: {
    primary: '#009090',
    primaryDark: '#047878',
    primaryLight: '#3CA1A1',
    lightBg: '#f2f4f4',
    white: '#ffffff',
    grey50: '#f2f2f2',
    grey100: '#e5e5e5',
    grey150: '#d9d9d9',
    grey200: '#cccccc',
    grey400: '#999999',
    grey600: '#666666',
    grey800: '#333333',
  },
  shadows: {
    small: '0px 2px 4px rgba(153, 153, 153, 0.55)',
    medium: '0px 3px 6px rgba(153, 153, 153, 0.55)',
    large: '0px 6px 10px rgba(153, 153, 153, 0.55)',
  },
  typography: {
    fontFamily: "'Trebuchet MS', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: {
      regular: fontWeight.regular,
      bold: fontWeight.bold,
    },
    h1: {
      fontSize: '26px',
    },
    h2: {
      fontSize: '22px',
    },
    h3: {
      fontSize: '18px',
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
    subtitle1: {
      fontSize: '12px',
    },
  },
  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
  },
  shape: {
    borderRadius: '4px',
    borderRadiusLarge: '12px',
    circle: '50%',
  },
};

export default theme;
