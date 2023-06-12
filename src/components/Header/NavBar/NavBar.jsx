import React, { useState } from 'react';
import './_navBar.scss';
import '../../../styles.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {

    const [nav, setNav] = useState(false);

    return (
        <header>
            <div className='container'>

                <div className='header_wrap'>

                    <div className='header_title'>
                        LOREMIPSUM.<span>NET</span>
                    </div>

                    <ul
                        className={nav ? "list active" : "list"}
                        onClick={() => setNav(false)}

                    >
                        <li onClick={e => e.stopPropagation()}>
                            <a href="##">Бизнес</a>
                        </li>
                        <li onClick={e => e.stopPropagation()}>
                            <a href="##">О нас</a>
                        </li>
                        <li onClick={e => e.stopPropagation()}>
                            <a href="##">Цены</a>
                        </li >
                        <li onClick={e => e.stopPropagation()}>
                            <a href="##">Оформить заказ</a>
                        </li>
                    </ul>


                    <div onClick={() => setNav(!nav)} className="mobile_btn">
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>

                </div>

            </div>
        </header >
    )
}

export default NavBar
