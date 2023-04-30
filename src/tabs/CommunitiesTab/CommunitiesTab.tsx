import React from "react";

import './CommunitiesTab.css';
import { useAppDispatch, useAppSelector } from "../../base/hooks";
import { toggleTabIsOpen } from "../../features/ui/ui";
import ChatTabHeader from "../../components/ChatTabHeader/ChatTabHeader";

const CommunitiesTab = () => {
    const {CommunitiesTab} = useAppSelector(state => state.ui);

    const dispatch = useAppDispatch();

    return (
        <section className={`tab communities-tab ${CommunitiesTab.isOpen?'tab_visible':''}`}>
            <div>
                <ChatTabHeader
                    tabName="Communities"
                    closeTab={() => dispatch(toggleTabIsOpen({
                        tabName: "CommunitiesTab",
                    }))}
                />
            </div>
        </section>
    )
}

export default CommunitiesTab;