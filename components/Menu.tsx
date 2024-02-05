import Link from "next/link";

export interface NavItem {
  title: string;
  link: string;
}

export const Menu: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <menu className="columns-2">
    {items.map(({ title, link }) => (
      <li key={link}>
        <Link
          href={link}
          className="my-2 block text-3xl font-bold hover:text-white"
        >
          {title}
        </Link>
      </li>
    ))}
  </menu>
);
