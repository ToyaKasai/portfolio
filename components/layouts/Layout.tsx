import { FC, ReactNode } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
