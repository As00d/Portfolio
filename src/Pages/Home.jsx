import Introduction from "../Component/Introduction/Introduction";
import Navbar from "../Component/Navbar/Navbar";
import ProjectGrid from "../Component/ProjectGrid/ProjectGrid";

function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <ProjectGrid />
    </div>
  );
}

export default Home;
