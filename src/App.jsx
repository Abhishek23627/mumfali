import React from 'react'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Story           from './components/Story'
import Product         from './components/Product'
import FormatComparison from './components/FormatComparison'
import Moments         from './components/Moments'
import Process         from './components/Process'
import Roadmap         from './components/Roadmap'
import LaunchCTA       from './components/LaunchCTA'
import Partnership     from './components/Partnership'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1 â€” Hero */}
        <Hero />

        {/* 2 â€” Story */}
        <Story />

        {/* 3 â€” Product */}
        <Product />

        {/* 4 â€” Format Comparison */}
        <FormatComparison />

        {/* 5 â€” Everyday Moments */}
        <Moments />

        {/* 6 â€” Process */}
        <Process />

        {/* 7 â€” Roadmap */}
        <Roadmap />

        {/* 8 â€” Early Interest CTA */}
        <LaunchCTA />

        {/* 9 â€” Partnership / Investment */}
        <Partnership />

        {/* 10 â€” Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
