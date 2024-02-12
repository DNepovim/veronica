"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, NavItem } from "./Menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Video } from "./Video";
import { P } from "./Typography";

export const Layout: React.FC<{
  children?: React.ReactNode;
  navigation?: NavItem[];
}> = ({ children, navigation }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isBlured, setIsBlured] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const toggleMenu = (isOpened: boolean) => {
    setIsMenuOpened(isOpened);
    if (isOpened) {
      videoRef.current?.pause();
      setIsBlured(true);
    } else {
      videoRef.current?.play();
      setIsBlured(false);
    }
  };

  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome && isMenuOpened && overlayRef.current) {
      overlayRef.current.addEventListener(
        "click",
        () => {
          toggleMenu(false);
        },
        { once: true },
      );
    }
  }, [isHome, isMenuOpened]);

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen w-screen transition-all ${isMenuOpened || !isHome || isBlured ? "blur-lg" : ""}`}
      >
        <Video ref={videoRef} autoplay={isHome} />
      </div>
      <div className="relative flex min-h-screen w-screen flex-col p-6">
        <header className="flex-start flex items-start justify-between">
          {isMenuOpened || !isHome ? (
            navigation && <Menu items={navigation} />
          ) : (
            <h1 className="inline-block text-[4.4vw] font-bold uppercase leading-[1.8em] lg:text-[2rem]">
              Skautský lesní kurz <br />
              <strong className="text-[9.5vw] lg:text-[4.35rem]">Veronica</strong>
            </h1>
          )}
          <Link
            href="/"
            onClick={() => {
              router.push("/");
              toggleMenu(false);
            }}
          >
            <Logo hoover={isMenuOpened || !isHome} className={`w-[16vw] lg:w-32 ${isMenuOpened ? "cursor-pointer" : ""}`} />
          </Link>
        </header>
        {isHome && (
          <div className="flex flex-auto items-end justify-between" ref={overlayRef}>
            {isMenuOpened ? (
              <h1 className="-mb-9 flex-[100%] cursor-pointer text-center text-[12vw] font-bold uppercase hover:text-white">
                Veronica
              </h1>
            ) : (
              <Button
                onClick={() => toggleMenu(true)}
                onMouseEnter={() => {
                  setIsBlured(true);
                  videoRef.current?.pause();
                }}
                onMouseLeave={() => {
                  setIsBlured(false);
                  videoRef.current?.play();
                }}
              >
                Menu
              </Button>
            )}
          </div>
        )}
        {!isHome && (
          <>
            <main className="relative my-16 max-w-2xl">
              <P>A tak jsem šel 3. - 4.5. někam a sem.</P>
              {children}
            </main>
            <Button href="#top" className="self-start">
              zpět nahoru
            </Button>
            <Link
              className="m-0 text-center text-[12vw] font-bold uppercase hover:text-white"
              href="/"
              onClick={() => {
                router.push("/");
                toggleMenu(false);
              }}
            >
              Veronica
            </Link>
          </>
        )}
      </div>
    </>
  );
};
