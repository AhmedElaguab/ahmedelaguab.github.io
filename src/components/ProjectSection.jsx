import { PROJECTS } from './../projects.data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ProjectSection() {
  return (
    <section>
      <div className="container">
        <h3 className="mt-10 md:mt-12 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tighter  md:leading-[1.1]">
          My Projects
        </h3>
        <div className="mt-10">
          <div className="sm:grid sm:grid-cols-2  sm:gap-3">
            {PROJECTS.map(project => (
              <div
                className="hover:-translate-y-px bg-gray-50 border border-gray-300 hover:border-gray-400/60 rounded-md shadow-sm mb-4 sm:mb-0"
                key={project.name}
              >
                <div className="overflow-hidden">
                  <img
                    className="rounded-md"
                    src={project.screenshot}
                    alt={project.name}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-semibold mt-3">{project.name}</h3>
                  <p className="text-base text-slate-700 leading-6 mt-3 h-[50px]">
                    {project.desc}
                  </p>
                  <div className="mt-3 flex items-center">
                    <a
                      target="_blank"
                      href={project.github}
                      className="button !px-0 !flex-grow text-center !bg-gray-100 hover:!bg-gray-200/60 !border !border-gray-400 hover:!border-gray-500 !text-slate-900 !text-sm font-medium mr-2"
                    >
                      <FontAwesomeIcon
                        className="mr-2"
                        size="lg"
                        icon={faGithub}
                      />
                      Github
                    </a>
                    <a
                      target="_blank"
                      href={project.preview}
                      className="button !px-0 !flex-grow text-center !border !border-slate-950  !text-sm font-medium"
                    >
                      <FontAwesomeIcon
                        className="mr-2"
                        size="sm"
                        icon={faArrowUpRightFromSquare}
                      />
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
