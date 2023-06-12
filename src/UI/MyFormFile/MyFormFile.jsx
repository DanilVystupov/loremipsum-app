import React from 'react'
import './_myFormFile.scss';

const MyFormFile = () => {
    return (
        <form className='form_file' type="submit">
            <label htmlFor="file-input">
                <span className='icon'></span> Прикрепить файл
            </label>
            <input id="file-input" type="file" />
        </form>
    )
}

export default MyFormFile
