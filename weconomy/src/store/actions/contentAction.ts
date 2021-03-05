import { CREATE_NEW_CONTENT } from './constants';

export const createNewContent = (value: Array<object>) => {
    return { type : CREATE_NEW_CONTENT, value }
} 

export type ContentAction = | ReturnType<typeof createNewContent>;