import FaqAccordian from '../components/FAQ/FaqAccordian.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <FaqAccordian />
        <Footer />
    </>
  )
}

export default LandingPage