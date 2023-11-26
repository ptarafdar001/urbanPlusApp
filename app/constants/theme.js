const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',

  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#e4e6eb',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',

  darkGreen: '#0e7329',
  lightGreen: '#4dde33',
  lightGreen2: '#cbf5d6',

  darkYolow: '#fade25',

  lightSky1: '#d2fcfa',
  lightSky2: '#dcfaf8',

  black: '#050505',
};

const SIZES = {
  xxSmall: 5,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
