
export interface Companion {
    name: string;
    id: string;
    avatar?: string;
}

export interface Setting {
    name: string;
    id: string;
    prompt?: string;
}

export interface Message {
    role: 'system' | 'assistant' | 'user';
    content: string;
}