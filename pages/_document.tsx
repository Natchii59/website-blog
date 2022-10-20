import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap'
            rel='stylesheet'
          />

          <Script id='theme' strategy='beforeInteractive'>{`
(() => {
  const rootClass = document.documentElement.classList

  const theme = localStorage.getItem('theme');
  if (theme) {
    if (theme === 'dark') {
      return rootClass.add('dark')
    } else if (theme === 'light') {
      return rootClass.remove('dark')
    }
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return rootClass.add('dark')
  }
    
  rootClass.remove('dark')
})()
`}</Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
