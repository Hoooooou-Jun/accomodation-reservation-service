import { createGlobalStyle } from 'styled-components';
import FONT_BLACK from '../../public/assets/font/NotoSansKR-Black.otf';
import FONT_BOLD from '../../public/assets/font/NotoSansKR-Bold.otf';
import FONT_LIGHT from '../../public/assets/font/NotoSansKR-Light.otf';
import FONT_REGULAR from '../../public/assets/font/NotoSansKR-Regular.otf';
import FONT_MEDIUM from '../../public/assets/font/NotoSansKR-Medium.otf';
import FONT_THIN from '../../public/assets/font/NotoSansKR-Thin.otf';

export default createGlobalStyle`
    @font-face {
        font-family: "NotoSansKR-Black";
        src: local("../../public/assets/font/NotoSansKR-Black.otf"), url(${FONT_BLACK}) format('otf');
    }
    @font-face {
        font-family: "NotoSansKR-Bold";
        src: local("../../public/assets/font/NotoSansKR-Bold.otf"), url(${FONT_BOLD}) format('otf');
    }
    @font-face {
        font-family: "NotoSansKR-Light";
        src: local("../../public/assets/font/NotoSansKR-Light.otf"), url(${FONT_LIGHT}) format('otf');
    }
    @font-face {
        font-family: "NotoSansKR-Regular";
        src: local("../../public/assets/font/NotoSansKR-Regular.otf"), url(${FONT_REGULAR}) format('otf');
    }
    @font-face {
        font-family: "NotoSansKR-Medium";
        src: local("../../public/assets/font/NotoSansKR-Medium.otf"), url(${FONT_MEDIUM}) format('otf');
    }
    @font-face {
        font-family: "NotoSansKR-Thin";
        src: local("../../public/assets/font/NotoSansKR-Thin.otf"), url(${FONT_THIN}) format('otf');
    }
`
