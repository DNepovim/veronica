"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { forwardRef } from "react";

export interface NavItem {
  title: string;
  link: string;
}

export const Menu = forwardRef(function Menu({ items }: { items: NavItem[] }, ref: React.Ref<HTMLMenuElement>) {
  const { slug } = useParams<{ slug: string[] }>();

  return (
    <menu className="sm:columns-2" ref={ref}>
      {items.map(({ title, link }) => (
        <li key={link}>
          <Link
            href={`/${link}`}
            className={`mb-2 block text-xl font-bold hover:text-white md:mb-4 md:text-2xl lg:text-3xl ${
              slug?.[0] === link ? "text-white" : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </menu>
  );
});
