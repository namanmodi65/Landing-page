import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all'
import React from 'react'
import Hero from './components/Hero';
import About from './components/About';

function App() {
  gsap.registerPlugin(ScrollTrigger,SplitText);

  return (
    <main>
      {/* Modi Garments */}
      <Hero/>
      <About/>
    </main>
  )
}

export default App
