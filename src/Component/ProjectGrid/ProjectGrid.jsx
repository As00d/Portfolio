import ProjectItem from "./ProjectItem";
import { projectData } from "../../Constants/ProjectData";

const ProjectGrid = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold my-4">My recent projects</h2>
      <div className="flex flex-wrap max-w-6xl container justify-between">
        {projectData.map((item) => {
          return <ProjectItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;
