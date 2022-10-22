import '../styles/globals.scss'
import type { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import nextI18NextConfig from "../i18n/next-i18next.config.js"

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent =Component as any
  return (
    <AnyComponent {...pageProps} />
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
