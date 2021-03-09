import { CREATE_NEW_CONTENT, UPDATE_CONTENT, DELETE_CONTENT } from './constants';

interface UpdateData  {
    userId: number
    contentId: number
    desc : string
    cost : string
  };

export const createNewContent = (value:any) => {
    return { type : CREATE_NEW_CONTENT, value }
}

export const updateContent = (data: UpdateData) => {
    return { type : UPDATE_CONTENT, data }
}

export const deleteContent = (data: any) => {
    return { type : DELETE_CONTENT, data }
}

export type ContentAction = | ReturnType<typeof createNewContent>;