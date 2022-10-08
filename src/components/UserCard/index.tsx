import './usercard.scss';
import { summaryData } from '../../pages/Dashboard';

type Props = { data: typeof summaryData[number] };

const UserCard = ({ data }: Props) => {
  const { icon, title, value } = data;

  return (
    <div className='card'>
      <div className='card__icon'>{icon}</div>
      <h2 className='card__title'>{title}</h2>
      <h3 className='card__value'>{value.toLocaleString()}</h3>
    </div>
  );
};

export default UserCard;
