import { IS_LOGIN, SUCCESS_LOGIN, SAVE_TOKEN, SAVE_USER_DATA } from '../actions/constants'
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
  }
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
          id : action.data.profile.id,
          access_token : action.data.response.access_token,
          refresh_token : action.data.response.refresh_token,
          nickname : action.data.profile.properties.nickname,
          thumbnail : action.data.profile.properties.thumbnail_image,
          email :  action.data.profile.kakao_account.email
        }
      }
    default:
      return state
  }
};

export default userReducer