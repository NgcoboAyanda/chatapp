import React, { useState, useEffect } from 'react';
import { ChatInterface } from '../../interfaces/data/dataInterfaces';

import './ChatCard.css';
import { convertTimestampTo24Hour } from '../../base/hooks';

interface ChatCardProps extends ChatInterface {

};

const ChatCard = ( { name, type, chatPicture, participants, messages } : ChatCardProps ) => {
    const[nOfUnreadMsgs, setNoOfUnreadMsgs] = useState<number>(0);//the number of unread messages


    useEffect(
        () => {
            let n = 0;
            messages.forEach( msg =>{
                //if message is unred we increase count
                if(!msg.read){
                    n++;
                }
            });
            setNoOfUnreadMsgs(n);
        },
        [messages]
    )

    const trimAndAddElipses = (theString: string, idealLength: number): string => {
        let result = "";
        if(theString.length >= idealLength){
            if(idealLength > 3){
                result = theString.slice(0 , idealLength-3)+"...";
            }
            else{
                result = theString.slice(0 , idealLength)+"...";
            }
        }
        else {
            result = theString;
        }
        return result;
    }

    return (
        <div className={`chat-card ${nOfUnreadMsgs>0?'chat-card_unread':''}`}>
            <div>
                <div className="chat-card__profile-pic">
                    <div>
                        <img src={chatPicture} alt={name} />
                    </div>
                </div>

                <div className="chat-card__info">
                    <div>
                        <div className="chat-card__info__title">
                            <div>
                                <span className="chat-name">
                                    {trimAndAddElipses(name, 25)}
                                </span>
                                <span className="chat-time">
                                    {
                                        /* get last message time and use a function to convert it to 24 hour format */
                                        convertTimestampTo24Hour( messages[messages.length - 1].timeStamp )   
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="chat-card__info__message">
                            <div>
                                <div className="chat-card__info__message__author-and-content">
                                    ~
                                    {
                                        /* get the last message author */
                                        messages[messages.length - 1].author.displayName
                                    }
                                    :&nbsp;
                                    {
                                        /* get the last message content */
                                        trimAndAddElipses(
                                            messages[messages.length - 1].content,
                                            17
                                        )
                                    }
                                </div>
                                <div className="chat-card__info__message__unread-count">
                                    <span>
                                        {nOfUnreadMsgs<999?nOfUnreadMsgs:"999"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatCard