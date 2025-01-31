import { PiInstagramLogoThin } from "react-icons/pi";
import { PiBehanceLogoThin } from "react-icons/pi";
import { PiFacebookLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.15" //shoul be negative
      className="w-full h-fit bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-900   "
    >
      <h1 className="text-[3.5vw]  font-['Neue_Montreal'] font-light text-justify pt-24 pl-16 leading-[3.5vw] tracking-tight pr-72  ">
        <span>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
        </span>
        <span className="underline ">
          raise funds, sell <br />
          prod­ucts, ex­plain com­plex ideas,
        </span>
        <span> and </span>
        <span className="underline ">
          {" "}
          hire great peo-
          <br />
          ­ple.
        </span>
      </h1>
      <div className="flex items-center pt-20">
        <hr className="flex-grow  border-zinc-500 border-t-1 border-opacity-50"></hr>
      </div>
      <div className="pt-3 flex flex-row items-center gap-10 font-['Neue_Montreal'] leading-[1.5vw] tracking-tight text-md mb-28">
        <p className="pl-14 ">What you can expect:</p>
        <p className="flex-1 ml-[30vw] mr-14">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it’s live or digital, delivered for one
          or a hundred people.
          <br />
          <br />
          <br /> We believe the mix of strategy and design (with a bit of
          coffee) is what makes your message clear, convincing, and captivating.
        </p>
        <p
          className="pr-64 pt-32 pl-40
        "
        >
          S:
          <PiInstagramLogoThin className="text-3xl font-bold" />
          <PiBehanceLogoThin className="text-3xl font-bold" />
          <PiFacebookLogoThin className="text-3xl font-bold" />
          <PiLinkedinLogoThin className="text-3xl font-bold" />
        </p>
      </div>
      <div className="w-full flex gap-5 border-t-[1px]  border-zinc-500  border-opacity-50">
        <div className="w-1/2 pl-16 mt-4 ">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="flex gap-10 items-center  px-4 py-4 bg-zinc-900 mt-10 rounded-full text-white">
            READ MORE
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] mt-3 mr-16 mb-10"></div>
      </div>
    </div>
  );
};

export default About;
