import React, { ComponentProps, PropsWithChildren } from "react";
import Link from "next/link";

export const H1: React.FC<PropsWithChildren<ComponentProps<"h1">>> = (props) => (
  <h1 className="mb-8 text-2xl font-bold" {...props} />
);
export const H2: React.FC<PropsWithChildren<ComponentProps<"h2">>> = ({ className, ...props }) => (
  <h2 className={`mb-8 text-2xl font-bold ${className}`} {...props} />
);
export const H3: React.FC<PropsWithChildren<ComponentProps<"h3">>> = (props) => <h3 className="text-xl font-bold" {...props} />;

export const A: React.FC<PropsWithChildren<ComponentProps<"a">>> = ({ href, ref, ...props }) => (
  <Link className="text-blue-500" {...props} href={href ?? ""} passHref />
);

export const Strong: React.FC<PropsWithChildren<ComponentProps<"strong">>> = (props) => (
  <strong className="font-bold" {...props} />
);
