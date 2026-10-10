import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver to a container ref and adds
 * the "visible" class to any .reveal child when it enters the viewport.
 */
export function useScrollReveal(threshold = 0.12) {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = containerRef.current
      ? containerRef.current.querySelectorAll('.reveal')
      : []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}
