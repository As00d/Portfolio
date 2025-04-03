import { FaDownload } from "react-icons/fa";
function Introduction() {
  return (
    <main className="bg-[#000616] w-full flex justify-center text-white font-sans p-4">
      <div className="container flex max-w-6xl bg-[linear-gradient(270deg,_#0000_0%,_#000000e6_30%,_#000000e6_70%,_#0000_100%)] flex-col md:flex-row py-4 md:p-0">
        <div className="content  flex flex-col justify-around min-h-80 ">
          <div>
            <h1 className="text-4xl font-bold">
              Hi <span className="animate-move-left-right absolute">👋</span>
            </h1>
            <h1 className="text-4xl font-bold">I am Ankita Sood</h1>
          </div>
          <div>
            <h2 className="text-xl  text-[#ebebf0]">
              Application engineer at Amazon.
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
        <div className="image">
          <img
            src="public/homepage--header.jpg"
            alt="background-img"
            className="bg-[linear-gradient(180deg,_#0000_0%,_#000000b3_30%)]"
          />
        </div>
      </div>
    </main>
  );
}
export default Introduction;
