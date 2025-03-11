import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features';
import WorkFlow from './components/WorkFlow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <Price />
        <Testimonials />
      </div>
    </>
  );
}

export default App
