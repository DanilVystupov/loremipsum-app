import React, { useEffect, useState } from 'react';
import './_scale.scss';

const ScaleAnimation = () => {
    const [fillWidth, setFillWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFillWidth(75);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='form_scale'>

            <div className='scale_text_wrap'>
                <div className='scale_text'>
                    Sed ut perspiciatis, unde omnis iste natus
                </div>
                <div className='scale_percent'>{fillWidth}%</div>
            </div>

            <div className='scale_fill' style={{ width: `${fillWidth}%` }}></div>
        </div>
    );
};

export default ScaleAnimation;
