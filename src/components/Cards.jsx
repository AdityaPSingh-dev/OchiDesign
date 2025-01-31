const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh] ">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68]">
            &copy;2019-{new Date().getFullYear()}
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute left-5 bottom-10 px-5 py-1 border-2 rounded-full text-white border-white">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute left-5 bottom-10 px-2 py-1 border-2 rounded-full text-white border-white">
            BUISNESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
