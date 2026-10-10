import React, { useState, useEffect } from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '#story',      label: 'Our Story' },
  { href: '#product',    label: 'Product'   },
  { href: '#process',    label: 'How It Works' },
  { href: '#future',     label: 'Future'    },
  { href: '#contact',    label: 'Contact'   },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('')

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Section active tracking */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveLink('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setActiveLink(href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus:outline-none"
            aria-label="Go to top"
          >
            <Logo
              variant={scrolled ? 'dark' : 'light'}
              size={scrolled ? 38 : 42}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeLink === link.href
                    ? 'bg-brand-orange text-white'
                    : scrolled
                      ? 'text-brand-charcoal hover:text-brand-orange'
                      : 'text-brand-cream hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Get in Touch
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? 'bg-brand-brown' : 'bg-brand-cream'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? 'bg-brand-brown' : 'bg-brand-cream'
            } ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? 'bg-brand-brown' : 'bg-brand-cream'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden bg-brand-cream border-t border-brand-beige ${
          menuOpen ? 'open' : 'closed'
        }`}
      >
        <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 rounded-xl text-brand-charcoal font-medium hover:bg-brand-beige transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-brand-beige mt-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary w-full justify-center text-sm"
            >
              Get in Touch
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
