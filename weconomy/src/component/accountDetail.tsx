import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import { IoFastFoodOutline } from 'react-icons/io5';
import backMeIcon from '../util/accountPage/backMeIcon';

interface ParamsId {
  id: string;
}

interface datas {
  id: number;
  upDown: string;
  category: string;
  desc: string;
  cost: number;
}

const AccountDetail = () => {
  let icons = {
    식비: <IoFastFoodOutline></IoFastFoodOutline>,
  };

  const params: ParamsId = useParams();

  const groupNow = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: datas) => {
      return group.id === Number(params.id);
    }),
  );
  const dateNow = useSelector(
    (state: RootState) => state.pageStatus?.detailDate,
  );

  const filterContent = groupNow[0].Contents.filter(
    (content: any) =>
      content?.dateTime === new Date(dateNow).toLocaleDateString(),
  );

  return (
    <div className="details-container">
      {filterContent.map((data: datas) => (
        <div className="OneContent">
          {data.upDown === 'income' ? (
            <>
              <div className="Up-Detail"></div>
              <div className="cateIcon">{backMeIcon(data.category)}</div>
            </>
          ) : (
            <>
              <div className="Down-Detail"></div>
              <div className="cateIcon">{backMeIcon(data.category)}</div>
            </>
          )}
          <div className="left-Detail">
            <div className="category-Detail">{data.category}</div>
            <div className="text-Detail">{data.desc}</div>
            <div className="count-Detail">{`${data.cost} 원`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountDetail;
