export const Text = {
  variants: {
    'body-bold': {
      fontSize: '20px',
      fontWeight: 'semibold'
    },
    body: {
      fontSize: { base: '8px', sm: '12px', lg: '16px', xl: '20px'},
      fontWeight: 'normal'
    },
    'larger-body-bold': {
      fontSize: '23px',
      fontWeight: 'medium'
    },
    'larger-body': {
      fontSize: '20px',
      fontWeight: 'normal'
    },
    'breadcrumbs-selected': {
      fontSize: '23px',
      fontWeight: 'bold'
    },
    breadcrumbs: {
      fontSize: '20px',
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
    variant: 'body'
  }
}
