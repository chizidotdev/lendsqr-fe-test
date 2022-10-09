import './layout.scss';
import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

type Props = React.ComponentPropsWithRef<'div'> & {
  children: React.ReactNode;
};

const Layout = ({ children, ...props }: Props) => {
  return (
    <div className='layout'>
      <Navbar />

      <div className='layout__main'>
        <Sidebar />
        <div className='layout__children'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
