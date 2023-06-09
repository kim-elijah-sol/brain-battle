import type { AppContext, AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeType } from '~/states/$theme'
import ThemeProvider from '~/components/ThemeProvider'
import GlobalStyle from '~/components/GlobalStyle'

interface Props {
  theme: ThemeType
}

function MyApp({ Component, pageProps }: AppProps<Props>) {
  const { theme } = pageProps

  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext: AppContext) => {
  const request = appContext.ctx.req as any

  const pageProps: { [key: string]: any } = {}

  const theme = request?.cookies?.theme

  pageProps.theme = theme === 'dark' ? 'dark' : 'light'

  return { pageProps }
}
