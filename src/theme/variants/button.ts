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
      borderRadius: '0',
      color: 'grey.300',
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
    }
  },
  defaultProps: {
    variant: 'base',
    size: 'normal'
  }
}
