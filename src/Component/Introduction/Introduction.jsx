import { FaDownload } from "react-icons/fa";
function Introduction() {
  return (
    <main className="bg-[#000616] w-full flex justify-center text-white font-sans">
      <div className="container flex max-w-6xl bg-[linear-gradient(270deg,_#0000_0%,_#000000e6_30%,_#000000e6_70%,_#0000_100%)] flex-col md:flex-row">
        <div className="content  flex flex-col justify-around ">
          <div>
            <h1 className="text-4xl font-bold">
              Hi <span className="animate-move-left-right absolute">👋</span>
            </h1>
            <h1 className="text-4xl font-bold">I am Ankita Sood</h1>
          </div>
          <div>
            <h2 className="text-xl  text-[#ebebf0]">
              Currently working as an Application engineer at Amazon.
            </h2>
            <p className="text-[#c6c6cd] text-sm">
              I am actively expanding my expertise in HTML, CSS, JavaScript, and
              React, with the goal of applying my technical background to build
              dynamic, user-friendly web applications.
            </p>
          </div>
          <button className="text-[#42b4ff] border border-[#42b4ff]  border-2 w-36 rounded-xl p-2 flex items-center  justify-around">
            Resume <FaDownload />
          </button>
        </div>
        <div className="image ">
          <img
            src="https://cloudscape.aws.dev/__images/yvlrib0vb3vb/6zNak8CW72qjptSjDSykoI/7e06ffa721719a3236babb352256bb02/homepage--header.jpg"
            alt=""
            className="bg-[linear-gradient(180deg,_#0000_0%,_#000000b3_30%)]"
          />
        </div>
      </div>
    </main>
  );
}
export default Introduction;
