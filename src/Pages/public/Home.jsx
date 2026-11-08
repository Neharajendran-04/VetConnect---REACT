import Hero from '../../Components/Hero';
import About from '../../Components/About'
import HowVetcareWorks from '../../Components/HowVetcareWorks';
import Services from '../../Components/Services'
import Doctors from '../../Components/Doctors';
import Testimonials from '../../Components/Testimonials';
import Contact from '../../Components/Contact';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowVetcareWorks />
      <Services />
      <Doctors />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
