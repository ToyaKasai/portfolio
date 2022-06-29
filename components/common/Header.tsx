import { FC } from 'react';
import { TLink } from '../../types';
import NextLink from 'next/link';

type NavigationLink = TLink & {
  text: string;
};

const NAVIGATION_LINKS: NavigationLink[] = [
  {
    href: '/about/',
    text: 'About Me',
  },
  {
    href: '/output/',
    text: 'Output',
  },
  {
    href: '/blog/',
    text: 'Blog',
  },
];

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-header flex h-16 w-full items-center justify-end pr-8">
      <nav className="flex gap-x-8">
        {NAVIGATION_LINKS.map(({ href, text }) => (
          <NextLink key={href as string} href={href}>
            <a>{text}</a>
          </NextLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
