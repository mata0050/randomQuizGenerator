import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Header.css';

// Asset
import logo from '../../images/logo.png';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import { 
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon
} from '@chakra-ui/icons'

function Header({ userToken, setUserToken }) {
  // logout and remove token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };
  return (
    <div className='fixed'>
      <div className='header'>
        <img src={logo} alt='Random Quiz' />
        <Menu className='menuMobile'>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem>
              <NavLink to='/signup'>
                <span>Signup</span>
              </NavLink>
            </MenuItem>  
            <MenuItem>
              <NavLink to='/login'>
                <span>Login</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='/'>
                <span>Home</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='quiz'>
                <span>Start Quiz</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='results'>
                <span>Results</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to='leaderboard'>
                <span>Leaderboard</span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='!#' onClick={logout}>
                <span className='button'>Logout</span>
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <div className='menu'>

          <NavLink to='/'>
            <span>Home</span>
          </NavLink>

          {userToken !== null ? (
            <>
              <NavLink to='quiz'>
                <span>Start Quiz</span>
              </NavLink>
              <NavLink to='results'>
                <span>Results</span>
              </NavLink>
              <NavLink to='leaderboard'>
                <span>Leaderboard</span>
              </NavLink>

              <NavLink to='!#' onClick={logout}>
                <span className='button'>Logout</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to='login'>
                <span className='button'>Login</span>
              </NavLink>

              <NavLink to='signup'>
                <span className='button'> Signup</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
