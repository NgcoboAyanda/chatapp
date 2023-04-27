import React, { ReactNode } from "react";
import './UIBtn.css';


interface UIBtnProps {
    label: string //the label of the button
    icon: ReactNode //the svg icon,
    onClick: () => void; //the click handler
}

const UIBtn = ( { label, icon, onClick } : UIBtnProps ) => {

    //will be called when the button is clicked
    const click = (e: Object) => {
        if(onClick) onClick();
    }

    return (
        <button className="ui-button" onClick={e=>click(e)}>
            <div>
                {icon}
            </div>
        </button>
    )
}

export default UIBtn;