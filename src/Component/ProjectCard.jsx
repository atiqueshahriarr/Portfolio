import { FiArrowUpRight } from "react-icons/fi";
import { IoCodeDownload } from "react-icons/io5";

const ProjectCard = ({project}) => {
  const modalId = `modal-${project.id}`;

  const handleModal = () => {
    document.getElementById(modalId).showModal();
  };

  return (
    <div className="relative bg-bgdark h-64 flex items-center justify-center group">
      <dialog
        id={modalId}
        className="modal">
        <div className="modal-box w-72 space-y-2">
          <h1 className="text-lg font-bold">{project.title}</h1>
          <p className="text-xs font-semibold capitalize text-justify">{project.description}</p>

          {project.tools && (
            <div>
              <h3 className="font-bold text-xs text-borderGray">Used Technologies:</h3>
              <div className="flex gap-2 mt-1">
                {project.tools.map((tool, index) => (
                  <img
                    key={index}
                    src={tool}
                    alt={tool}
                    className="w-7 p-1 rounded-4xl bg-borderGray"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white h-8 w-28 text-black flex items-center justify-center gap-2 text-sm font-semibold rounded-xl cursor-pointer">
              Preview <IoCodeDownload className="text-xl" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white h-8 w-28 text-black flex items-center justify-center gap-2 text-sm font-semibold rounded-xl cursor-pointer">
              GitHub <IoCodeDownload className="text-xl" />
            </a>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div
        className="h-full w-full bg-cover bg-top relative"
        style={{backgroundImage: `url(${project.image})`}}>
        <div className="absolute inset-0 group-hover:bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-2 w-[calc(100%-18px)] opacity-0 group-hover:opacity-100 bg-skyBlue transition-all duration-600 flex justify-between items-center px-4 py-2">
        <div>
          <h4 className="text-black text-lg font-bold capitalize">{project.title}</h4>
          <p className="text-sm">Click to see more details</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={handleModal}>
          <FiArrowUpRight className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
