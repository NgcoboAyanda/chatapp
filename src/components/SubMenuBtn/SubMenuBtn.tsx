import React, { useEffect, useState } from 'react';

import './SubMenuBtn.css';
import TabBtn from '../TabBtn/TabBtn';

interface SubMenuBtnProps {
    options: Array<{
        label: string,
    }>;
}

const SubMenuBtn = ( { options } : SubMenuBtnProps ) => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(
        ()=> {
            //console.log(open)
        },
        [open]
    )

    const renderOptions = () => {
        return options.map( (option, i) => {
            return(
                <div className="option" key={i}>
                    {option.label}
                </div>
            )
        } )
    }

    return (
        <button className={`btn sub-menu-btn ${open?'sub-menu-btn_clicked':''}`}>
            <div>
                <div className="sub-menu-btn__icon" onClick={()=>setOpen(!open)}>
                    <div>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </div>
                </div>
                <div className={`sub-menu-btn__options ${open?'':'sub-menu-btn__options_hidden'}`}>
                    <div>
                        {renderOptions()}
                    </div>
                </div>
            </div>
        </button>
    )
}

export default SubMenuBtn;