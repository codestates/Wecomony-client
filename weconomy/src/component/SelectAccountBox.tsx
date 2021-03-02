import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router-dom';

const SelectAccountBox = () => {
  const history = useHistory();
  const userImage = useSelector(
    (state: RootState) => state.userStatus.userData?.thumbnail,
  );

  const onClickGroup = () => {
    history.push('/accountpage');
  };
  return (
    <div className="SelectAccountBox">
      <div className="oneAccountBox">
        <div className="titleAccountBox">xx네 가계부</div>
        <div className="SelectAccountMembers">
          <div className="SelectOneMemberBox">
            <img
              className="SelectAccountMemberImg"
              src={userImage}
              alt="유저프로필"
            ></img>
            <div className="SelectAccountMemberName">멤버1</div>
          </div>
          <div className="SelectOneMemberBox">
            <img
              className="SelectAccountMemberImg"
              src={userImage}
              alt="유저프로필"
            ></img>
            <div className="SelectAccountMemberName">멤버1</div>
          </div>
          <div className="SelectOneMemberBox">
            <img
              className="SelectAccountMemberImg"
              src={userImage}
              alt="유저프로필"
            ></img>
            <div className="SelectAccountMemberName">멤버1</div>
          </div>
        </div>
        <button onClick={onClickGroup} className="SelectAccountJoinBtn">
          JOIN
        </button>
      </div>

      <div className="AddAccountBox">
        <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
        <div className="titleAddAccountBox">새 그룹 생성</div>
      </div>
    </div>
  );
};

export default SelectAccountBox;
