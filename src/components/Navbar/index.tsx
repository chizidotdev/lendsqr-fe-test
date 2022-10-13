import './navbar.scss';
import Input from '../Input';
import { BsBell } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDownSFill } from 'react-icons/ri';
import { CgMenuLeft } from 'react-icons/cg';
import Button from '../Button';
import { useReducer } from 'react';
import useBlur from '../../hooks/useBlur';

type Props = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: Props) => {
  // const [inputVisible, setInputVisible] = useState(false);
  const [showOptions, toggleShowOptions] = useReducer((show) => !show, false);
  const ref = useBlur(toggleShowOptions);

  return (
    <nav className='navbar container'>
      <div className='navbar__logo'>
        <div className='navbar__hamburger' onClick={toggleSidebar}>
          <CgMenuLeft />
        </div>

        <img src='/assets/logo.svg' alt='lendsqr logo' />
      </div>

      <form className='navbar__search' data-testid='search-user'>
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

        <div className='navbar__profile' data-testid='user-profile'>
          <div onClick={toggleShowOptions}>
            <img src='/assets/avatar.png' alt='user profile' />
          </div>

          <label htmlFor='user' data-testid='user-name-select'>
            <select name='user' id='user' disabled>
              <option value='username'>Adedeji</option>
            </select>
            <RiArrowDownSFill />
          </label>
        </div>

        {showOptions && (
          <div className='navbar__options' ref={ref}>
            <a href='/' className='navbar__docs'>
              Docs
            </a>
            <p className='search' data-testid='search-user'>
              Search
            </p>
            <label htmlFor='user'>
              <select name='user' id='user' disabled>
                <option value='username'>Adedeji</option>
              </select>
              <RiArrowDownSFill />
            </label>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
