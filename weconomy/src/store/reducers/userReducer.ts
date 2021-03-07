import { IS_LOGIN, SUCCESS_LOGIN, SAVE_USER_DATA, LOG_OUT_USER, GET_USERNOW_GROUP } from '../actions/constants'
import { UserAction } from '../actions/userActions'


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
  groups : Array<object> | null
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
  groups : null,
  meets : null
}

const userReducer = (state: Props = initialState, action: any) => {
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
        groups : null
      }
    case GET_USERNOW_GROUP : 
      return {
        ...state,
        groups : action.data
      }
    default:
      return state
  }
};

export default userReducer