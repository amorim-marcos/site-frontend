export const Text = {
  variants: {
    'body-bold': {
      fontSize: '20px',
      fontWeight: 'semibold'
    },
    body: {
      fontSize: { base: '8px', sm: '12px', lg: '15px', xl: '18px' },
      fontWeight: 'normal'
    },
    'larger-body-bold': {
      fontSize: { base: '11px', sm: '15px', lg: '19px', xl: '23px'},
      fontWeight: 'medium'
    },
    'larger-body': {
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px'},
      fontWeight: 'normal'
    },
    'breadcrumbs-selected': {
      fontSize: { base: '11px', sm: '15px', lg: '19px', xl: '23px'},
      fontWeight: 'bold'
    },
    breadcrumbs: {
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px'},
      fontWeight: 'normal'
    },
    'header-menu': {
      fontSize: '16.5px',
      fontWeight: 'bold'
    },
    'header-menu-small': {
      fontSize: '16.5px',
      fontWeight: 'semibold'
    },
    'canal-bnk-menu': {
      fontSize: '16px',
      fontWeight: 'medium',
      letterSpacing: '2.4px'
    },
    'primary-button': {
      fontSize: '18px',
      fontWeight: 'bold'
    },
    'larger-button': {
      fontSize: '21px',
      fontWeight: 'bold'
    },
    tags: {
      fontSize: '20px',
      fontWeight: 'normal',
      letterSpacing: '-0.4px'
    },
    h1: {
      color: 'green.800',
      fontSize: { base: '18px', sm: '32px', lg: '40px', xl: '50px'},
      fontWeight: 'extrabold'
    },
    h2: {
      color: 'green.600',
      fontSize: { base: '14px', sm: '22px', lg: '30px', xl: '40px'},
      fontWeight: 'semibold'
    },
    h3: {
      color: 'green.700',
      fontSize: { base: '12px', sm: '16px', lg: '24px', xl: '30px'},
      fontWeight: 'extrabold'
    },
    h4: {
      color: 'green.700',
      fontSize: { base: '10px', sm: '14px', lg: '16px', xl: '20px' },
      fontWeight: 'extrabold'
    },
    h5: {
      color: 'green.700',
      fontSize: { base: '8px', sm: '12px', lg: '14px', xl: '13px' },
      fontWeight: 'medium'
    },
    productBody: {
      fontSize: {
        base: '14px',
        sm: '8px',
        md: '11px',
        lg: '14px',
        xl: '17px',
        '2xl': '20px'
      },
      color: 'green.900',
      zIndex: 'docked'
    },
    productTitle: {
      fontWeight: 'bold',
      fontSize: {
        base: '15px',
        xs: '20px',
        sm: '11px',
        md: '14px',
        lg: '18px',
        xl: '22px',
        '2xl': '30px'
      },
      color: 'green.900',
      zIndex: 'docked',
      marginBottom: {
        base: '5px',
        xs: '8px',
        md: '10px',
        lg: '13px',
        xl: '16px',
        '2xl': '20px'
      }
    },
    berneckPlusTestInfoNumber: {
      marginRight: '10px',
      fontSize: {
        base: '20px',
        sm: '10px',
        md: '20px',
        lg: '30px',
        xl: '40px',
        '2xl': '50px'
      },
      zIndex: 'docked',
      color: 'green.600',
      fontWeight: 'bold'
    }
  },
  defaultProps: {
    variant: 'body'
  }
}
