import { useState } from 'react';
import './Input.css';

export const Input = ({ label, id, type, inputClassName }) => {
    const [inputFocused, changeInputFocused] = useState(false);

    const returnLabelBackDown = (event) => {
        const curInputField = event.target;
        if (curInputField.value === '') {
            changeInputFocused(false);
        }
    }

    return (
        <div className={'sb-input ' + (inputFocused ? 'focused' : '')}>
            <label htmlFor={id} className='sb-input__label'>{ label }</label>
            <input  type={type} id={id}
                    onFocus={(e) => changeInputFocused(true)}
                    onBlur={returnLabelBackDown}
                    className='sb-input__field'/>
        </div>
    );
};