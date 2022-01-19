export const Heading = {
  variants: {
    h1: {
      color: 'green.800',
      fontSize: '70px',
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
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px'},
      fontWeight: 'extrabold',
    },
    h5: {
      color: 'green.700',
      fontSize: '25px',
      fontWeight: 400
    }
  },
  defaultProps: {
    variant: 'h1'
  }
}
