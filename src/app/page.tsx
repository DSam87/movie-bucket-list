import Image from "next/image";
import Main from "./components/Main";
import { db } from "@/lib/db";

export default async function Home() {
  // await db.set("setKey", "setKeyValue");

  return (
    <div className=" bg-gray-900 h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth relative text-white">
      <Main></Main>

      {/* <section id="about" className="snap-center h-screen">
        <h1>About</h1>
      </section> */}
    </div>
  );
}
