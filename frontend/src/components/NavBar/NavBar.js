import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutUserAction } from '../../redux/actions/userActions';

const Navbar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { token } = useSelector(state => state.userLogin);

    const logoutUser = () => {
        dispatch(logoutUserAction());
        history.push('/');
    };

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          CATALOG
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            {!token ? 
              <>
              {/* <li className='nav-item active'>
                <Link className='nav-link' to='/' >
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
                </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
              </> : <><li className='nav-item'>
              <Link className='nav-link' to='/books'>
                Books
              </Link>
            </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  to='/'
                  id='navbarDropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>Account</Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <Link className='dropdown-item' to='/profile'>
                    Profile
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link onClick={logoutUser} className='dropdown-item' to='/'>Logout</Link>
                </div>
              </li>
              </> }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;