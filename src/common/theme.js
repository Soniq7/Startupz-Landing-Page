const colorCollection = {
  oxfordBlue: "#3D4F5C",
  coral: "#FB8958",
  white: "#FFFFFF",
  pelorous: "#46B8C8",
  swampGreen: "#A9BC87",
  glacier: "#8BB5C9",
  bondiBlue: "#00A0B6",
  trueV: "#8B60D3",
  hintOfRed: "#FBFAFA",
  indianKhaki: "#BBA98E",
  texasRose: "#FFC351",
  concrete: "#F3F3F3",
  desertStorm: "#FBFBFA",
};

export const theme = {
  colors: {
    text: {
      primaryText: colorCollection.oxfordBlue,
      primaryOrange: colorCollection.coral,
      textWhite: colorCollection.white,
      textTeal: colorCollection.pelorous,
      textGreen: colorCollection.swampGreen,
      textLightBlue: colorCollection.glacier,
      textBlue: colorCollection.bondiBlue,
      textPurple: colorCollection.trueV,
      textMessageButton: colorCollection.desertStorm,
    },
    border: {
      borderBlue: colorCollection.pelorous,
      borderOrange: colorCollection.coral,
      borderGrey: colorCollection.oxfordBlue,
    },
    shadow: {
      shadowCream: colorCollection.indianKhaki,
    },
    background: {
      backgroundGrey: colorCollection.oxfordBlue,
      backgroundWhite: colorCollection.white,
      backgroundCream: colorCollection.hintOfRed,
      backgroundTeal: colorCollection.pelorous,
      backgroundYellow: colorCollection.texasRose,
      backgroundForm: colorCollection.concrete,
    },
  },
  breakpoint: {
    smallScreen: 390,
    mobileSmall: 580,
    mobile: 767,
    tablet: 960,
    tabletVertical: 1090,
    tabletHorizontal: 1490,
    wideScreen: 2300,
  },
};
