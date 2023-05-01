import React from 'react';

import './UserProfileTab.css';
import ChatTabHeader from '../../components/ChatTabHeader/ChatTabHeader';
import { useAppDispatch, useAppSelector } from '../../base/hooks';
import { toggleTabIsOpen } from '../../features/ui/ui';


const UserProfileTab = ( ) => {
    const {user} = useAppSelector(state => state);
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
                <div className="user-profile-tab__picture">
                    <div>
                        <img src={user.profilePicURL} alt="Your profile picture" />
                    </div>
                </div>
                <div className="user-profile-tab__name">
                    <div>
                        <div className="label">
                            Your name
                        </div>
                        <div className="text">
                            {user.displayName}
                        </div>
                        <div className="message">
                            This is not your username or pin. This name will be visible to your ChatApp contacts.
                        </div>
                    </div>
                </div>
                <div className="user-profile-tab__about">
                    <div>
                        <div className="label">
                            About
                        </div>
                        <div className="text">
                            {user.about}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfileTab;