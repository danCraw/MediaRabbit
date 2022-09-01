import React, {useState} from "react";
import {Button, Menu} from "../../Components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Rectangle48 from "../../assets/Rectangle 48.png";
import executionOrder1 from '../../assets/executionOrder1.png';
import executionOrder2 from '../../assets/executionOrder2.png';
import executionOrder3 from '../../assets/executionOrder3.png';
import executionOrder4 from '../../assets/executionOrder4.png';
import arrow from '../../assets/arrow.png';
import arrow2 from '../../assets/arrow2.png';
import pyton from '../../assets/pyton.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import bitrex from '../../assets/Group 71.png';
import orderBot from '../../assets/orderBot.png';
import './Develop.css';
import homeBg from '../../assets/fon.svg';
import notebookRabbit from '../../assets/notebookRabbit2.svg';
import gif from '../../assets/gif/develop.gif';


export const Develop = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

    return (
        <>
            <Menu active={burgerActive} setActive={setBurgerActive}/>
            <div className='backgroundDevelop'  style={{
                backgroundImage: `url(${homeBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <section className="headcontent">
                    <div className="headTextContent">
                        <div className='headH3'>
                            <h2 className='headTitle'>Разработка сайтов</h2>
                        </div>
                        <div className='headText'>
                            <p className='headTextTitle'>
                            Мы разработаем для вас полноценный сайт. 
                            Начиная от идеи, разработаем дизайн макет. 
                            Согласуем его с вами,выберем подходящие технологии, 
                            презентуем вам готовый вариант и сделаем поправки
                            </p>
                        </div>
                    </div>  
                    <div className="headImgContent">
                        <div className='headImg'  style={{
                            backgroundImage: `url(${notebookRabbit})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <img src={gif} width={442} height={286} className='devGif'/>
                        </div>
                    </div> 
                </section> 

            </div>
            <section className="centerCont">
                <div className='pageContent'>
                    <div className='asideCol'>
                        <aside className='aside' onClick={() => setBurgerActive(!burgerActive)}>
                            <FontAwesomeIcon icon={faBars} className='fa-2x'/>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="bottomContent">
                <div className="bottomWrapperDevelop">
                    
            <section className="executionOrder">
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
                                    <img  src={executionOrder1} height={130} width={90} alt='img' className='img__cardHide' />
                                </div>
                                <div  className = "botOrderText">
                                    <h5 className="BotOrderTitle">
                                        Заполнение анкеты
                                    </h5>
                                </div>
                            </div>    
                            <div className="botOrderImgDiv">
                                <div className="botOrederImg">      
                                    <img  src={executionOrder2} height={108} width={185} alt='img' className='img__cardHide' />
                                </div>
                                <div  className = "botOrderText">
                                    <h5 className="BotOrderTitle">
                                         Обсуждение проекта
                                    </h5>
                                </div>
                            </div>
                                <div className="botOrderImgDiv">
                                    <div className="botOrederImg">      
                                        <img  src={executionOrder3} height={108} width={165} alt='img' className='img__cardHide' />
                                    </div>
                                    <div  className = "botOrderText">
                                        <h5 className="BotOrderTitle">
                                            Разработка
                                        </h5>
                                    </div> 
                                </div>
                                <div className="botOrderImgDiv">
                                    <div className="botOrederImg">      
                                        <img  src={executionOrder4} height={149} width={153} alt='img' className='img__cardHide' />
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
            </section>
            <section className='backgroundDevelopSecond'  style={{
                backgroundImage: `url(${orderBot})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                   
                <div className='developeorderHeader'>
                            <h5 className="orderTextHeders">
                                Порядок <br/> выполнения заказа
                            </h5>
                        </div>
                       
                        <div className="develoOrder">   
                            <div className="develoOrderImgDiv">
                                <div className="develoOrederImg">      
                                    <img  src={pyton} height={134} width={132} alt='img' className='img__cardHide' />
                                </div>
                                <div  className = "botOrderText">
                                    <h5 className="BotOrderTitle">
                                        Pyton
                                    </h5>
                                </div>
                            </div>    
                            <div className="develoOrderImgDiv">
                                <div className="develoOrederImg">      
                                    <img  src={js} height={128} width={174} alt='img' className='img__cardHide' />
                                </div>
                                <div  className = "botOrderText">
                                    <h5 className="BotOrderTitle">
                                        JavaScript
                                    </h5>
                                </div>
                            </div>
                                <div className="develoOrderImgDiv">
                                    <div className="develoOrederImg">      
                                        <img  src={react} height={136} width={144} alt='img' className='img__cardHide' />
                                    </div>
                                    <div  className = "botOrderText">
                                        <h5 className="BotOrderTitle">
                                            React
                                        </h5>
                                    </div> 
                                </div>
                                <div className="develoOrderImgDiv">
                                    <div className="develoOrederImg">      
                                        <img  src={bitrex} height={57} width={212} alt='img' className='img__cardHide' />
                                    </div>
                                    <div  className = "botOrderText">
                                        <h5 className="BotOrderTitle">
                                            SRM
                                        </h5>
                                    </div> 
                                </div>
                        </div>
                        
            </section>
            <section className="cardDevelops">
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
            </section>
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