//ALL INTERFACES FOR DATA STATE

import { UserInterface } from "../user/userInterfaces"

export interface ContactInterface {
    displayName: string,
    profilePicURL: string,
    phoneNumber: string,
    about: string,
    lastSeen: string,
}

export interface MessageInterface {
    author: ContactInterface,
    content: string,
    timeStamp: number,
    read: boolean,
}

export interface ChatInterface {
    name: string,
    type: string,
    id: number,
    chatPicture: string,
    participants?: Array<string>,
    messages: Array<MessageInterface>
    contactLastSeen?:string
}

export {}