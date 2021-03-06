import { ProjectCategory } from './ProjectCategory';

import { PROJECTS } from '../projects.data';

export const Projects = () => {
  return (
    <section className="container">
      <div className="px-6">
        <div className="pt-28 pb-14">
          <div>
            <h2 className="text-2xl font-bold">•••Projects</h2>
            {PROJECTS.map(({ entities, category }) => (
              <ProjectCategory
                key={category}
                category={category}
                projects={entities}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
