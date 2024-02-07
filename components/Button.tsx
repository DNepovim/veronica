import React from "react";

export const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; ghost?: boolean }> = ({
  children,
  onClick,
  ghost,
}) => {
  const className = `font-bold rounded-def border-4 border-black  px-4 pt-1 text-xl uppercase  ${
    ghost
      ? "backdrop-blur hover:bg-black hover:text-white"
      : "bg-black text-white hover:bg-transparent hover:text-black hover:backdrop-blur"
  }`;
  return onClick ? (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  ) : (
    <div className={`${className} cursor-pointer`}>{children}</div>
  );
};
