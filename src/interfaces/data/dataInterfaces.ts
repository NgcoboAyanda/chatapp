//ALL INTERFACES FOR DATA STATE

export interface ContactInterface {
    name: string,
    phone: string,
    lastSeen: string,
}

export interface MessageInterface {
    author: string,
    content: string,
    timeStamp: string
}

export interface ChatInterface {
    name: string,
    type: string,
    participants: Array<string>,
    messages: Array<MessageInterface>
}



export {}