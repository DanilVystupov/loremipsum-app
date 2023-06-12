import React from 'react';
import './_intro.scss';
import '../../../styles.scss';

const Intro = () => {
    return (

        <div className='intro'>

            <div className='container'>

                <div className='intro_title'>
                    <h1>
                        <span>Lorem ipsum</span> dolor sit ametconsectetur <span>adipiscing</span>
                    </h1>
                </div>

                <div className='intro_subtitle'>

                    <h2>At vero eos et accusamus et iusto odio dignissimos ducimus!</h2>
                    <p>- Totam rem aperiam eaque ipsa</p>
                    <p>- Sit voluptatem accusantium doloremque laudantium</p>
                    <p>- Sed ut perspiciatis, unde omnis iste natus error</p>

                </div>

                <div className='intro_button_wrap'>
                    <button>заказать</button>
                    <button>подробнее</button>
                </div>
            </div>

        </div>

    )
}

export default Intro;
