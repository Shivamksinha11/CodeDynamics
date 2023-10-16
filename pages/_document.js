import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
          
          {/* font aswm */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
          {/* Google Search Console */}
          <meta name="google-site-verification" content="I3cYkh2FGsEEqZU8JUM9swB4F4IZCbNHEcz93Cn9ey8" />
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-08RD8LT217"></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-08RD8LT217}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-08RD8LT217', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body className='bg-bodydark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument