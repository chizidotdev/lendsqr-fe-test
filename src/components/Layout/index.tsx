import './layout.scss';
import React, { useReducer } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

type Props = React.ComponentPropsWithRef<'div'> & {
  children: React.ReactNode;
};

const Layout = ({ children, ...props }: Props) => {
  const [sidebarIsVisible, toggleSidebar] = useReducer((prev) => !prev, false);

  return (
    <div className='layout'>
      <Navbar toggleSidebar={toggleSidebar} />

      <div className='layout__main'>
        <Sidebar sidebarIsVisible={sidebarIsVisible} />
        <div className='layout__children'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
