import './navbar.scss';
import Input from '../Input';
import { BsBell } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDownSFill } from 'react-icons/ri';
import Button from '../Button';

type Props = {};

const Navbar = (props: Props) => {
  // const [inputVisible, setInputVisible] = useState(false);

  return (
    <nav className='navbar container'>
      <div className='navbar__logo'>
        <img src='/assets/logo.svg' alt='lendsqr logo' />
      </div>

      <form className='navbar__search'>
        <Input name='search' id='search' placeholder='Search for anything' />
        <Button className='btn'>
          <BiSearch size={18} />
        </Button>
      </form>

      <div className='navbar__aside'>
        <a href='/' className='navbar__docs'>
          Docs
        </a>

        <BsBell size={24} className='navbar__notify' />

        <div className='navbar__profile'>
          <img src='/assets/avatar.png' alt='profile' />

          <label htmlFor='user'>
            <select name='user' id='user' disabled>
              <option value='username'>Adedeji</option>
            </select>
            <RiArrowDownSFill />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
