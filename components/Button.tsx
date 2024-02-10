import Link from "next/link";
import React, { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  ghost?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}>;

export const Button: React.FC<ButtonProps> = ({ children, ghost, href, className, onClick, onMouseEnter, onMouseLeave }) => {
  const agregatedClassName = `font-bold rounded-def border-4 border-black  px-4 pt-1 text-xl uppercase ${className} ${
    ghost
      ? "backdrop-blur hover:bg-black hover:text-white"
      : "bg-black text-white hover:bg-transparent hover:text-black hover:backdrop-blur"
  }`;
  return onClick ? (
    <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={agregatedClassName}>
      {children}
    </button>
  ) : href ? (
    <Link href={href} className={`${agregatedClassName} cursor-pointer`}>
      {children}
    </Link>
  ) : (
    <div className={`${agregatedClassName} cursor-pointer`}>{children}</div>
  );
};
