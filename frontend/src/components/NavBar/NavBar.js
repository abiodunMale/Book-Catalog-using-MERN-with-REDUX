import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' to='/'>
          CATALOG
        </a>
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
            <li className='nav-item active'>
              <a className='nav-link' to='/' >
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/books'>
                  Books
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/addbook'>
                  Add book
                </Link>
              </li>

              <li className='nav-item'>
                <a className='nav-link' to='/users'>
                  Users
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' to='/login'>
                  Logout
                </a>
              </li>
            </>
            {/* Login Register */}
            <>
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
            </>

            {/* Drop dowm */}
            {true ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  href='/'
                  id='navbarDropdown'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'></a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' to='/profile'>
                    Profile
                  </a>
                  <a className='dropdown-item' to='/addbook'>
                    Add book
                  </a>
                  <a className='dropdown-item' to='/books'>
                    Books
                  </a>

                  <div className='dropdown-divider'></div>
                  <button className='dropdown-item'>Logout</button>
                </div>
              </li>
            ) : (
              ''
            )}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <button type="button" className="btn btn-outline-danger">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;