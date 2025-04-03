import { Link } from "react-router-dom";
const ProjectItem = ({ item }) => {
  const { image, title, description, features } = item;
  return (
    <div className="border rounded-xl w-64 flex flex-col items-center shadow-xl">
      <img src={image} alt="projectImage" className="rounded-xl" />
      <div className="p-4 flex flex-col">
        <Link
          className="text-[#006CE0]  underline underline-offset-4 font-bold text-base my-2"
          href=""
        >
          {title}
        </Link>
        <h3>{description}</h3>
        <ul>{features}</ul>
      </div>
    </div>
  );
};

export default ProjectItem;
