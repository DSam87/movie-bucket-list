import Image from "next/image";
import Main from "./components/Main";
// flex flex-row text-white justify-between items-center text-center h-12 mx-auto uppercase font-bold
export default function Home() {
  return (
    <div className=" bg-gray-900 h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth relative text-white">
      <Main></Main>

      {/* <section id="about" className="snap-center h-screen">
        <h1>About</h1>
      </section> */}
    </div>
  );
}
