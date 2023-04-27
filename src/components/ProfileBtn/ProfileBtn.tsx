import React from "react";

import './ProfileBtn.css';

interface ProfileBtnProps {
    image: string,//this is a link
    alt: string,//this is the image alt text
    openProfile: () => void; //this is a function that will be called when the profileBtn component is clicked. it will open the Profile component.
}

const ProfileBtn = ({ image, alt, openProfile } : ProfileBtnProps) => {

    //will be called when the profileBtn component is clicked
    const click = (e: Object) => {
        if(openProfile) openProfile();
    }

    return (
        <button className="profileBtn" onClick={e=>click(e)}>
            <div>
                <img className="profileBtn__img" src={image} alt={alt} />
            </div>
        </button>
    )
}

export default ProfileBtn;