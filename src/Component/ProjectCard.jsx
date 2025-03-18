import { FiArrowUpRight } from "react-icons/fi";
import { RiSlideshow3Line } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({project}) => {
  const modalId = `modal-${project.id}`;

  const handleModal = () => {
    document.getElementById(modalId).showModal();
  };

  return (
    <div className="p-6 border rounded-xl border-borderGray">
      <div
        className="bg-cover bg-center h-96 w-full rounded-xl"
        style={{backgroundImage: `url(${project.image})`}}>
        {/* Your content here */}
      </div>
      <div className="space-y-2">
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

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="btnProject w-32 h-12 flex items-center justify-center">
            <a
              href=""
              className="z-10 gap-2 flex items-center justify-center"
              target="_blank">
              See Details
              <VscGithub />
            </a>
          </div>
          <div className="btnProject w-32 h-12 flex items-center justify-center">
            <a
              href=""
              className="z-10 gap-2 flex items-center justify-center"
              target="_blank">
              Preview
              <RiSlideshow3Line />
            </a>
          </div>
        </div>
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
