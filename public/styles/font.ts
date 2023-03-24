import { createGlobalStyle } from 'styled-components';
import FONT_BLACK from '../assets/font/NotoSansKR-Black';
import FONT_BOLD from '../assets/font/NotoSansKR-Bold';
import FONT_LIGHT from '../assets/font/NotoSansKR-Light';
import FONT_REGULAR from '../assets/font/NotoSansKR-Regular';
import FONT_MEDIUM from '../assets/font/NotoSansKR-Medium';
import FONT_THIN from '../assets/font/NotoSansKR-Thin';

export default createGlobalStyle`
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${FONT_BLACK}) format('woff');
        font-weight: lighter;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${FONT_BOLD}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${FONT_LIGHT}) format('woff');
        font-weight: bold;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${FONT_REGULAR}) format('woff');
        font-weight: bold;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${FONT_MEDIUM}) format('woff');
        font-weight: bold;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${FONT_THIN}) format('woff');
        font-weight: bold;
    }
`
