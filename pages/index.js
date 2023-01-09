import Head from 'next/head';
import Brand from '../components/Brand';
import CardEvent from '../components/CardEvent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Stories from '../components/Stories';
import { getData } from '../utils/fetchData';

export default function Home({ dataEvent, dataProfile }) {
  return (
    <>
      <Head>
        <title>Semina || Landing Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header data={dataProfile} />
      <Brand />
      <CardEvent
        data={dataEvent}
        title='Featured Events'
        subTitle='Grow Today'
      />
      <Stories />
      <Statistics />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  if (token) {
    const reqProfile = await getData('api/v1/profile', {}, token);
    const profile = reqProfile.data;

    const reqEvent = await getData('api/v1/events');
    const event = reqEvent.data;

    return {
      props: { dataProfile: profile, dataEvent: event },
    };
  }
  const reqEvent = await getData('api/v1/events');
  const event = reqEvent.data;

  return {
    props: { dataEvent: event },
  };
}
