import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider>
          <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        background-color: #f0f5ff;
      }
    `}</style>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
export default MyApp
