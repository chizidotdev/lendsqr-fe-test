import './dashboard.scss';
import { useQuery } from '@tanstack/react-query';
import { userType } from '../../types';
import UserCard from '../../components/UserCard';
import Layout from '../../components/Layout';
import PaginatedTable from '../../components/PaginatedTable';

//====== Icons ======//
import { HiOutlineUsers } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { TbFileInvoice } from 'react-icons/tb';
import { BiCoinStack } from 'react-icons/bi';

const getUsers = () => {
  const data: Promise<userType[]> = fetch(
    'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
  ).then((res) => res.json());
  return data;
};

const Dashboard = () => {
  const { data } = useQuery(['users', 0], getUsers);

  return (
    <Layout>
      <div className='dashboard container'>
        <h1 className='dashboard__heading'>Users</h1>

        <div className='dashboard__summary'>
          {summaryData.map((item, index) => (
            <UserCard key={index} data={item} />
          ))}
        </div>

        <div className='dashboard__table'>
          {data && <PaginatedTable<userType> data={data} itemsPerPage={10} />}
          {/* {data && <Table data={data} />} */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

export const summaryData = [
  {
    title: 'Users',
    value: 2453,
    icon: <HiOutlineUsers />,
  },
  {
    title: 'Active Users',
    value: 2453,
    icon: <FaUsers />,
  },
  {
    title: 'Users with Loans',
    value: 12453,
    icon: <TbFileInvoice />,
  },
  {
    title: 'Users with Savings',
    value: 102453,
    icon: <BiCoinStack />,
  },
];
