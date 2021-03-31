import Drift from "react-driftjs";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  <Drift appId='z89bcubzwtty' />
  </>
  )
}

export default MyApp
