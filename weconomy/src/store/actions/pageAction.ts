import { CHANGE_DETAIL_DATE } from './constants'

export const changeDetailDate = (date: Date | null) => {
  return { type : CHANGE_DETAIL_DATE, date}
}

export type PageAction = | ReturnType<typeof changeDetailDate>