const SOURCE = {
  LOGO: require('./logo.png'),
  LOGOAPP: require('./images/logoApp.png'),
  BTNPLAY: require('./images/btnPlay.png'),
  BTNNEXT: require('./images/btnNext.png'),
  BTNNEXT_2: require('./images/next.png'),
  BACKGROUNDSCREEN1: require('./images/backgroundScreen1.png'),
  BACKGROUNDSCREEN2: require('./images/backgroundScreen2.png'),
  IMG_HERITAGE1: require('./images/imgScreen3_1.png'),
  IMG_HERITAGE2: require('./images/imgScreen3_2.png'),
  REMYXO: require('./images/remyXO.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
