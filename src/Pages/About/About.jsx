import React, {useState} from 'react';
import './About.css';
import {Button, Menu} from "../../Components";
import aboutImg from "../../assets/img2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import item22 from "../../assets/item22.jpg";
import cardimg1 from "../../assets/cardimg1.png";
import cardimg2 from "../../assets/cardimg2.png";
import cardimg3 from "../../assets/cardimg3.png";
import cardimg4 from "../../assets/cardimg4.png";



export const About = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

    return (
        <>
            <Menu active={burgerActive} setActive={setBurgerActive}/>
            <div className='aboutImage' style={{
                backgroundImage: `url(${aboutImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
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
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст текст текст тектс текст текст текст тектс
                            текст
                        </p>
                    </div>
                </div>
            </section>
            <section className="bottomContent">
                <div className="bottomWrapperAbout">
                    <div className="cards">
                        <div className="card">
                            <div className="inner__item">
                                <h5 className="itemFirstTitle">
                                    Саунд-дизайн
                                </h5>
                                <img src={item22} className="item__img"/>
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={cardimg1} height={85} width={390} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <h5 className="itemFirstTitle">
                                    Видеомонтаж
                                </h5>
                                <img src={item22} className="item__img"/>
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={cardimg2} height={102} width={340} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <h5 className="itemFirstTitle">
                                    3D графика
                                </h5>
                                <img src={item22} className="item__img"/>
                                <div className="item__title">
                                    <div className="itemHide">
                                        <img  src={cardimg3} height={87} width={145} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="inner__item">
                                <h5 className="itemFirstTitle">
                                    моушн дизайн
                                </h5>
                                <img src={item22} className="item__img"/>
                                <div className="item__title">
                                    <div className="itemHide">
                                        <span className='hide'> </span>
                                        <img  src={cardimg4} height={133} width={130} alt='img' className='img__cardHide' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <Button/>
                    </div>
                </div>
            </section>
        </>
    )
}
