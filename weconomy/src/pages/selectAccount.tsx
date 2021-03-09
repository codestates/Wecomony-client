import Nav from '../component/nav';
import SelectAccountBox from '../component/SelectAccountBox';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDataAgain } from '../store/actions/userActions';
import { RootState } from '../store/reducers';

const SelectAccount = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userStatus.userData);

  useEffect(() => {
    dispatch(getUserDataAgain(userData?.id));
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="SelectAccount-Container">
        <div className="SelectAccount-Contents">
          <SelectAccountBox />
        </div>
      </div>
    </>
  );
};

export default SelectAccount;
