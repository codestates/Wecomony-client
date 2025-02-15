import { IS_LOGIN, SUCCESS_LOGIN, SAVE_USER_DATA, LOG_OUT_USER, GET_USERNOW_GROUP, SAVE_USER_GOOGLE } from '../actions/constants'
import { UserAction } from '../actions/userActions'
import { Reducer } from 'redux';


interface userObjType {
    id : number | null
    access_token : string | null
    refresh_token : string | null
    nickname : string | null
    thumbnail : string | null
    email : string | null
}
interface Props {
  isLogin : boolean
  userData : userObjType | null
  groups : any
  meets: Array<object> | null
}

const initialState = {
  isLogin : false,
  userData : {
    id : null,
    access_token : null,
    refresh_token : null,
    nickname : null,
    thumbnail : null,
    email : null
  },
  groups : [],
  meets : null
}

const userReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {

    case SUCCESS_LOGIN :
      return {
        ...state,
        isLogin : true
      }
    case SAVE_USER_DATA :
      return {
        ...state,
        userData: {
          ...state.userData,
          id : action.data.id,
          access_token : action.data.response.access_token,
          refresh_token : action.data.response.refresh_token,
          nickname : action.data.profile.properties.nickname,
          thumbnail : action.data.profile.properties.thumbnail_image,
          email :  action.data.profile.kakao_account.email
        }
      }
    case LOG_OUT_USER : 
      return {
        ...state,
        isLogin : false,
        userData : {
          ...state.userData,
          id : null,
          access_token : null,
          refresh_token : null,
          nickname : null,
          thumbnail : null,
          email : null
        },
        groups : []
      }
    case GET_USERNOW_GROUP : 
      return {
        ...state,
        groups : action.data
      }
    case SAVE_USER_GOOGLE : 
      return {
        ...state,
        userData : {
          ...state.userData,
          id : action.data.id,
          thumbnail : action.data.imageUrl,
          email :  action.data.email
        }
      }
    default:
      return state
  }
};

export default userReducer