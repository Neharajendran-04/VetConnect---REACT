import Hero from '../../Components/Hero';
import About from '../../Components/About'
import HowVetcareWorks from '../../Components/HowVetcareWorks';
import Services from '../../Components/Services'
import Doctors from '../../Components/Doctors';
import Testimonials from '../../Components/Testimonials';
import Contact from '../../Components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowVetcareWorks />
      <Services />
      <Doctors />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
