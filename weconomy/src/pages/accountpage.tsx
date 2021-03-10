import * as React from 'react';
import AccountGraph from '../component/accountGraph';
import AccountByDay from '../component/accountByDay';
import AccountSideBar from '../component/accountSideBar';
import NowLoading from '../component/nowLoading';
import Nav from '../component/nav';
import AddMemberModal from '../component/addMemberModal';
import UpdateGroupModal from '../component/updateGroupModal';
import NotAMember from '../component/notAMember';
import { RootState } from '../store/reducers';
import useMedia from '../customhooks/useMedia';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  loadingWorkerStart,
  nowLoadingOff,
} from '../store/actions/modalActions';
import UpdateContentModal from '../component/updateContentModal';
import OutOfAccountModal from '../component/outOfAccountModal';
import SeeDetailModal from '../component/seeDetailModal';
import { getUserDataAgain } from '../store/actions/userActions';
interface ParamsId {
  id: string;
}

const AccountPage: React.FC = () => {
  const dispatch = useDispatch();
  const params: ParamsId = useParams();
  const { isMobile } = useMedia();

  const isLoading = useSelector(
    (state: RootState) => state.modalStatus.nowLoading,
  );
  const groupData = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );
  const userData = useSelector((state: RootState) => state.userStatus.userData);

  useEffect(() => {
    dispatch(loadingWorkerStart());
    dispatch(getUserDataAgain(userData?.id));
    console.log(groupData, 'asdasd');
  }, []);

  return (
    <>
      <Nav></Nav>
      {groupData.length === 0 ? (
        <NotAMember></NotAMember>
      ) : (
        <>
          <AddMemberModal></AddMemberModal>
          <UpdateGroupModal></UpdateGroupModal>
          <UpdateContentModal></UpdateContentModal>
          <OutOfAccountModal></OutOfAccountModal>
          <SeeDetailModal></SeeDetailModal>
          {!isLoading ? (
            <>
              {isMobile ? (
                <div className="Account-container">
                  <div className="notice-Section"></div>

                  <AccountGraph></AccountGraph>
                  <div className="Account-container2">
                    <AccountByDay></AccountByDay>
                  </div>
                </div>
              ) : (
                <div className="Account-container">
                  <div className="notice-Section"></div>
                  <div className="content-Section">
                    <AccountSideBar></AccountSideBar>
                    <AccountGraph></AccountGraph>
                    <AccountByDay></AccountByDay>
                  </div>
                </div>
              )}
            </>
          ) : (
            <NowLoading></NowLoading>
          )}
        </>
      )}
    </>
  );
};

export default AccountPage;
