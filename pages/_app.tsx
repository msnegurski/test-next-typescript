import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SaasProvider } from '@saas-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider>
        <Component {...pageProps} />
    </SaasProvider>
  )
}

export default MyApp
