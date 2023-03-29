import { createGlobalStyle } from 'styled-components';

const GlobalFont =  createGlobalStyle`
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

export default GlobalFont;
