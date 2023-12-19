import Logo from './utils/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HeroSection() {
  return (
    <header className="py-12 sm:pt-40 sm:pb-24">
      <div className="container">
        <nav>
          <Logo />
        </nav>
        <h1 className="mt-12 md:mt-16 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter  md:leading-[1.1]">
          Hey there, my name's ahmed
          <br /> and I'm a Frontend Developer,
          <br /> I speak JavaScript and React.
        </h1>
        <p className="mt-8 sm:mt-10 text-slate-700">
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
