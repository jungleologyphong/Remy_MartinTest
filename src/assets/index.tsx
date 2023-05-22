const SOURCE = {
  LOGO: require('./logo.png'),
  LOGOAPP: require('./images/logoApp.png'),
  BTNPLAY: require('./images/btnPlay.png'),
  BTNNEXT: require('./images/btnNext.png'),
  BACKGROUNDSCREEN1: require('./images/backgroundScreen1.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
