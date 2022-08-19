import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Menu} from "../../Components";
import "./Contacts.css";

export const Contacts = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);
    // const [ visiblePopup, setVisiblePopup ] = useState(false);
    // const [ activeItem, setActiveItem ] = useState(0);

    //inputs state
    // const [ email, setEmail ] = useState('');
    // const [ phone, setPhone ] = useState('');
    // const [ name, setName ] = useState('');

    // const clear = () => {
    //    setEmail('');
    //    setPhone('');
    //    setName('');
    // };

    // const formSubmit = event => {
    //     event.preventDefault();
    //     const data = new FormData();
    //     createDataForm(data);
    //     clear();
    // }
    //
    const {
       register,
       handleSubmit
    } = useForm();

    const onSubmit = data => axios.post("http://localhost:5000/api/save_customer", data);
    // const onSubmit = data => console.log(data);

    // const services = ['разработка сайтов', 'разработка телеграм бота', 'дизайн', 'постпродакшн '];

    // const activeLabel = services[activeItem];
    //
    // const onSelectItem = (index) => {
    //     setActiveItem(index);
    //     setVisiblePopup(false);
    // };
    //
    // const toggleVisiblePopup = () => {
    //     setVisiblePopup(!visiblePopup);
    // };

    // const servRef = useRef();

    // const handleOutsideClick = (event) => {
    //     const path = event.path || (event.composedPath && event.composedPath());
    //     if (!path.includes(servRef.current)) {
    //         setVisiblePopup(false);
    //     }
    // };
    //
    // useEffect(() => {
    //     // document.body.addEventListener('click', handleOutsideClick);
    //
    // }, []);


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
                                  <p className='contactInfo_phone'>Phone number: 8-999-700-91-02</p>
                              </div>
                          </div>
                          <div className='contactCol'>
                              <h2 className='contactTitle'>Отправить заявку</h2>
                              <div className='info'>
                                  <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                      <div className='service' /* ref={servRef} */>
                                          <div className='service__label'>
                                             <p className='formText'>Что вы хотите заказать: </p>
                                          {/*    <span onClick={toggleVisiblePopup} {...register(activeLabel)} className='serveSpan'>{activeLabel}</span> */}
                                              <select className="cs-select" {...register('bid_type')}>
                                                  <option value="" defaultValue={''}>Услуга</option>
                                                  <option value="1">разработка сайтов</option>
                                                  <option value="2">разработка телеграм бота</option>
                                                  <option value="3">дизайн</option>
                                              </select>
                                          </div>
                                          {/*{visiblePopup && (*/}
                                          {/*    <div className='service__popup'>*/}
                                          {/*        <ul className='serviceUl' >*/}
                                          {/*            {services &&*/}
                                          {/*                services.map((name, index) => (*/}
                                          {/*                    <li*/}
                                          {/*                        onClick={() => onSelectItem(index)}*/}
                                          {/*                        className={activeItem === index ? 'activeItem' : ''}*/}
                                          {/*                        key={`${name}_${index}`}>*/}
                                          {/*                        {name}*/}
                                          {/*                    </li>*/}
                                          {/*                ))*/}
                                          {/*            }*/}
                                          {/*        </ul>*/}
                                          {/*    </div>*/}
                                          {/*)}*/}
                                      </div>
                                      <div className='inputContainer'>
                                          {/*<div className='titleCol'>*/}
                                          {/*    <p className='inputText'>Email:</p>*/}
                                          {/*    <p className='inputText'>Phone number:</p>*/}
                                          {/*    <p className='inputText'>Ваше имя:</p>*/}
                                          {/*</div>*/}
                                          <div className='inputs'>
                                              <input className='formField'
                                                     type='email'
                                                     name='email'
                                                     placeholder='Email:'
                                                     // value={email}
                                                     // onChange={e => setEmail(e.target.value)}
                                                     {...register('email', {required: true})}
                                              />
                                              <input className='formField'
                                                     type='text'
                                                     name='phone'
                                                     placeholder='Phone number:'
                                                     // value={phone}
                                                     // onChange={e => setPhone(e.target.value)}
                                                     {...register('phone', {required: true})}
                                              />
                                              <input className='formField'
                                                     type='text'
                                                     name='name'
                                                     placeholder='Ваше имя:'
                                                     // value={name}
                                                     // onChange={e => setName(e.target.value)}
                                                     {...register('name', {required: true})}
                                              />
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
