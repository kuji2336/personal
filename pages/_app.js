/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script strategy='lazyOnLoad' src='https://www.googletagmanager.com/gtag/js?id=G-ELFRGZHGM4' />
			<Script strategy='lazyOnLoad'>
				{
					` window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			
			  gtag('config', 'G-ELFRGZHGM4')`
				}
			</Script>
			<Component {...pageProps} />;
		</>
	)
}

export default MyApp;
