import { CgArrowTopRight } from "react-icons/cg";
import { LuGithub } from "react-icons/lu";
import { PiPlayBold } from "react-icons/pi";

const ProjectCard = ({project}) => {
  const modalId = `modal-${project.id}`;

  const handleModal = () => {
    document.getElementById(modalId).showModal();
  };

  const closeModal = () => {
    document.getElementById(modalId).close();
  };

  return (
    <div className="p-5 border rounded-xl border-skyBlue/30 bg-gradient-to-br from-black to-blue-950 flex flex-col gap-6">
      <div
        className="bg-cover bg-top h-60 lg:h-72 w-full rounded-xl border-2 border-darkgrey"
        style={{backgroundImage: `url(${project.image})`}}></div>

      <div>
        <p className="text-sm font-medium text-skyBlue -mt-3">#{project.category}</p>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{project.title}</h1>

          <button onClick={handleModal}>
            <CgArrowTopRight className="bg-skyBlue text-black text-2xl hover:bg-transparent hover:text-skyBlue hover:border-2 hover:border-skyBlue cursor-pointer transition-all duration-100" />
          </button>
        </div>
        <p className="capitalize text-justify text-sm font-medium mt-1 text-darkgrey">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4 text-darkgrey border-darkgrey">
          {project.toolsIcons.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-3 py-0.5 border rounded-4xl">
              <img
                src={tool}
                alt={project.toolsNames[index]}
                className="w-4"
              />
              <p className="text-xs">{project.toolsNames[index]}</p>
            </div>
          ))}
        </div>
      </div>

      <dialog
        id={modalId}
        className="modal">
        <div className="modal-box p-8">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <h2 className="font-bold text-md pt-3">Website Features:</h2>
          <ul className="text-justify list-disc ml-6 space-y-2">
            {project.features.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <h2 className="font-medium text-md pt-3">Duration: {project.duration}</h2>
          <div className="pt-6 flex gap-4">
            <a
              href={project.codeLink}
              target="_blank"
              className="bg-skyBlue text-black font-semibold h-10 w-30 rounded-lg flex items-center justify-center gap-2 hover:bg-transparent hover:text-skyBlue hover:border-2 hover:border-skyBlue cursor-pointer transition-all duration-100">
              Github <LuGithub className="text-xl" />
            </a>

            <a
              href={project.liveLink}
              className="bg-skyBlue text-black font-semibold h-10 w-30 rounded-lg flex items-center justify-center gap-2 hover:bg-transparent hover:text-skyBlue hover:border-2 hover:border-skyBlue cursor-pointer transition-all duration-100">
              Live <PiPlayBold className="text-xl" />
            </a>
          </div>
        </div>

        <form
          method="dialog"
          className="modal-backdrop"
          onClick={closeModal}>
          <button
            type="button"
            className="btn">
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default ProjectCard;
