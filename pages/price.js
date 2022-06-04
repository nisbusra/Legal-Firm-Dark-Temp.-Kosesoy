import Head from 'next/head';

import Layout from '@/components/layout';
import PricePage from '@/components/pages/price';

export default function Price() {
  return (
    <div>
      <Head>
        <title>Kösesoy Hukuk ve Danışmanlık | PRICE</title>
        <meta name="description" content="Kösesoy Hukuk ve Danışmanlık" />
      </Head>

      <Layout>
        <PricePage />
      </Layout>
    </div>
  );
  s;
}
