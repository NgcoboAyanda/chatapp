//ALL INTERFACES FOR DATA STATE

import { UserInterface } from "../user/userInterfaces"

export interface ContactInterface {
    name: string,
    phone: string,
    lastSeen: number,
}

export interface MessageInterface {
    author: UserInterface,
    content: string,
    timeStamp: number,
    read: boolean,
}

export interface ChatInterface {
    name: string,
    type: string,
    chatPicture: string,
    participants: Array<string>,
    messages: Array<MessageInterface>
}

export {}