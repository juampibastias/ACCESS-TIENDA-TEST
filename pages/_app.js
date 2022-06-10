import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />

    </DataProvider>
  )
}

export default MyApp
