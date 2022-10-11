import './userdetails.scss';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import UserDetailsHeader from '../../components/UserDetailsHeader';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

type Props = {};

const UserDetails = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(['user'], getUser);

  async function getUser() {
    const res = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    return await res.json();
  }

  return (
    <Layout>
      <div className='details container'>
        <nav onClick={() => navigate('/dashboard')}>
          <HiOutlineArrowNarrowLeft />
          Back to Users
        </nav>

        <section className='details__heading'>
          <h1 className='details__heading--title'>User Details</h1>

          <div className='details__heading--buttons'>
            <Button className='btn-outline blacklist'>Blacklist User</Button>
            <Button className='btn-outline activate'>Activate User</Button>
          </div>
        </section>

        <UserDetailsHeader data={data} />

        <section className='details__info'>
          <div className='details__info--section'>
            <h3 className='details__info--section-title'>Personal Information</h3>

            <div className='details__info--section-content'>
              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Full Name</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.profile.firstName}&nbsp;{data?.profile.lastName}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Phone Number</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.profile.phoneNumber}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Email Address</h4>
                <p className='details__info--section-content-item-value'>{data?.email}</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>BVN</h4>
                <p className='details__info--section-content-item-value'>{data?.profile.bvn}</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Gender</h4>
                <p className='details__info--section-content-item-value'>{data?.profile.gender}</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Marital Status</h4>
                <p className='details__info--section-content-item-value'>Single</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Children</h4>
                <p className='details__info--section-content-item-value'>None</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Type of Residence</h4>
                <p className='details__info--section-content-item-value'>Parent&apos;s Apartment</p>
              </div>
            </div>
          </div>

          <div className='details__info--section'>
            <h3 className='details__info--section-title'>Education and Employment</h3>

            <div className='details__info--section-content'>
              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Level of Education</h4>
                <p className='details__info--section-content-item-value'>{data?.education.level}</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Employment Status</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.education.employmentStatus}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Sector of Employment</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.education.sector}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>
                  Duration of Employment
                </h4>
                <p className='details__info--section-content-item-value'>
                  {data?.education.duration}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Office Email</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.education.officeEmail}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Monthly Income</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.education.monthlyIncome?.map((income: any, idx: number) => {
                    return <span key={idx}>N{income}&nbsp;</span>;
                  })}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Loan Repayment</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.education.loanRepayment}
                </p>
              </div>
            </div>
          </div>

          <div className='details__info--section'>
            <h3 className='details__info--section-title'>Socials</h3>

            <div className='details__info--section-content'>
              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Twitter</h4>
                <p className='details__info--section-content-item-value'>{data?.socials.twitter}</p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Facebook</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.socials.facebook}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <h4 className='details__info--section-content-item-title'>Instagram</h4>
                <p className='details__info--section-content-item-value'>
                  {data?.socials.instagram}
                </p>
              </div>
            </div>
          </div>

          <div className='details__info--section'>
            <h3 className='details__info--section-title'>Guarantor</h3>

            <div className='details__info--section-content'>
              <div className='details__info--section-content-item'>
                <p className='details__info--section-content-item-title'>Full Name</p>
                <p className='details__info--section-content-item-value'>
                  {data?.guarantor.firstName}&nbsp;{data?.guarantor.lastName}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <p className='details__info--section-content-item-title'>Phone Number</p>
                <p className='details__info--section-content-item-value'>
                  {data?.guarantor.phoneNumber}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <p className='details__info--section-content-item-title'>Email Address</p>
                <p className='details__info--section-content-item-value'>
                  {data?.guarantor.address}
                </p>
              </div>

              <div className='details__info--section-content-item'>
                <p className='details__info--section-content-item-title'>Gender</p>
                <p className='details__info--section-content-item-value'>
                  {data?.guarantor.gender}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UserDetails;
