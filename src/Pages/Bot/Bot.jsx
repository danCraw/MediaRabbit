import React, {useState} from "react";
import {Button, Menu} from "../../Components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import botimg1 from "../../assets/botimg1.png";
import botimg2 from "../../assets/botimg2.png";
import botimg3 from "../../assets/botimg3.png";
import botimg4 from "../../assets/botimg4.png";
import botimg5 from "../../assets/botimg5.png";
import botimg6 from "../../assets/botimg6.png";
import telBotBg from '../../assets/telBot.png';
import botOrderImg1 from '../../assets/botOrderImg1.png';
import botOrderImg2 from '../../assets/botOrderImg2.png';
import botOrderImg3 from '../../assets/botOrderImg3.png';
import botOrderImg4 from '../../assets/botOrderImg4.png';
import arrow from '../../assets/arrow.png';
import arrow2 from '../../assets/arrow2.png';
import orderFonBot from '../../assets/orderFonBot.png';
import rectangleBotOrder from '../../assets/rectangleBotOrder.png';
import './Bot.css';




export const Bot = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

    return (
        <>
            <Menu active={burgerActive} setActive={setBurgerActive}/>
            <div className='backgroundBot'  style={{
                backgroundImage: `url(${telBotBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                <section className="sectionText">
                    <div className="botText">
                        < div className='textBot'>
                            <p className='textBotH5'>Разработка чат-бота</p>
                        </div>
                        <div className='BotContainer'>
                            <p className='botPageDescription'>
                                Разработка чат-бота это современное решение, 
                                которое позволяет легко адаптировать бизнес процессы. 
                                Увеличивает объем продаж и выделяет вас среди конкурентов
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='orderHeader'>
                <h5 className="orderTextHeders">
                    Чат - бот  это...
                </h5>
            </div>
            <section className="cards">
                
                        <div className="card">
                            <div className="inner__item">
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={botimg1} height={131} width={143} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                                <div  className = "item__titleText">
                                    <h5 className="itemFirstTitle">
                                        Просто
                                    </h5>
                                    <h5 className="itemSecondTitle">
                                        Бот интегрируется в известные мессенджеры и социальные сети
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={botimg2} height={74} width={125} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                                <div  className = "item__titleText">
                                    <h5 className="itemFirstTitle">
                                        Удобно
                                    </h5>
                                    <h5 className="itemSecondTitle">
                                        Общение с помощью уже готовых кнопок 
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={botimg3} height={86} width={83} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                                <div  className = "item__titleText">
                                    <h5 className="itemFirstTitle">
                                        Популярно
                                    </h5>
                                    <h5 className="itemSecondTitle">
                                        Многие компании уже используют чат-боты для продажи своих услуг
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={botimg4} height={121} width={93} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                                <div  className = "item__titleText">
                                    <h5 className="itemFirstTitle">
                                        Автоматизация
                                    </h5>
                                    <h5 className="itemSecondTitle">
                                        Бот способен сомастоятельно отвечать вашим клиентам на вопросы
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={botimg5} height={117} width={84} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                                <div  className = "item__titleText">
                                    <h5 className="itemFirstTitle">
                                        Большой функционал 
                                    </h5>
                                    <h5 className="itemSecondTitle">
                                        Бот может предоставлять каталог товаров,  делать рассылки,  предлагать оплату услугу или товар
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={botimg6} height={90} width={79} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                                <div  className = "item__titleText">
                                    <h5 className="itemFirstTitle">
                                        Надежно
                                    </h5>
                                    <h5 className="itemSecondTitle">
                                        Использование быстрых серверов позволит сделать бота быстрым и надежным
                                    </h5>
                                </div>
                            </div>
                    </div>                   
            </section>
            <section className="bottomContent">
            
            
                    
                <div className='backgroundBotSecond'  style={{
                    backgroundImage: `url(${orderFonBot})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='orderHeader'>
                            <h5 className="orderTextHeders">
                                Порядок <br/> выполнения заказа
                            </h5>
                        </div>
                        <div className="botArrowImg">      
                            <img  src={arrow} height={118} width={175} alt='img' className='img__cardHide' />
                            <img  src={arrow} height={118} width={175} alt='img' className='img__cardHide' />
                        </div>
                        <div className="botOrder">   
                            <div className="botOrderImgDiv">
                                <div className="botOrederImg">      
                                    <img  src={botOrderImg1} height={130} width={90} alt='img' className='img__cardHide' />
                                </div>
                                <div  className = "botOrderText">
                                    <h5 className="BotOrderTitle">
                                        Заполнение анкеты
                                    </h5>
                                </div>
                            </div>    
                            <div className="botOrderImgDiv">
                                <div className="botOrederImg">      
                                    <img  src={botOrderImg2} height={108} width={185} alt='img' className='img__cardHide' />
                                </div>
                                <div  className = "botOrderText">
                                    <h5 className="BotOrderTitle">
                                         Обсуждение проекта
                                    </h5>
                                </div>
                            </div>
                                <div className="botOrderImgDiv">
                                    <div className="botOrederImg">      
                                        <img  src={botOrderImg3} height={108} width={165} alt='img' className='img__cardHide' />
                                    </div>
                                    <div  className = "botOrderText">
                                        <h5 className="BotOrderTitle">
                                            Разработка
                                        </h5>
                                    </div> 
                                </div>
                                <div className="botOrderImgDiv">
                                    <div className="botOrederImg">      
                                        <img  src={botOrderImg4} height={149} width={153} alt='img' className='img__cardHide' />
                                    </div>
                                    <div  className = "botOrderText">
                                        <h5 className="BotOrderTitle">
                                            Презентация
                                        </h5>
                                    </div> 
                                </div>
                        </div>
                        <div className="botArrowImg">      
                            <img  src={arrow2} height={118} width={175} alt='img' className='img__cardHide' />
                        </div>
                </div>
                        
            <section className="backgroundBotSecondContainer">
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
                                 { <div className='aboutImage' style={{backgroundImage: `url(${rectangleBotOrder})`, }}>
                                 </div> }
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
                        </section> 
                        <div className="buttonWrapper">  
                            <Link to="/contacts">
                                <Button/>
                            </Link>
                        </div>
                
            </section>
            <section className="centerCont">
                <div className='pageContent'>
                    <div className='asideCol'>
                        <aside className='aside' onClick={() => setBurgerActive(!burgerActive)}>
                            <FontAwesomeIcon icon={faBars} className='fa-2x'/>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}