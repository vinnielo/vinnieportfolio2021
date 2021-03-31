// import Drift from "react-driftjs";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  {/* <Drift appId='z89bcubzwtty' /> */}
  <MessengerCustomerChat
    pageId="112037220980342"
    appId="150119663689694"
  />
  </>
  )
}

export default MyApp
