"use client";
import { useRef, useState } from "react";
import { Menu, NavItem } from "./Menu";
import Image from "next/image";
import BgImage from "../images/bg.webp";
import Logo from "../images/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useOnClickOutside from "use-onclickoutside";

export const Layout: React.FC<{
  children?: React.ReactNode;
  navigation?: NavItem[];
}> = ({ children, navigation }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsMenuOpened(false));

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen w-screen ${
          isMenuOpened || !isHome ? "opacity-60 blur" : ""
        }`}
      >
        <Image
          src={BgImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex min-h-screen w-screen flex-col justify-between p-10">
        <header className="flex-start mb-8 flex justify-between">
          {isMenuOpened || !isHome ? (
            navigation && <Menu items={navigation} ref={ref} />
          ) : (
            <h1 className="inline-block text-[2rem] font-bold uppercase">
              Skautský lesní kurz <strong className="text-6xl">Veronica</strong>
            </h1>
          )}
          <Link href="/">
            <Image src={Logo} alt="logo" width="200" height="200" />
          </Link>
        </header>
        {isHome && (
          <div className="flex justify-between">
            {isMenuOpened ? (
              <div className="bold cursor-pointer rounded-def bg-black px-4 pt-1 text-xl uppercase text-white">
                X
              </div>
            ) : (
              <button
                onClickCapture={() => setIsMenuOpened(true)}
                className="bold rounded-def bg-black px-4 pt-1 text-xl uppercase text-white"
              >
                Menu
              </button>
            )}
          </div>
        )}
        {!isHome && (
          <>
            <main className="relative mb-16">{children}</main>
            <Link
              href="#top"
              className="bold self-start rounded-def bg-black px-6 pt-1 text-2xl text-white"
            >
              zpět nahoru
            </Link>
            <p className="m-0 text-[12vw] font-bold uppercase">Veronica</p>
          </>
        )}
      </div>
    </>
  );
};
