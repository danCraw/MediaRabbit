import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Menu} from "../../Components";
import "./Contacts.css";

export const Contacts = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

    const {
       register,
       handleSubmit,
       reset,
       formState: { errors }
    } = useForm();

    const onSubmit = data => axios.post("http://188.225.85.187:8000/api/save_customer", data, reset());

  return (
     <>
         <Menu active={burgerActive} setActive={setBurgerActive}/>
         <section className='centerCont'>
             <div className='contactWrapper'>
                 <div className='asideCont'>
                     <aside className='aside' onClick={() => setBurgerActive(!burgerActive)}>
                         <FontAwesomeIcon icon={faBars} className='fa-2x'/>
                     </aside>
                 </div>
                 <div className='contentContainer'>
                      <div className='contactCols'>
                          <div className='contactCol'>
                              <h2 className='contactTitle'>Контакты</h2>
                              <div className='info'>
                                  <p className='contactInfo'>Email: mediarabbit@gmail.com</p>
                                  <p className='contactInfo_phone'>Номер телефона: 8-999-700-91-02</p>
                              </div>
                          </div>
                          <div className='contactCol'>
                              <h2 className='contactTitle'>Отправить заявку</h2>
                              <div className='info'>
                                  <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                      <div className='service'>
                                          <div className='service__label'>
                                             <p className='formText'>Что вы хотите заказать: </p>
                                              <select name='bid_type' className="cs-select" {...register('bid_type')} required={true}>
                                                  <option value="">Услуга</option>
                                                  <option value="1">Разработка сайтов</option>
                                                  <option value="2">Разработка телеграм бота</option>
                                                  <option value="3">Дизайн</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className='inputContainer'>
                                          <div className='inputs'>
                                              <input className='formField'
                                                     type='email'
                                                     name='email'
                                                     placeholder='Email:'
                                                     {...register('email', {required: true})}
                                              />
                                              <div className='error'>{errors?.email && <p>Поле не должно быть пустым</p>}</div>
                                              <input className='formField'
                                                     type='text'
                                                     name='phone'
                                                     placeholder='Номер телефона:'
                                                     {...register('phone', {required: true})}
                                              />
                                              <div className='error'>{errors?.phone && <p>Поле не должно быть пустым</p>}</div>
                                              <input className='formField'
                                                     type='text'
                                                     name='name'
                                                     placeholder='Ваше имя:'
                                                     {...register('name', {required: true})}
                                              />
                                              <div className='error'>{errors?.name && <p>Поле не должно быть пустым</p>}</div>
                                          </div>
                                      </div>
                                      <div className='contactBtn'>
                                          <button className='button' type='submit'>Оставить заявку</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                 </div>
             </div>
         </section>
     </>
  )
}
