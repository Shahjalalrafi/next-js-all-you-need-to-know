import Footer from '../Src/Layout/Footer'
import Header from '../Src/Layout/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if(Component.getLayOut) {
    return Component.getLayOut(<Component {...pageProps} />)
  }
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
