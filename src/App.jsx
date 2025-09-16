import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all'
import React from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Art from './components/Art';
import Contact from './components/Contact';

function App() {
  gsap.registerPlugin(ScrollTrigger,SplitText);

  return (
    <main>
      {/* Modi Garments */}
      <Hero/>
      <About/>
      {/* <Art/> */}
      <Contact/>
    </main>
  )
}

export default App
