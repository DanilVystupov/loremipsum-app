import React from 'react';
import './_footer.scss';
import '../../styles.scss';
import qiwi from './images/qiwi-icon.svg';
import yandex from './images/yandex.money-icon.svg';
import web_money from './images/web-money-icon.svg';
import mail from './images/mail-icon.svg';
import vk from './images/vk-icon.svg';

const Footer = () => {
    return (
        <footer>
            <div className='container'>

                <div className='footer_wrapper'>

                    <div className='brand_wrap'>

                        <div className='brand_text'>
                            © 2018 «LoremIpsum.net» Все права защищены.
                        </div>

                        <span className='slash'>
                            |
                        </span>
                    </div>

                    <div className='social_wrap'>

                        <div className='title'>
                            <img src={qiwi} alt="Qiwi wallet" />
                            <span>Qiwi wallet</span>
                        </div>

                        <div className='title'>
                            <img src={yandex} alt="Yandex Money" />
                            <span>Yandex Money</span>
                        </div>

                        <div className='title'>
                            <img src={web_money} alt="Web Money" />
                            <span>Web Money</span>
                        </div>
                    </div>

                    <span className='slash'>
                        |
                    </span>


                    <div className='contacts_wrap'>

                        <div className='title'>
                            <img src={mail} alt="Mail" />
                            <a href="https://mail.ru/" target="_blank" rel="noopener noreferrer">
                                info@ipsum228.com
                            </a>
                        </div>

                        <div className='title'>
                            <img src={vk} alt="Вконтакте" />
                            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                                Мы вконтакте
                            </a>
                        </div>

                    </div>

                </div>


            </div>
        </footer>
    )
}

export default Footer
