import React, { ReactNode } from "react";
import './TabBtn.css';


/* This button, when clicked, will open a tab */

interface TabBtnProps {
    label: string //the label of the button
    icon: ReactNode //the svg icon,
    isOpen: boolean //whether the tab is open or not
    openTab: () => void; //the click handler
}

const TabBtn = ( { label, icon, openTab, isOpen } : TabBtnProps ) => {

    //will be called when the button is clicked
    const click = (e: Object) => {
        if(openTab) openTab();
    }

    return (
        <button className={`btn tab-btn ${isOpen?'tab-btn_clicked':''}`} onClick={e=>click(e)}>
            <div>
                {icon}
            </div>
        </button>
    )
}

export default TabBtn;