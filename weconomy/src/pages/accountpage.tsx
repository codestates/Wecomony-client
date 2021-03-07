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

  useEffect(() => {
    dispatch(loadingWorkerStart());
  }, []);

  return (
    <>
      <Nav></Nav>
      {groupData.length === 0 ? <NotAMember></NotAMember> : null}
      <AddMemberModal></AddMemberModal>
      <UpdateGroupModal></UpdateGroupModal>
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
                <AccountGraph></AccountGraph>
                <AccountByDay></AccountByDay>
                <AccountSideBar></AccountSideBar>
              </div>
            </div>
          )}
        </>
      ) : (
        <NowLoading></NowLoading>
      )}
    </>
  );
};

export default AccountPage;
