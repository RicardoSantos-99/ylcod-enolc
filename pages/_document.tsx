import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
