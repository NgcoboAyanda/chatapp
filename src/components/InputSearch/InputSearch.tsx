import React from "react";

import './InputSearch.css';

interface InputSearchProps {
    placeholder: string;
    value: string;
    handleChange: (e: any) => void;
}

const InputSearch = ({placeholder, value, handleChange}: InputSearchProps) => {
    
    return (
        <div className="input input-search">
            <div>
                <div className="input-search__box">
                    <input className="" type="text" onChange={e => handleChange(e.target.value)} placeholder="Search or start new chat"/>
                </div>
            </div>
        </div>
    )
}

export default InputSearch;