import { CHANGE_DETAIL_DATE } from '../actions/constants'

interface state {
  detailDate : Date
}


const initialState = {
  detailDate : new Date()
}

const pageReducer = (state: state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_DETAIL_DATE : 
      return {
        ...state,
        detailDate : action.date
      }
    default:
      return state
  }
}

export default pageReducer