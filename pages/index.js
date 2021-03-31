import Head from 'next/head';
import Footer from '../components/footer/index';
// import VinniesProjectPanel from '../components/projects'
import MainFeaturePost from '../components/hero';


export default function Home() {



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' /> 
     </Head>

      
      <MainFeaturePost />
      
      {/* <VinniesProjectPanel /> */}
      <Footer />
    </div>
  );
}
