const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
};

const light = {
  id: 'light',
  ...base,
  backgroundColor: '#eeeeee',
  backgroundColorAlfa: 'rgb(0, 0, 0, 0.3)',
  cardBackground: '#eeeeee',
  invertedBackgroundColor: '#303030',
  invertedTextColor: 'white',
  navColor: '#3996D0',
  textColor: 'black',
};

const dark = {
  id: 'dark',
  ...base,
  backgroundColor: '#303030',
  backgroundColorAlfa: 'rgb(255, 255, 255, 0.3)',
  cardBackground: '#707070',
  invertedBackgroundColor: '#eeeeee',
  invertedTextColor: 'black',
  navColor: '#1c5476',
  textColor: 'white',
};

export const theme = { dark, light };
