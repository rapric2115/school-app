/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#000B58',
    tint: tintColorDark,
    icon: '#FFF4B7',
    tabIconDefault: '#FFF4B7',
    tabIconSelected: tintColorDark,
  },
};

export const ComponentBG = {
  light: {
    backgroundColor: tintColorLight,
    text: '#11181C'
  },
  dark: {
    backgroundColor: '#003161',
    text: '#FFF4B7'
  }
}

export const BtnColor = {
  light: {
    backgroundColor: '#006A67',
    text: '#11181C'
  },
  dark: {
    backgroundColor: '#ff6500',
    text: '#FFF4B7',
    FontWeight: 'bold',
    FontSize: 18
  }
}