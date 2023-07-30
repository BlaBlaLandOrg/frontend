
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

export const settings: Setting[] = [
    { id: 'teacher', name: 'be my teacher' },
    { id: 'partner', name: 'be my partner' },
    { id: 'story', name: 'tell me a story' },
    { id: 'support', name: 'give me moral support' },
    { id: 'friend', name: 'be my childhood friend' },
    { id: 'angry', name: 'be really upset' },
    { id: 'memelord', name: 'speak in dank memes' },
];