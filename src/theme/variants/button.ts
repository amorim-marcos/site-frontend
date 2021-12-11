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
      bg: 'brand.primary.500',
      _hover: {
        bg: 'brand.primary.700'
      }
    }
  },
  defaultProps: {
    variant: 'base',
    size: 'normal'
  }
}
