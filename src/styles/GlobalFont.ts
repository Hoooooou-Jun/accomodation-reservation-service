import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`
  button:active {
    box-shadow: inset -.3rem -.1rem 1.4rem  #FBFBFB, inset .3rem .4rem .8rem #BEC5D0;
    cursor: pointer;
		outline: none;
  }
  @font-face {
    font-family: "NotoSansKR-Bold";
    src: url('/fonts/NotoSansKR-Bold.woff') format('woff');
  }
	@font-face {
		font-family: "NotoSansKR-Medium";
		src: url('/fonts/NotoSansKR-Medium.woff') format('woff');
	}
	@font-face {
		font-family: "Hello-Black";
		src: url('/fonts/NotoSansKR-Black.woff') format('woff');
	}
	@font-face {
		font-family: "NotoSansKR-Light";
		src: url('/fonts/NotoSansKR-Light.woff') format('woff');
	}
	@font-face {
		font-family: "NotoSansKR-Regular";
		src: url('/fonts/NotoSansKR-Regular.woff') format('woff');
	}
	@font-face {
		font-family: "NotoSansKR-Thin";
		src: url('/fonts/NotoSansKR-Thin.woff') format('woff');
	}
`;

export default GlobalStyle;
