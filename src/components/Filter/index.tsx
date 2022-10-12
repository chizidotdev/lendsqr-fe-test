import './filter.scss';
import React, { useReducer } from 'react';
import { BiFilter } from 'react-icons/bi';
import useBlur from '../../hooks/useBlur';
import Input from '../Input';
import Button from '../Button';

type Props = {};

const Filter = (props: Props) => {
  const [showFilter, toggleShowFilter] = useReducer((show) => !show, false);
  const ref = useBlur(toggleShowFilter);

  return (
    <div className='filter' onClick={toggleShowFilter}>
      <BiFilter />

      {showFilter && (
        <div className='filter__form' onClick={toggleShowFilter} ref={ref}>
          <form>
            <label>
              Organization
              <Input name='organization' placeholder='Select' />
            </label>

            <label>
              Username
              <Input name='username' placeholder='User' />
            </label>

            <label>
              Email
              <Input name='email' placeholder='Email' />
            </label>

            <label>
              Date Joined
              <Input name='date' type='date' />
            </label>

            <label>
              Phone Number
              <Input name='phone' placeholder='Phone Number' />
            </label>

            <label>
              Status
              <Input name='status' placeholder='Select' />
            </label>

            <div className='filter__form--buttons'>
              <Button className='btn-outline'> Reset</Button>
              <Button className='btn'> Filter</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Filter;
