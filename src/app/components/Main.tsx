"use client";
import { MainCarousel } from "./utils/MainCarousel";

function Main() {
  return (
    <div className="flex flex-col  w-[100vw] h-[98vh]   mx-auto">
      <div className="flex justify-between items-center font-bold uppercase text-white h-auto">
        <h2 className="text-4xl tracking-widest  transition-all duration-100 py-6 px-0  select-none hover:bg-red-900 cursor-pointer px-4">
          Movie Bucket List
        </h2>
        <nav className="flex flex-row items-center">
          <a
            href="#about"
            className="  inline-block py-6 px-16 text-1xl hover:bg-red-900   transition-all duration-100"
          >
            Signup
          </a>
          <a
            href="/signup"
            className=" bg-gray-800 inline-block py-6 px-16 text-1xl hover:bg-red-900 transition-all duration-100"
          >
            Login
          </a>
        </nav>
      </div>
      <div className="flex flex-col h-full opacity-90 justify-center items-start align-middle select-none">
        {/* <MainCarousel /> */}

        {/* <div className="w-96 h-96  bg-black rounded-full overflow-hidden flex flex-col justify-center items-center align-middle p-4">
          <p className="text-white">bucket</p>
        </div> */}
        <h3 className="flex flex-col justify-center items-center align-middle w-[60rem] font-bold text-8xl tracking-widest px-4">
          Movie Bucket List
        </h3>
        <div className="flex flex-col justify-center items-end align-bottom  w-[70rem] font-bold ">
          <p className="leading-[30px] text-lg tracking-wide text-end">
            Create your own personal movie collection with{" "}
            <i className=" underline">Movie Bucket List</i>.
          </p>

          <p className=" leading-[30px]  text-lg tracking-wide">
            <i className="underline">Movie Bucket List</i> gives you movie
            sagestions based on previous selections, finding movies you might
            enjoy.
          </p>

          <p className="leading-[30px] text-lg tracking-wide">
            With the ability to view any movie in realtime. You can filter and
            select from any filter category.
          </p>

          <p className=" leading-[30px] text-lg tracking-wide">
            From critically acclaimed, new relics or genres specific, you can
            find and build your movie list here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
