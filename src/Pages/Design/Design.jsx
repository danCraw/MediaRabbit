import React, {useState} from "react";
import {Button, Menu} from "../../Components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import cup from "../../assets/cup.png";
import playbutton from "../../assets/playbutton.png";
import Rectangle48 from "../../assets/Rectangle 48.png";
import {Link} from "react-router-dom";
import designImg from "../../assets/svg/design.svg";
import './Design.css';


export const Design = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

    return (
        <>

<section className="dedigntextsection">
                <div className="dedigntext">
                    <h2 className="designh">
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                    </h2>
                    <h2 className="designh">
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                    </h2>
                    <h2 className="designh">
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                        <span className="designspan">Дизайн</span>
                    </h2>
                    <h2 className="designh"> <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span ><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span></h2>
                    <h2 className="designh"> <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span ><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span></h2>
                    <h2 className="designh"> <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span ><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span></h2>
                    <h2 className="designh"> <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span ><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span></h2>
                    <h2 className="designh"> <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span ><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span></h2>
                    <h2 className="designh"> <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span ><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span>
                    <span className="designspan">Дизайн</span><span className="designspan">Дизайн</span><span className="designspan">Дизайн</span></h2>
                </div>
                {/* <h1 className="first__title">Дизайн</h1> */}
            </section>
            <script>
                const position
            </script>
            <Menu active={burgerActive} setActive={setBurgerActive}/>
            {/* <div className='designImage' style={{
                backgroundImage: `url(${designImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div> */}
            
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
                <div className="designBottom">
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
                                    <img  src={cup} height={210} width={90} alt='img' className='imagecards' />
                                    <p className="textcard">
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
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
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                    </p>
                                    <img  src={playbutton} height={100} width={200} alt='img' className='imagecards' />
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
                                            постпродакшн
                                        </h5>
                                    </div>
                                </div>
                                <div className="back">
                                    <img  src={playbutton} height={160} width={194} alt='img' className='imagecards' />
                                    <p className="textcard">
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
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
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                    </p>
                                    <img  src={playbutton} height={100} width={200} alt='img' className='smartphones' />
                                </div>
                            </div>
                        </div>
                        <div className="cardGridItem">
                            <div className="flip">
                                <div className="front">
                                    <div className="front1">
                                        <h5 className="text-shadow">
                                            постпродакшн
                                        </h5>
                                    </div>
                                </div>
                                <div className="back">
                                    <img  src={playbutton} height={160} width={194} alt='img' className='imagecards' />
                                    <p className="textcard">
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
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
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                        Текст текст Текст текст Текст текст
                                    </p>
                                    <img  src={playbutton} height={100} width={200} alt='img' className='smartphones' />
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