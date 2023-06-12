import React from 'react';
import './_formOrder.scss';
import '../../../styles.scss';
import MySelect from './../../../UI/MySelect/MySelect';
import MyFormFile from './../../../UI/MyFormFile/MyFormFile';
import ScaleAnimation from './../../../UI/ScaleAnimation/Scale';

const FormOrder = () => {
    return (
        <>
            <div className='form_container'>
                <div className='container'>

                    <div className='form_wrapper'>
                        <MySelect />

                        <input className='form_input' type="text" placeholder='Ваш e-mail' />
                        <input className='form_input' type="text" placeholder='Ваше Имя' />

                        <ScaleAnimation />
                        <MyFormFile />
                    </div>

                    <div className='send_btn'>
                        <button>
                            отправить
                        </button>
                    </div>

                </div>
            </div >
        </>
    )
}

export default FormOrder;