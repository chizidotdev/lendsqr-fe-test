import './table.scss';
import { BiFilter } from 'react-icons/bi';
import getRandomStatus from '../../utils/getRandomStatus';
import TableOptions from '../TableOptions';

type Props<T> = {
  data: T;
};

const Table = <T extends any[]>({ data }: Props<T>) => {
  return (
    <table className='table'>
      <thead>
        <tr className='table__head'>
          <th className='table__head--item'>
            Organization <BiFilter />
          </th>
          <th className='table__head--item'>
            Username <BiFilter />
          </th>
          <th className='table__head--item'>
            Email <BiFilter />
          </th>
          <th className='table__head--item'>
            Phone Number <BiFilter />
          </th>
          <th className='table__head--item'>
            Date Joined <BiFilter />
          </th>
          <th className='table__head--item'>
            Status <BiFilter />
          </th>
        </tr>
      </thead>

      <tbody>
        {data?.map((user: any) => {
          const status = getRandomStatus();

          return (
            <tr className='table__body' key={user.id}>
              <td className='table__body--item'>{user.orgName}</td>
              <td className='table__body--item'>{user.userName}</td>
              <td className='table__body--item'>{user.email}</td>
              <td className='table__body--item'>{user.profile.phoneNumber}</td>
              <td className='table__body--item'>{new Date(user.createdAt).toDateString()}</td>
              <td className='table__body--item'>
                <div className={'table__body--item-status ' + status}>{status}</div>
              </td>
              <TableOptions id={user.id} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
