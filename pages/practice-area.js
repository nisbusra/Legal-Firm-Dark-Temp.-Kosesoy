import Head from 'next/head';

import Layout from '@/components/layout';
import PracticePage from '@/components/pages/practice';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kösesoy Hukuk ve Danışmanlık | PRACTICE</title>
        <meta name="description" content="Kösesoy Hukuk ve Danışmanlık" />
      </Head>

      <Layout>
        <PracticePage />
      </Layout>
    </div>
  );
}
