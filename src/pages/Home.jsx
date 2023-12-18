import Banner from '../components/Banner/Banner'
import Marquee from '../components/MarqueeText/Marquee'
import Footer from '../components/Footer/Footer'
import MoviesDetails from '../pages/MoviesDetails'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='container-home'>
      <Navbar />
      <Banner />
      <Marquee />
      <MoviesDetails />
      <Footer />

    </div>
  )
}

export default Home
