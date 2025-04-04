import { Link } from "react-router-dom";
const ProjectItem = ({ item }) => {
  const { image, title, description, githubLink } = item;
  return (
    <div className="border rounded-xl w-64 flex flex-col items-center shadow-xl">
      <img
        src={image}
        alt="projectImage"
        className="rounded-t-xl h-32 w-full"
      />
      <div className="p-6 flex flex-col h-40">
        <Link
          className="text-[#006CE0]  underline underline-offset-4 font-bold text-base my-2"
          to={githubLink}
        >
          {title}
        </Link>
        <h3 className="text-sm">{description}</h3>
      </div>
    </div>
  );
};

export default ProjectItem;
