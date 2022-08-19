import React from 'react';
import './ButtonStyle.css';
import { Link } from 'react-router-dom';

export const HeaderButton = () => {
  return (
      <Link to="/contacts">
        <button className='header__button'>отправить заявку</button>
      </Link>
  )
}
