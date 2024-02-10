"use client";
import { useRef, useState } from "react";
import { Menu, NavItem } from "./Menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useOnClickOutside from "use-onclickoutside";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Video } from "./Video";

export const Layout: React.FC<{
  children?: React.ReactNode;
  navigation?: NavItem[];
}> = ({ children, navigation }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const menuRef = useRef(null);

  const toggleMenu = (isOpened: boolean) => {
    setIsMenuOpened(isOpened);
    if (isOpened) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  };

  useOnClickOutside(menuRef, () => toggleMenu(false));

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div className={`fixed left-0 top-0 h-screen w-screen ${isMenuOpened || !isHome ? "blur-lg" : ""}`}>
        <Video ref={videoRef} autoplay={isHome} />
      </div>
      <div className="relative flex min-h-screen w-screen flex-col justify-between p-6">
        <header className="flex-start mb-8 flex justify-between">
          {isMenuOpened || !isHome ? (
            navigation && <Menu items={navigation} ref={menuRef} />
          ) : (
            <h1 className="inline-block text-[4.4vw] font-bold uppercase leading-[1.8em] lg:text-[2rem]">
              Skautský lesní kurz <br />
              <strong className="text-[9.5vw] lg:text-[4.35rem]">Veronica</strong>
            </h1>
          )}
          <Link href="/">
            <Logo hoover={isMenuOpened || !isHome} className="w-[16vw] lg:w-32" />
          </Link>
        </header>
        {isHome && (
          <div className="flex justify-between">
            {isMenuOpened ? (
              <h1 className="-mb-9 flex-[100%] text-center text-[12vw] font-bold uppercase">Veronica</h1>
            ) : (
              <Button onClick={() => toggleMenu(true)}>Menu</Button>
            )}
          </div>
        )}
        {!isHome && (
          <>
            <main className="relative mb-16 max-w-2xl">{children}</main>
            <Link href="#top" className="bold self-start rounded-def bg-black px-6 pt-1 text-xl text-white sm:text-2xl">
              zpět nahoru
            </Link>
            <p className="m-0 text-[12vw] font-bold uppercase">Veronica</p>
          </>
        )}
      </div>
    </>
  );
};
