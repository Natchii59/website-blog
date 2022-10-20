import type { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import AppBar from './appbar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Natchi&apos;s Blog</title>
        <meta name='author' content='Nathan Caron' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>

      <AppBar />

      <div className='pt-16'>
        <div className='p-4'>
          <div className='w-full max-w-4xl mx-auto'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout
