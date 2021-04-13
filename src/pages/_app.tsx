import React from 'react'
import { AppProps } from 'next/app'
import '~/sass/globals.sass'
import AppLayout  from '../modules/layouts/AppLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
    )
}

export default MyApp
