import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: "NotoSansKR-Medium";
		src: local("../../public/assets/font/NotoSansKR-Medium.otf"), url('/public/assets/font/NotoSansKR-Medium.otf') format('otf');
	}
	@font-face {
			font-family: "NotoSansKR-Black";
			src: local("../../public/assets/font/NotoSansKR-Black.otf"), url('/public/assets/font/NotoSansKR-Black.otf') format('otf');
	}
	@font-face {
			font-family: "NotoSansKR-Bold";
			src: local("../../public/assets/font/NotoSansKR-Bold.otf"), url('/public/assets/font/NotoSansKR-Bold.otf') format('otf');
	}
	@font-face {
			font-family: "NotoSansKR-Light";
			src: local("../../public/assets/font/NotoSansKR-Light.otf"), url('/public/assets/font/NotoSansKR-Light.otf') format('otf');
	}
	@font-face {
			font-family: "NotoSansKR-Regular";
			src: local("../../public/assets/font/NotoSansKR-Regular.otf"), url('/public/assets/font/NotoSansKR-Regular.otf') format('otf');
	}
	@font-face {
			font-family: "NotoSansKR-Medium";
			font-weight: 400;
			font-style: normal;
			src: local("../../public/assets/font/NotoSansKR-Medium.otf"), url('/public/assets/font/NotoSansKR-Medium.otf') format('otf');
	}
	@font-face {
			font-family: "NotoSansKR-Thin";
			src: local("../../public/assets/font/NotoSansKR-Thin.otf"), url('/public/assets/font/NotoSansKR-Thin.otf') format('otf');
	}
`
