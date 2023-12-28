import { useState, useEffect, useRef } from 'react'
import { annotate, annotationGroup } from 'rough-notation'

import Logo from './utils/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

export default function HeroSection() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem('theme') || 'light'
    return theme
  })
  const titleRef = useRef([])

  function handleThemeChange() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    annotationGroup(
      titleRef.current.map(el =>
        annotate(el, { type: 'underline', padding: [-8, 5] }),
      ),
    ).show()
  }, [])

  return (
    <header className="py-12 sm:pt-40 sm:pb-24">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Logo />
          <button className="w-12 h-12" onClick={handleThemeChange}>
            <FontAwesomeIcon
              size="xl"
              icon={theme === 'light' ? faMoon : faSun}
            />
          </button>
        </nav>
        <h1 className="text-primary mt-12 md:mt-16 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter  md:leading-[1.1]">
          Hey there, my name's{' '}
          <span ref={el => titleRef.current.push(el)}>Ahmed</span>
          <br /> and I'm a{' '}
          <span ref={el => titleRef.current.push(el)}>Frontend Developer</span>,
          <br /> I speak{' '}
          <span ref={el => titleRef.current.push(el)}>
            JavaScript and React
          </span>
          .
        </h1>
        <p className="mt-8 sm:mt-10 text-slate-600 dark:text-slate-400">
          I specialize in crafting seamless user experiences through the mastery
          of JavaScript and React. With a keen eye for design, I transform ideas
          into interactive and visually appealing web applications. My
          commitment to clean, efficient code ensures that the digital
          landscapes I create are not only aesthetically pleasing but also
          perform at their best. Let's collaborate to bring your vision to life
          and elevate the user journey together.
        </p>
        <a className="button mt-10 flex items-center" href="#contact">
          <span>Contact</span>
          <FontAwesomeIcon className="ml-3" size="sm" icon={faArrowRight} />
        </a>
      </div>
    </header>
  )
}
