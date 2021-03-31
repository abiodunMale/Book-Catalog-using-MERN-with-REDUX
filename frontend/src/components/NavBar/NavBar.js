import React, { useState } from 'react';
import { Menu, Dropdown, Icon, Image } from 'semantic-ui-react';
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
    <div>
    <Menu size='large' borderless>
        <Menu.Item header>Book Catalog</Menu.Item>
        <Menu.Item as={Link} to={'/'}
          name='home'
        />
        {token &&  <Menu.Item as={Link} to={'/books'}
          name='books'
        />}
        <Menu.Menu position='right'>
          <Dropdown item text='Account' pointing className='link item'>
            <Dropdown.Menu >
              {token ? 
                <>
                  <Dropdown.Item as={Link} to={'/profile'}>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
                </>
                :<>
                  <Dropdown.Item as={Link} to={'/register'}>Register</Dropdown.Item>
                  <Dropdown.Item as={Link} to={'/login'}>Login</Dropdown.Item>
                </>
              }
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      
      </div>
  );
};

export default Navbar;