import React, {useState} from "react";
import {Button, Menu} from "../../Components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import item22 from "../../assets/item22.jpg";
import cardimg1 from "../../assets/cardimg1.png";
import cardimg2 from "../../assets/cardimg2.png";
import cardimg3 from "../../assets/cardimg3.png";
import cardimg4 from "../../assets/cardimg4.png";
import postImage from '../../assets/svg/post.svg';
import './Post.css';

export const Post = () => {
    const [ burgerActive, setBurgerActive ] = useState(false);

    return (
     <>
         <Menu active={burgerActive} setActive={setBurgerActive}/>
         <div className='backgroundServe'>
            <div className='postBack'>
                <div className='postBackgroundCol'>
                    <h3 className='serveTitle'>постпродакшн</h3>
                    <p className='serveDescription'>
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст текст текст
                        текст текст текст тектс текст
                    </p>
                </div>
                <div className='postBackgroundCol'>
                    <img src={postImage} className='postImage' height={560}/>
                </div>
            </div>
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
                     <Link to="/contacts">
                         <Button/>
                     </Link>
                 </div>
             </div>
         </section>
     </>
    )
}