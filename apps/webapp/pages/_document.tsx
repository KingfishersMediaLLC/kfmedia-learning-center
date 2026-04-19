/* eslint-disable @next/next/no-sync-scripts */
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter';
import { primaryBrandColor } from '@packages/config/colors';
import { Head, Html, Main, NextScript } from 'next/document';

const brandColor = '#903235';

export default function MyDocument(props: any) {
  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags {...props} />
        <meta name='theme-color' content={brandColor} />
        <link rel='icon' href='/favicon.png' />
        <script src='/__ENV.js' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// ref: https://mui.com/material-ui/integrations/nextjs/#pages-router
MyDocument.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
