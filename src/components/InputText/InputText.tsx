import React from "react";

import './InputText.css';

interface InputTextProps {
    placeholder: string;
    value: string;
    onChange: (e: Object) => string;
}

const InputText = ({placeholder, value, onChange}: InputTextProps) => {
    
    return (
        <input type="text" className="input-text" onChange={e=>onChange(e)}/>
    )
}

export default InputText;