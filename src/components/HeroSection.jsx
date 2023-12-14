import Logo from './utils/Logo'

export default function HeroSection() {
  return (
    <header className="py-12 sm:pt-40 sm:pb-24">
      <div className="container">
        <nav>
          <Logo />
        </nav>
        <h1 className="text-3xl sm:text-4xl mt-12 sm:mt-20 font-medium sm:leading-snug">
          Hey there, my name's ahmed, and I'm a Frontend Developer, I speak
          JavaScript and React.
        </h1>
        <p className="mt-8 sm:mt-10 text-slate-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          eius numquam, assumenda temporibus impedit iste maxime ducimus fugiat
          perferendis, soluta adipisci doloremque quasi tempore ipsam deserunt
          dolorem, inventore recusandae possimus.
        </p>
        <a className="button mt-10" href="#">
          Contact
        </a>
      </div>
    </header>
  )
}
