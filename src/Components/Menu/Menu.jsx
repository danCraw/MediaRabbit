import React from 'react';
import "./Menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Menu = ({ active, setActive }) => {
    return (
           <div className={active ? 'menu active' : 'menu'} >
               <div className='menuContent'>
                   <div className="icon">
                       <FontAwesomeIcon icon={faXmark} className='fa-2x close' onClick={() => setActive(false)}/>
                   </div>
                  <div className='cols'>
                      <div className="col">
                          <h4 className='menuTitle'>услуги</h4>
                          <Link to="/develop" className='menuLink'>разработка сайтов</Link>
                          {/* <Link to="/post" className='menuLink'>постпродакшн </Link>
                          <Link to="/design" className='menuLink'>дизайн</Link> */}
                          <Link to="/bot" className='menuLink'>разработка телеграм бота </Link>
                      </div>
                      <div className="col">
                          <h4 className='menuTitle'>компания</h4>
                          <Link to="/layout" className='menuLink'>о компании</Link>
                      </div>
                      <div className="col">
                          <h4 className='menuTitle'>контакты</h4>
                          <p className='menuInfo'>Email: mediarabbit@gmail.com</p>
                          <p className='menuInfo_phone'>Номер телефона: 8-999-700-91-02</p>
                          <div className="menuBtnContainer">
                              <Link to="/contacts">
                                  <Button/>
                              </Link>
                          </div>
                      </div>
                  </div>
               </div>
           </div>
    )
}
