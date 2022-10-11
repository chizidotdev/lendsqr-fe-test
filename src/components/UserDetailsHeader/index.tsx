import './userdetailsheader.scss';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { TbCurrencyNaira } from 'react-icons/tb';

type Props = {
  data: any;
};

const tabData = [
  'General Details',
  'Documents',
  'Bank Details',
  'Loans',
  'Savings',
  'App and System',
];

const UserDetailsHeader = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className='details-header'>
      <section className='details-header__top'>
        <img src={data?.profile.avatar} alt='avatar' className='details-header__avatar' />

        <div className='details-header__title'>
          <h2 className='name'>
            {data?.profile.firstName}&nbsp;{data?.profile.lastName}
          </h2>

          <p className='id'>{data?.accountNumber}</p>
        </div>

        <div className='details-header__tier'>
          <span>User&apos;s Tier</span>

          <div className='details-header__tier--rating'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        </div>

        <div className='details-header__wallet'>
          <span className='amount'>
            <TbCurrencyNaira />
            {data?.accountBalance}
          </span>

          <div className='bank'>{data?.accountNumber}/Providus Bank</div>
        </div>
      </section>

      <section>
        <ul className='details-header__tabs'>
          {tabData.map((tab, idx) => {
            const active = activeTab === idx ? 'active' : '';

            return (
              <li className={active} onClick={() => setActiveTab(idx)}>
                {tab}
              </li>
            );
          })}
        </ul>
      </section>
    </header>
  );
};

export default UserDetailsHeader;
