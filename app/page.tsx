import Image from "next/image";
import Logo from "../images/logo.svg";
import BgImage from "../images/bg.webp";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-screen">
        <Image
          src={BgImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <main className="relative flex min-h-screen w-screen flex-col justify-between p-10">
        <header className="flex-start flex justify-between">
          <h1 className="inline-block text-[2rem] font-bold uppercase">
            Skautský lesní kurz <div className="text-[4rem]">Veronica</div>
          </h1>
          <Image src={Logo} alt="logo" width="200" height="200" />
        </header>
        <div className="flex justify-between">
          <button className="rounded-def bold bg-black px-4 pt-1 text-xl uppercase text-white">
            Menu
          </button>
          <div className="rounded-def bold min-w-[40vw] bg-black px-4 pt-1 text-center text-xl text-white">
            seberozvoj
          </div>
        </div>
      </main>
    </>
  );
}
