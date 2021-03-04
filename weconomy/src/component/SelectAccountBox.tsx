import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateNewAccountModal from './createNewAccountModal';
import { createNewAccountModalOpen } from '../store/actions/modalActions';

const SelectAccountBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userImage = useSelector(
    (state: RootState) => state.userStatus.userData?.thumbnail,
  );
  const Allgroups = useSelector((state: RootState) => state.userStatus.groups);
  const createNewAccount = () => {
    dispatch(createNewAccountModalOpen());
  };
  useEffect(() => {
    console.log(Allgroups);
  });
  const onClickGroup = () => {
    history.push('/accountpage');
  };
  return (
    <>
      <CreateNewAccountModal></CreateNewAccountModal>
      <div className="SelectAccountBox">
        {Allgroups.map((group: any) => (
          <div className="oneAccountBox">
            <div className="titleAccountBox">{group.meetName}</div>
            <div className="SelectAccountMembers">
              {group.Users.map((member: any) => (
                <div className="SelectOneMemberBox">
                  <img
                    className="SelectAccountMemberImg"
                    src={member.img}
                    alt="유저프로필"
                  ></img>
                  <div className="SelectAccountMemberName">{member.email}</div>
                </div>
              ))}
            </div>
            <button onClick={onClickGroup} className="SelectAccountJoinBtn">
              JOIN
            </button>
          </div>
        ))}

        {Allgroups.length < 4 ? (
          <div onClick={createNewAccount} className="AddAccountBox">
            <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
            <div className="titleAddAccountBox">새 그룹 생성</div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SelectAccountBox;
