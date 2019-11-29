
const Theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 3, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  },
  font_family: {
    heading: '\'Archivo Black\', sans-serif',
    body: 'Arial, Helvetica, sans-serif'
  },
  colors: {
    primary: '#84bd00',
    base_0: '#ffffff',
    base_10: '#f8f9fa',
    base_20: '#e9ecef',
    base_30: '#dee2e6',
    base_40: '#ced4da',
    base_50: '#adb5bd',
    base_60: '#6c757d',
    base_70: '#495057',
    base_80: '#343a40',
    base_90: '#212529',
    base_98: '#101010',
    base_100: '#000000',
  }
};

export { Theme };