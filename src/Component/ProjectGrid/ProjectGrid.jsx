import ProjectItem from "./ProjectItem";
import { projectData } from "../../Constants/ProjectData";
function ProjectGrid() {
  return (
    <div>
      <h2>My recent work</h2>
      <p>
        Here are a few past design projects I've worked on. Want to see more?
        Email me.
      </p>
      <p>
        {projectData.map((item) => {
          return <ProjectItem />;
        })}
      </p>
    </div>
  );
}

export default ProjectGrid;
