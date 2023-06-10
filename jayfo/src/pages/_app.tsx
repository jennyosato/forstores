import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '../store'
// import { Provider } from 'react-redux'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      {/* <Provider store={store}> */}
    {Component.getLayout ? (
      Component.getLayout(<Component {...pageProps} />)
    ) : (
      <Component {...pageProps} />
    )}
    {/* </Provider> */}
  </main>
  )
 
}
