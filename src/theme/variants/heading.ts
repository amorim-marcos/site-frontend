export const Heading = {
  variants: {
    h1: {
      color: 'green.800',
      fontSize: { base: '20px', sm: '40px', lg: '50px', xl: '70px' },
      fontWeight: 700
    },
    h2: {
      color: 'green.700',
      fontSize: '50px',
      fontWeight: 800
    },
    h3: {
      color: 'green.700',
      fontSize: '30px',
      fontWeight: 800
    },
    h4: {
      color: 'green.700',
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px' },
      fontWeight: 'extrabold'
    },
    h5: {
      color: 'green.700',
      fontSize: '25px',
      fontWeight: 400
    },
    productTitle: {
      marginBottom: {
        base: '8px',
        sm: '9px',
        md: '11px',
        lg: '14px',
        xl: '17px',
        '2xl': '20px'
      },
      color: 'green.900',
      fontSize: {
        base: '8px',
        sm: '11px',
        md: '14px',
        lg: '18px',
        xl: '22px',
        '2xl': '30px'
      },
      zIndex: 'docked'
    }
  },
  defaultProps: {
    variant: 'h1'
  }
}
