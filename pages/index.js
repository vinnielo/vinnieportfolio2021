import Head from 'next/head';
// import Drift from "react-driftjs";
// import Footer from '../components/footer/index'
// import VinniesProjectPanel from '../components/projects'
import MainFeaturePost from '../components/hero';

export default function Home() {



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
       
       
     </Head>
{/* 
     <script>var continuallySettings = { appID: "835r92z93yj9" };</script>
<script src="https://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js"></script> */}
      
      <MainFeaturePost />
       {/* <Drift appId='z89bcubzwtty' /> */}
      
      {/* <VinniesProjectPanel /> */}
      {/* <Footer /> */}
    </div>
  );
}
