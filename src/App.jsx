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
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Story */}
        <Story />

        {/* 3 — Product */}
        <Product />

        {/* 4 — Format Comparison */}
        <FormatComparison />

        {/* 5 — Everyday Moments */}
        <Moments />

        {/* 6 — Process */}
        <Process />

        {/* 7 — Roadmap */}
        <Roadmap />

        {/* 8 — Early Interest CTA */}
        <LaunchCTA />

        {/* 9 — Partnership / Investment */}
        <Partnership />

        {/* 10 — Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
