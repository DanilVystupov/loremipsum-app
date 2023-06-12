import React from 'react';
import './_order.scss';
import '../../../styles.scss';

const Order = () => {
    return (
        <div className='order_wrapper'>
            <div className='container'>

                <div className='order_title'>
                    <h1>
                        Оформление <span>заказа</span>
                    </h1>

                    <p>
                        Перед заполнением формы ознакомьтесь с нашей схемой работы!
                    </p>
                </div>


                <div className='circles_main'>

                    <div className='circle_wrap'>
                        <div className='circle_item'>
                            <div className="circle">
                                <div className="icon1"></div>
                            </div>
                            <p>
                                Lorem ipsum dolorsit amet
                            </p>
                        </div>
                        <div className='circle_point-wrap'>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                        </div>
                    </div>


                    <div className='circle_wrap'>
                        <div className='circle_item'>
                            <div className="circle">
                                <div className="icon2"></div>
                            </div>

                            <p>
                                Сonsecteturadipiscing elit
                            </p>
                        </div>
                        <div className='circle_point-wrap'>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                        </div>
                    </div>


                    <div className='circle_wrap'>
                        <div className='circle_item'>
                            <div className="circle">
                                <div className="icon3"></div>
                            </div>

                            <p>
                                Sed do eiusmod tempor
                            </p>
                        </div>
                        <div className='circle_point-wrap'>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                        </div>
                    </div>


                    <div className='circle_wrap'>
                        <div className='circle_item'>
                            <div className="circle">
                                <div className="icon4"></div>
                            </div>

                            <p>
                                Esse cillum doloreeu fugiat
                            </p>
                        </div>
                        <div className='circle_point-wrap'>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                            <li className="circle_point"></li>
                        </div>
                    </div>


                    <div className='circle_wrap'>
                        <div className='circle_item'>
                            <div className="circle">
                                <div className="icon5"></div>
                            </div>

                            <p>
                                Excepteur sint occaecat cupidatat non proident
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Order;