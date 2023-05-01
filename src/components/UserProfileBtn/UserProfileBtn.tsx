import React from "react";

import './UserProfileBtn.css';
import { useAppDispatch, useAppSelector } from "../../base/hooks";
import { toggleTabIsOpen } from "../../features/ui/ui";

interface ProfileBtnProps {
    image: string,//this is a link
    alt: string,//this is the image alt text
}

const ProfileBtn = ({ image, alt } : ProfileBtnProps) => {
    const {user} = useAppSelector(state => state);

    const dispatch = useAppDispatch();

    return (
        <button className="userProfileBtn" onClick={()=> dispatch(toggleTabIsOpen({
            tabName: "UserProfileTab"
        }))}>
            <div>
                <img className="userProfileBtn__img" src={user.profilePicURL} alt="Your profile picture" />
            </div>
        </button>
    )
}

export default ProfileBtn;