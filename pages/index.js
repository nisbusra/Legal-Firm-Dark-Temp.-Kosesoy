import Head from 'next/head';

import Layout from '@/components/layout';
import HomePage from '@/components/pages/home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kösesoy Hukuk ve Danışmanlık | HOME</title>
        <meta name="description" content="Kösesoy Hukuk ve Danışmanlık" />
      </Head>

      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
