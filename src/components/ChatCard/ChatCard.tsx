import React, { useState, useEffect, useRef, useLayoutEffect, SetStateAction } from 'react';
import { ChatInterface } from '../../interfaces/data/dataInterfaces';

import './ChatCard.css';
import { convertTimestampTo24Hour } from '../../base/hooks';
import { useMeasure } from '@reactivers/hooks';

interface ChatCardProps {
    chat: ChatInterface;
    isCurrentlyOpen: boolean;
    handleClick: () => void;
};

const ChatCard = ( { chat: {name, type, chatPicture, participants, messages,}, isCurrentlyOpen, handleClick } : ChatCardProps ) => {
    const[nOfUnreadMsgs, setNoOfUnreadMsgs] = useState<number>(0);//the number of unread messages
    const ref = useRef<HTMLDivElement>(null);
    const [chatNameHeight, setChatNameHeight] = useState<number>(0);
    const chatNameRef = useRef<HTMLSpanElement> (null);

    const {height} = useMeasure({ref: chatNameRef});

    useEffect(
        () => {
            setChatNameHeight(height)
        },
        [height]
    )

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

    const trimAndAddElipses = (theString: string): string => {
        return theString;
    }

    return (
        <div className={`chat-card ${nOfUnreadMsgs>0?'chat-card_unread':''} ${isCurrentlyOpen?'chat-card_open':''}`} onClick={handleClick} ref={ref}>
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
                                <div className="chat-name">
                                    <div>
                                        {trimAndAddElipses(name)}
                                    </div>
                                </div>
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
                                            messages[messages.length - 1].content
                                        )
                                    }
                                </div>
                                
                            </div>
                        </div>
                        <div className="chat-card__info__unread-count">
                                    <span>
                                        {nOfUnreadMsgs<999?nOfUnreadMsgs:"999"}
                                    </span>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatCard