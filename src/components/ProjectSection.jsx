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
                className="cursor-auto bg-gray-50 dark:bg-slate-800 border border-slate-300 hover:border-slate-400/60 dark:border-slate-800 dark:hover:border-slate-600/60  rounded-md shadow-sm mb-4 sm:mb-0"
                key={project.name}
              >
                <div className="overflow-hidden">
                  <img
                    className="rounded-t-md"
                    src={project.screenshot}
                    alt={project.name}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-semibold mt-3">{project.name}</h3>
                  <p className="text-base text-slate-700 dark:text-slate-400 leading-6 mt-3 h-[50px]">
                    {project.desc}
                  </p>
                  <div className="mt-3 flex items-center">
                    <a
                      target="_blank"
                      href={project.github}
                      className="button !px-0 !flex-grow text-center !bg-slate-100 hover:!bg-gray-200/60 dark:!bg-slate-900 !border !border-gray-400 hover:!border-gray-500 dark:!border-slate-900 hover:dark:!border-slate-950/60 !text-slate-900 dark:!text-slate-200 !text-sm font-medium mr-2"
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
                      className="button !px-0 !flex-grow text-center !border !border-indigo-700 !text-sm font-medium"
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
