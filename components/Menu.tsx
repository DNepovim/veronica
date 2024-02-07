"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { forwardRef } from "react";

export interface NavItem {
  title: string;
  link: string;
}

interface Params {
  slug: string[];
}

export const Menu = forwardRef(function Menu({ items }: { items: NavItem[] }, ref: React.Ref<HTMLMenuElement>) {
  const {
    slug: [path],
  } = useParams<{ slug: string[] }>();

  return (
    <menu className="columns-2" ref={ref}>
      {items.map(({ title, link }) => (
        <li key={link}>
          <Link
            href={`/${link}`}
            className={`mb-4 block text-3xl font-bold hover:text-white ${path === link ? "text-white" : ""}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </menu>
  );
});
