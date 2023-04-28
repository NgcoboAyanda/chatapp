import React, { ReactNode } from 'react';

import './FilterBtn.css';

interface FilterBtnProps {
    enabled: boolean; // true or false
    icon: ReactNode;
    toggle: () => void;
}

const FilterBtn = ( { enabled, icon, toggle } : FilterBtnProps ) => {



    return(
        <button className={`filter-btn ${enabled?'filter-btn_enabled':'filter-btn_disabled'}`} onClick={() => toggle()}>
            <div>
                {icon}
            </div>
        </button>
    )
}

export default FilterBtn;