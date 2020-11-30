import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Mapa: {
            screens: {
              TabOneScreenMap: 'one',
            },
          },
          Sobre: {
            screens: {
              TabTwoScreenAbout: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
