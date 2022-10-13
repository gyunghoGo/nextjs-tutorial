import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// 서버에서만 랜더링되고,
// 이벤트 랜들러가 작동하지 않고, css도 사용하지 않는다.
