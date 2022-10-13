import './table.scss';
import getRandomStatus from '../../utils/getRandomStatus';
import TableOptions from '../TableOptions';
import Filter from '../Filter';

type Props<T = {}> = {
  data: T[];
};

const Table = <T extends {}>({ data }: Props<T>) => {
  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr className='table__head'>
            <th className='table__head--item'>
              Organization <Filter />
            </th>
            <th className='table__head--item'>
              Username <Filter />
            </th>
            <th className='table__head--item'>
              Email <Filter />
            </th>
            <th className='table__head--item'>
              Phone Number <Filter />
            </th>
            <th className='table__head--item'>
              Date Joined
              <Filter />
            </th>
            <th className='table__head--item'>
              Status <Filter />
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((user: any) => {
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
    </div>
  );
};

export default Table;
