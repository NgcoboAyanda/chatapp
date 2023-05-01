import React from "react";

import './InputText.css';

interface InputTextProps {
    placeholder: string;
    value: string;
    handleChange: (newValue: string) => void;
}

const InputText = ({placeholder, value, handleChange}: InputTextProps) => {

    return (
        <div className="input-text">
            <div>
                <input type="text" value={value} placeholder={placeholder} onChange={e=>handleChange(e.target.value)} />
            </div>
        </div>
    )
}

export default InputText;