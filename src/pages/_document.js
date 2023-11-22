import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { IMAGE_CONST } from '@app/utils/images';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href={IMAGE_CONST.favicon}
            sizes="any"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
