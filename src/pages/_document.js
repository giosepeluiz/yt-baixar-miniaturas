import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Baixar Miniaturas do Youtube - Giosepe Luiz</title>
          <meta name="description" content="Baixar Miniaturas do Youtube" />
          <meta property="og:title" content="Baixar Miniaturas do Youtube - Giosepe Luiz" />
          <meta property="og:description" content="Baixar Miniaturas do Youtube" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thumb.arqueirover.de" />
          <meta property="og:image" content="../images/og-social-banner.png" />
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
