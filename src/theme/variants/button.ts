export const Button = {
  baseStyle: {
    w: '240px',
    fontWeight: 'bold',
    borderRadius: '18px'
  },
  sizes: {
    normal: {
      h: '78px'
    },
    large: {
      h: '84px',
      w: '250px',
      fontSize: 'lg'
    }
  },
  variants: {
    base: {
      color: 'white',
      bg: 'green.500',
      _hover: {
        bg: 'green.700'
      }
    },
    "link": {
      w: 'auto',
      borderRadius: '0',
      color: 'gray.300',
      bg: 'none',
      _hover: {
        bg: 'none'
      }
    },
    "no-border": {
      borderRadius: '0',
      color: 'white',
      bg: 'green.500',
      _hover: {
        bg: 'green.700'
      }
    },
    "contact-channel": {
      w: 'auto',
      h: '58px',
      borderRadius: '0',
      color: 'gray.300',
      bg: 'brown.150',
      paddingLeft: '15px',
      paddingRight: '15px',
      _hover: {
        bg: 'brown.200'
      }      
    },
    "filters": {
      w: 'auto',
      minW: '200px',
      h: '50px',
      borderRadius: '0',
      paddingLeft: '15px',
      paddingRight: '15px',
      color: 'white',
      bg: 'green.500',
      _hover: {
        bg: 'green.700'
      }
    }
  },
  defaultProps: {
    variant: 'base',
    size: 'normal'
  }
}
