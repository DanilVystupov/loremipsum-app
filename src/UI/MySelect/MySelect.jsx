import React, { useState } from 'react';
import Select from 'react-select';
import '@fortawesome/fontawesome-free/css/all.min.css';

const options = [
    { value: 'system type', label: 'ТИП СИСТЕМЫ' },
    { value: 'sed ut perspiciatis', label: 'Sed ut perspiciatis' },
    { value: 'nemo enim ipsam', label: 'Nemo enim ipsam' },
    { value: 'et harum quidem', label: 'Et harum quidem' },
    { value: 'temporibus autem', label: 'Temporibus autem' },
    { value: 'itaque earum rerum', label: 'Itaque earum rerum' },
    { value: 'sed ut perspiciatis', label: 'Sed ut perspiciatis' },
    { value: 'nemo enim ipsam', label: 'Nemo enim ipsam' },
    { value: 'et harum quidem', label: 'Et harum quidem' },
    { value: 'temporibus autem', label: 'Temporibus autem' },
    { value: 'itaque earum rerum', label: 'Itaque earum rerum' },
];

console.log(options)


const MySelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        control: (styles) => ({
            ...styles,
            width: '100%',
            height: '100%',
            border: '1px solid #FFFFFF',
            borderRadius: '3px',
            background: 'rgba(255, 255, 255, 0.85)',
            fontSize: '18px',
            fontWeight: 400,
        }),
        menu: (styles) => ({
            ...styles,
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#3E9CDC #3D4050',
            margin: 0,
            background: 'rgba(39, 39, 51, 0.9)',
        }),
        option: (styles, state) => ({
            ...styles,
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
            color: state.data === options[0]
                ? ('grey')
                : (state.isFocused ? 'rgba(66, 169, 237, 1)' : '#fff'),
            background: 'rgba(39, 39, 51, 0.9)',
            pointerEvents: state.data === options[0] ? 'none' : 'auto',
            borderBottom: state.data === options[0] ? 'none' : '1px solid grey',
            marginTop: '15px',
        }),
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <>
            <Select
                className="system_type"
                placeholder="Выберите тип системы"
                styles={customStyles}
                options={options}
                value={selectedOption}
                onChange={handleChange}
                isSearchable={true}
            />
        </>
    );
};

export default MySelect;
