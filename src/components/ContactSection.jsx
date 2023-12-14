export default function ContactSection() {
  return (
    <section className="py-28">
      <div className="container">
        <h3 className="text-3xl sm:text-4xl font-medium">Contact me</h3>
        <p className="mt-10 text-slate-700">
          Please reach out over email{' '}
          <a href="mailto:elaguabahmed97@gmail.com">elaguabahmed97@gmail.com</a>{' '}
          or tweet{' '}
          <a
            href="http://www.twitter.com/AhmedElaguab"
            target="_blank"
            rel="noopener noreferrer"
          >
            @AhmedElaguab
          </a>{' '}
          if you're interested in knowing more about me or just have a good
          joke.
        </p>
        <p className="text-slate-700 mt-4">Find me on:</p>
      </div>
    </section>
  )
}
