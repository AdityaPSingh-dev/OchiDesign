import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
const Landing = () => {
  const headings = ["WE CREATE", "EYE OPENING", "PRESENTATIONS"];

  return (
    <div
      data-scroll
      data-scroll-position="top"
      data-scroll-speed=".3"
      className="w-full h-screen bg-zinc-900 border-t-2 "
    >
      <div className="textstructure mt-32 px-20 ">
        {headings.map((heading, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] w-[9vw] h-[5vw] rounded-md relative bg-[url('https://images.unsplash.com/photo-1617339860632-f53c5b5dce4d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center "
                ></motion.div>
              )}
              <h1 className="uppercase text-[7.3vw] leading-[7.7vw] font-['Founders_Grotesk_Condensed'] font-bold">
                {heading}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-zinc-900 border-t-[1px] border-zinc-800 mt-20  flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-lg font-light tracking tight leading none"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-2 ">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light text-md uppercase">
            start the project
          </div>
          <div className="w-12 h-12 border-[2px]  border-zinc-500 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
