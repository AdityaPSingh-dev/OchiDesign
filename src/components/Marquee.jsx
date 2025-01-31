import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.05"
      data-scroll-position="bottom"
      className="w-full py-20   bg-[#FFB6A0] rounded-tr-3xl rounded-tl-3xl overflow-hidden "
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.div
          className="flex gap-10"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }} // Move half the total width to ensure smooth looping
          transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
        >
          {/* Duplicate content for a seamless effect */}
          <div className="flex gap-10">
            <h1 className="text-[22vw] leading-none uppercase font-['Founders_Grotesk_Condensed'] font-extrabold -mb-[7vw] pt-10">
              We are ochi
            </h1>
            <h1 className="text-[22vw] leading-none uppercase font-['Founders_Grotesk_Condensed'] font-extrabold -mb-[7vw] pt-10">
              We are ochi
            </h1>
          </div>
          <div className="flex gap-10">
            <h1 className="text-[22vw] leading-none uppercase font-['Founders_Grotesk_Condensed'] font-extrabold -mb-[7vw] pt-10">
              We are ochi
            </h1>
            <h1 className="text-[22vw] leading-none uppercase font-['Founders_Grotesk_Condensed'] font-extrabold -mb-[7vw] pt-10">
              We are ochi
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
