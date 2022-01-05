export type ResponsiveCss =
  | string
  | Array<string>
  | {
      base?: string
      xs?: string
      sm?: string
      md?: string
      lg?: string
      xl?: string
      '2xl'?: string
    }
