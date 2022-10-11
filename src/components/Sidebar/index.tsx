import './sidebar.scss';
import React from 'react';
import {
  FaCoins,
  FaHandHoldingUsd,
  FaHome,
  FaRegHandshake,
  FaScroll,
  FaUsers,
} from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { ImStatsDots } from 'react-icons/im';
import { GiOilySpiral, GiTakeMyMoney } from 'react-icons/gi';
import { MdReceiptLong, MdSavings } from 'react-icons/md';
import { IoBriefcase } from 'react-icons/io5';
import { BsFillPersonCheckFill, BsFillPersonXFill } from 'react-icons/bs';
import { RiUserSettingsFill } from 'react-icons/ri';
import { BiSlider } from 'react-icons/bi';
import { TbPercentage, TbReport } from 'react-icons/tb';

type Props = {
  sidebarIsVisible: boolean;
};

const Sidebar = ({ sidebarIsVisible }: Props) => {
  return (
    <div className={`sidebar ${sidebarIsVisible && 'active'}`}>
      <div className='sidebar__heading'>
        <div>
          <IoBriefcase size={14} />
        </div>

        <label htmlFor='organization'>
          <select name='organization' id='organization' disabled>
            <option value=''>Switch Organization</option>
          </select>
        </label>
      </div>

      <div className='sidebar__section'>
        <a href='/' className='sidebar__navlink sidebar__navlink--link'>
          <FaHome />

          <span className='sidebar__navlink--link-title'>Dashboard</span>
        </a>
      </div>

      <div className='sidebar__section'>
        <h3 className='sidebar__navlink sidebar__navlink--heading'>Customers</h3>

        {sidebarData.customers.map((item, index) => (
          <a
            href='/'
            className={`sidebar__navlink sidebar__navlink--link  ${index === 0 && 'active'}`}
            key={index}
          >
            {item.icon}

            <span className='sidebar__navlink--link-title'>{item.title}</span>
          </a>
        ))}
      </div>

      <div className='sidebar__section'>
        <h3 className='sidebar__navlink sidebar__navlink--heading'>Businesses</h3>

        {sidebarData.businesses.map((item, index) => (
          <a href='/' className='sidebar__navlink sidebar__navlink--link ' key={index}>
            {item.icon}

            <span className='sidebar__navlink--link-title'>{item.title}</span>
          </a>
        ))}
      </div>

      <div className='sidebar__section'>
        <h3 className='sidebar__navlink sidebar__navlink--heading'>Settings</h3>

        {sidebarData.settings.map((item, index) => (
          <a href='/' className='sidebar__navlink sidebar__navlink--link ' key={index}>
            {item.icon}

            <span className='sidebar__navlink--link-title'>{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const sidebarData = {
  customers: [
    {
      title: 'Users',
      icon: <HiUsers />,
    },
    {
      title: 'Guarantors',
      icon: <FaUsers />,
    },
    {
      title: 'Loans',
      icon: <GiTakeMyMoney />,
    },
    {
      title: 'Decision Models',
      icon: <FaRegHandshake />,
    },
    {
      title: 'Savings',
      icon: <MdSavings />,
    },
    {
      title: 'Loan Requests',
      icon: <FaHandHoldingUsd />,
    },
    {
      title: 'Whitelist',
      icon: <BsFillPersonCheckFill />,
    },
    {
      title: 'Karma',
      icon: <BsFillPersonXFill />,
    },
  ],
  businesses: [
    {
      title: 'Organization',
      icon: <IoBriefcase />,
    },
    {
      title: 'Loan Products',
      icon: <FaHandHoldingUsd />,
    },
    {
      title: 'Savings Products',
      icon: <IoBriefcase />,
    },
    {
      title: 'Fees and Charges',
      icon: <FaCoins />,
    },
    {
      title: 'Transactions',
      icon: <MdReceiptLong />,
    },
    {
      title: 'Services',
      icon: <GiOilySpiral />,
    },
    {
      title: 'Service Account',
      icon: <RiUserSettingsFill />,
    },
    {
      title: 'Settlements',
      icon: <FaScroll />,
    },
    {
      title: 'Reports',
      icon: <ImStatsDots />,
    },
  ],
  settings: [
    {
      title: 'Preferences',
      icon: <BiSlider />,
    },
    {
      title: 'Fees and Pricing',
      icon: <TbPercentage />,
    },
    {
      title: 'Audit Logs',
      icon: <TbReport />,
    },
  ],
};
