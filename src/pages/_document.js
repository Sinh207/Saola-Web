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
          <script type="text/javascript" id="hs-script-loader" async defer src="https://js.hs-scripts.com/44515959.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
