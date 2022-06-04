import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Martel:wght@700;900&family=Montserrat:wght@500&family=Open+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link href="/favicon.ico" rel="shortcut icon" />
          <link href="/site.webmanifest" rel="manifest" />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
