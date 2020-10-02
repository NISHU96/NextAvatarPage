// pages/_app.js
import "react-multi-carousel/lib/styles.css";

import "../globals.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
