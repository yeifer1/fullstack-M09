import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"
import Marquee from "../MarqueeText/Marquee"
import Footer from "../Footer/Footer"
import MoviesDetails from '../pages/MoviesDetails'

const Home = () => {
  return (
    <div className="container-home">
        <Navbar/>
        <Banner/>
        <Marquee/>
        <MoviesDetails/>
        <Footer/>
        
    </div>
  )
}

export default Home