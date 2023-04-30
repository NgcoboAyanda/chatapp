import React from "react";

import './UserProfileBtn.css';
import { useAppDispatch } from "../../base/hooks";
import { toggleTabIsOpen } from "../../features/ui/ui";

interface ProfileBtnProps {
    image: string,//this is a link
    alt: string,//this is the image alt text
    openProfile: () => void; //this is a function that will be called when the profileBtn component is clicked. it will open the Profile component.
}

const ProfileBtn = ({ image, alt, openProfile } : ProfileBtnProps) => {

    const dispatch = useAppDispatch();

    return (
        <button className="userProfileBtn" onClick={()=> dispatch(toggleTabIsOpen({
            tabName: "UserProfileTab"
        }))}>
            <div>
                <img className="userProfileBtn__img" src={image} alt={alt} />
            </div>
        </button>
    )
}

export default ProfileBtn;