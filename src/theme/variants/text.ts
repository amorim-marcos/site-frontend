export const Text = {
  variants: {
    'body-bold': {
      fontSize: '20px',
      fontWeight: 'semibold'
    },
    body: {
      fontSize: {
        base: '13px',
        sm: '13px',
        md: '14px',
        lg: '14px',
        xl: '17px'
      },
      fontWeight: 'normal'
    },
    'larger-body-bold': {
      fontSize: { base: '11px', sm: '15px', lg: '19px', xl: '23px' },
      fontWeight: 'medium'
    },
    'larger-body': {
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px' },
      fontWeight: 'normal'
    },
    'breadcrumbs-selected': {
      fontSize: { base: '11px', sm: '15px', lg: '19px', xl: '23px' },
      fontWeight: 'bold'
    },
    breadcrumbs: {
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px' },
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
      fontSize: { base: '28px', sm: '32px', lg: '32px', xl: '35px' },
      fontWeight: 'extrabold',
      letterSpacing: '-0.84px'
    },
    h2: {
      color: 'green.600',
      fontSize: { base: '22px', sm: '22px', lg: '30px', xl: '32px' },
      fontWeight: 'semibold'
    },
    h3: {
      color: 'green.700',
      fontSize: { base: '18px', lg: '22px', xl: '24px' },
      fontWeight: 'extrabold'
    },
    h4: {
      color: 'green.700',
      fontSize: {
        base: '14px',
        md: '16px',
        lg: '18px',
        xl: '17px',
        '2xl': '19px'
      },
      fontWeight: 'bold',
      letterSpacing: '-0.45px'
    },
    h5: {
      color: 'green.700',
      fontSize: { base: '12px', sm: '12px', lg: '13px', xl: '14px' },
      fontWeight: 'medium'
    },
    h6: {
      color: 'green.700',
      fontSize: { base: '11px', sm: '12px', lg: '13px', xl: '14px' },
      fontWeight: 'bold'
    },
    productBody: {
      fontSize: {
        base: '13px',
        sm: '13px',
        md: '14px',
        lg: '14px',
        xl: '17px'
      },
      fontWeight: 'normal',
      color: 'green.900',
    },
    productTitle: {
      fontWeight: 'bold',
      fontSize: { base: '18px', lg: '22px', xl: '24px' },
      color: 'green.900',
      letterSpacing: '-0.65px'
    },
    berneckPlusTestInfoNumber: {
      fontSize: {
        base: '28px',
        md: '20px',
        lg: '30px',
        xl: '40px',
        '2xl': '50px'
      },
      color: 'green.600',
      fontWeight: 'bold'
    }
  },
  defaultProps: {
    variant: 'body'
  }
}
