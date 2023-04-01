import { DefaultTheme } from 'styled-components';
const color = {
    backgroundColor: '#D6ECFA',
    inputBoxColor: '#FBD96D',
    defaultFontColor: '#000000',
    lightFontColor: '#8B8687',
    headerBackgroundColor: '#FFFFFF',
};
const fontSize = {
    defaultSize: '1.6rem',
};

const theme: DefaultTheme = {
    color,
    fontSize,
};

export default theme;
export type Theme = typeof theme;
