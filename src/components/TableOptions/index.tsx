import styles from './tableoptions.module.scss';
import React, { useReducer } from 'react';
import useBlur from '../../hooks/useBlur';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { FiUserX } from 'react-icons/fi';
import { RiUserFollowLine } from 'react-icons/ri';

type Props = {
  id: string;
};

const TableOptions = ({ id }: Props) => {
  const [showOptions, toggleShowOptions] = useReducer((show) => !show, false);
  const ref = useBlur(toggleShowOptions);

  const navigate = useNavigate();

  return (
    <td className={`table__body--item options ${styles.options}`} onClick={toggleShowOptions}>
      <img src='/assets/options.svg' alt='more options' />

      {showOptions && (
        <div className={styles.options__wrapper} onClick={toggleShowOptions} ref={ref}>
          <div className={styles.options__item} onClick={() => navigate(`/user/${id}`)}>
            <AiOutlineEye /> View Details
          </div>

          <div className={styles.options__item}>
            <FiUserX />
            Blacklist User
          </div>

          <div className={styles.options__item}>
            <RiUserFollowLine />
            Activate User
          </div>
        </div>
      )}
    </td>
  );
};

export default TableOptions;
