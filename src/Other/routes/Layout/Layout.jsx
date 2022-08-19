import React, { useState } from 'react';
import { Button, HomeBackground, Menu } from "../../../Components";
import orderfon from "../../../assets/orderfon.svg";
import orderimg1 from "../../../assets/orderImg1.svg";
import orderimg2 from "../../../assets/orderImg2.svg";
import orderimg3 from "../../../assets/orderImg3.svg";
import orderimg4 from "../../../assets/orderImg4.svg";
import "./Layout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Rectangle48 from "../../../assets/Rectangle 48.png";


export const Layout = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

  return (
     <>
         <Menu active={burgerActive} setActive={setBurgerActive}/>
         <HomeBackground />
         <section className="title__wrapper">
             <h1 className="second__title">Mediarabbit</h1>
         </section>
        <section className="centerCont">
            <div className='pageContent'>
                <div className='asideCol'>
                    <aside className='aside' onClick={() => setBurgerActive(!burgerActive)}>
                        <FontAwesomeIcon icon={faBars} className='fa-2x'/>
                    </aside>
                </div>
                <div className='contentContainer'>
                    <p className="text__block">
                    Mediarabbit - Продакшн из разработчиков и дизайнеров, 
                    профессионалов своего дела. Мы помогаем бизнесу увеличивать продажи. 
                    Разрабатываем и поддерживаем сайты любой сложности. 
                    Чат-боты и многое другое. 
                    Мы решаем даже самые сложные и нестандартные задачи.
                    </p>
                </div>
            </div>
        </section>
        <section className="order">
            <div className= "orderFon" style={{backgroundImage: `url(${orderfon})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='orderHeader'>
                    <h5 className="orderTextHeders">
                    Порядок <br/> выполнения заказа
                    </h5>
                </div>
                    <div className='orderCarsds'>
                        <div className='orderCard'>
                            <div className='orderCardsImg'>
                                <img  src={orderimg1} height={190} width={270} alt='img' className='imagcardsOrder' />
                            </div>
                            <div className='orderCardsText'>
                                <p className="textCardOrder">
                                    Вы можете позвонить нам по номеру телефона<br/> или оставить заявку на сайте.
                                    Мы свяжемся с<br/> Вами в ближайшее время
                                </p>
                            </div>
                        </div>   
                        <div className='orderCard'>
                            <div className='orderCardsImg'>
                                <img  src={orderimg2} height={190} width={270} alt='img' className='imagcardsOrder' />
                            </div>
                            <div className='orderCardsText'>
                                <p className="textCardOrder">
                                Мы обсуждаем с вами ваш ваши пожелания 
                                и<br/> наши предложения. И выбираем технологии<br/> разработки
                                </p>
                            </div>
                        </div> 
                        <div className='orderCard'>
                            <div className='orderCardsImg'>
                                <img  src={orderimg3} height={190} width={270} alt='img' className='imagcardsOrder' />
                            </div>
                            <div className='orderCardsText'>
                                <p className="textCardOrder">
                                Мы разрабатываем структуру и дизайн макет<br/> проекта. 
                                И выполняем свою работу в заранее<br/> обговоренные сроки
                                </p>
                            </div>
                        </div> 
                        <div className='orderCard'>
                            <div className='orderCardsImg'>
                                <img  src={orderimg4} height={190} width={270} alt='img' className='imagcardsOrder' />
                            </div>
                            <div className='orderCardsText'>
                                <p className="textCardOrder">
                                Презентуем вам готовый проект и в  
                                случае<br/> необходимости исправляем ваши пожелания
                                </p>
                            </div>
                        </div>      
                    </div> 
            </div>
        </section>
         <section className="bottomContent">
             <div className="bottomWrapperHome">
                 <div className="cardGrid">
                     <div className="cardGridItem">
                         <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h5 className="text-shadow">
                                         Дизайн
                                     </h5>
                                 </div>
                             </div>
                             <div className="back">
                                 {/* <img  src={cup} height={210} width={90} alt='img' className='imagecards' /> */}
                                 <p className="textcard">
                                 Превратим ваши идеи в произведениях искусства для вашего бизнеса
                                 </p>
                             </div>
                         </div>
                     </div>
                     <div className="cardGridItem">
                         <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h5 className="text-shadow">
                                         Разработка сайта
                                     </h5>
                                 </div>
                             </div>
                             <div className="back">
                                 <p className="textcard">
                                 Мы разработаем для вас полноценный сайт. Начиная от идеи, разработаем дизайн макет. Согласуем его с вами,выберем подходящие технологии, презентуем вам готовый вариант и сделаем поправки
                                 </p>
                                 {/* <img  src={playbutton} height={100} width={200} alt='img' className='imagecards' /> */}
                                 <div className='aboutImage' style={{backgroundImage: `url(${Rectangle48})`, }}>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="cardGridItem">
                         <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h5 className="text-shadow">
                                         Постпродакшн
                                     </h5>
                                 </div>
                             </div>
                             <div className="back">
                                 {/* <img  src={playbutton} height={160} width={194} alt='img' className='imagecards' /> */}
                                 <p className="textcard">
                                    скоро будет доступно
                                 </p>
                             </div>
                         </div>
                     </div>
                     <div className="cardGridItem">
                         <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h5 className="text-shadow">
                                         Разработка
                                         телеграм бота
                                     </h5>
                                 </div>
                             </div>
                             <div className="back">
                                 <p className="textcard">
                                 Разработка чат-бота современное решение, 
                                 которое позволяет легко адаптировать бизнес процессы. 
                                 Увеличивает объем продаж и выделяет вас среди конкурентов
                                 </p>
                                 {/* <img  src={playbutton} height={100} width={200} alt='img' className='smartphones' /> */}
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="buttonWrapper">
                     <Link to="/contacts">
                         <Button/>
                     </Link>
                 </div>
             </div>
         </section>
     </>
  )
}
