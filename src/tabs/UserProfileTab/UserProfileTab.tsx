import React from 'react';

import './UserProfileTab.css';
import ChatTabHeader from '../../components/ChatTabHeader/ChatTabHeader';
import { useAppDispatch, useAppSelector } from '../../base/hooks';
import { toggleTabIsOpen } from '../../features/ui/ui';


const UserProfileTab = ( ) => {
    const {UserProfileTab} = useAppSelector(state => state.ui);

    const dispatch = useAppDispatch();

    return (
        <section className={`tab ${UserProfileTab.isOpen?'tab_visible':''} user-profile-tab`}>
            <div>
                <ChatTabHeader
                    tabName="Profile"
                    closeTab={() =>dispatch(toggleTabIsOpen({
                        tabName:"UserProfileTab"
                    }))}
                />
            </div>
        </section>
    );
};

export default UserProfileTab;