import Nav from '../component/nav';
import SelectAccountBox from '../component/SelectAccountBox';

const SelectAccount = () => {
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
