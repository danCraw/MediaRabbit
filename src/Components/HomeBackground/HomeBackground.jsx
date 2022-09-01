import React from 'react';

import homeBg from '../../assets/fon.svg';
import mainscreenimg1 from '../../assets/mainscreenimg1.png';
import mainscreenimg2 from '../../assets/mainscreenimg2.png';
import mainscreenimg3 from '../../assets/mainscreenimg3.png';
import mainscreenimg4 from '../../assets/mainscreenimg4.png';
import tvRabbit from '../../assets/svg/tvrabbit.svg';
import gif from '../../assets/gif/main.gif';
import './HomeBackground.css';
import { Link } from 'react-router-dom';


export const HomeBackground = () => {
    return (
        <>
         <div className='homeBackground'style={{
             backgroundImage: `url(${homeBg})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
         }}>
            <div className='mainScreenСontent'>
             <div className='homeBtn__container'>
                    <div>
                    <h1 className="mainScreentitle">Mediarabbit</h1>
                    </div>
                    <div className='mainScreenInformation'>
                        <div className='mainScreenImg'>
                            <img  src={mainscreenimg1} height={25} width={25} alt='img' className='imgMainScreen' />
                        </div>
                        <div className=''>
                            <p className="textMainScreen">
                                Разработка сайтов 
                            </p>
                        </div>
                    </div>
                    <div className='mainScreenInformation'>
                        <div className='mainScreenImg'>
                            <img  src={mainscreenimg2} height={25} width={25} alt='img' className='imgMainScreen' />
                        </div>
                        <div className=''>
                            <p className="textMainScreen">
                                 Разработка чат-бота                            
                            </p>
                        </div>
                    </div>
                    <div className='mainScreenInformation'>
                        <div className='mainScreenImg'>
                            <img  src={mainscreenimg3} height={25} width={25} alt='img' className='imgMainScreen' />
                        </div>
                        <div className=''>
                            <p className="textMainScreen">
                                Дизайн 
                            </p>
                        </div>
                    </div>
                    <div className='mainScreenInformation'>
                        <div className='mainScreenImg'>
                            <img  src={mainscreenimg4} height={25} width={25} alt='img' className='imgMainScreen' />
                        </div>
                        <div className=''>
                            <p className="textMainScreen">
                                Поддержка ваших проектов
                            </p>
                        </div>
                    </div>
                    <div>
                    <Link to="/contacts">
                        <button className='button__home'>Оставить заявку</button>
                    </Link>
                    </div>
             </div>
             <div className='homeImage' style={{
                 backgroundImage: `url(${tvRabbit})`,
                 backgroundPosition: 'right',
                 backgroundSize: 'right',
                 backgroundRepeat: 'no-repeat'
             }}>
                <img src={gif} width={260} height={200} className='gif'/>
             </div>
             </div>    
         </div>
        </>
    )
}