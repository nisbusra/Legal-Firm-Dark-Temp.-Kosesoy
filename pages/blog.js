import Head from 'next/head';

import Layout from '@/components/layout';
import BlogPage from '@/components/pages/blog';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Kösesoy Hukuk ve Danışmanlık | BLOG</title>
        <meta name="description" content="Kösesoy Hukuk ve Danışmanlık" />
      </Head>

      <Layout>
        <BlogPage />
      </Layout>
    </div>
  );
}
