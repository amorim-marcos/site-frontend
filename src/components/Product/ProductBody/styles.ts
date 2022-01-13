export const tableItemStyle = (borderColor: string, background: string) => ({
  padding: '0px',
  paddingLeft: {
    base: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '25px',
    '2xl': '30px'
  },
  bg: background,
  height: {
    base: '15px',
    sm: '20px',
    md: '25px',
    lg: '30px',
    xl: '35px',
    '2xl': '40px'
  },
  border: `3px solid ${borderColor}`
})

export const headingStyle = {
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

export const paragraphStyle = {
  marginBottom: {
    base: '30px',
    sm: '40px',
    md: '50px',
    lg: '60px',
    xl: '70px',
    '2xl': '80px'
  },
  fontSize: {
    base: '7px',
    sm: '8px',
    md: '11px',
    lg: '14px',
    xl: '17px',
    '2xl': '20px'
  },
  color: 'green.900',
  width: '43%',
  zIndex: 'docked'
}
