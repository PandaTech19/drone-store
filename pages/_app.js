import Head from "../Html/html"
/******************************************************************/
import Navbar from "../Components/Header/header"
import Footer from "../Components/Footer/footer"
/******************************************************************/
import '../styles/globals.css'
import "../styles/header.css"
import "../styles/footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {


  return (
    <div className="Container">

      <Head />

      <Navbar />

      <Component {...pageProps} />

      <Footer />

    </div>
  )
}