import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';

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

  const [fakedata, setFakeData] = useState<any>([
    {
      upDown: 'down',
      category: '식비',
      text: '송탄 갈비집',
      count: 20000,
    },
    {
      upDown: 'down',
      category: '공과금',
      text: '아파트 관리비',
      count: 130000,
    },
    {
      upDown: 'up',
      category: '급여',
      text: '보너스',
      count: 500000,
    },
    {
      upDown: 'down',
      category: '기타',
      text: '냉장고 구입',
      count: 430000,
    },
    {
      upDown: 'down',
      category: '공과금',
      text: '아파트 관리비',
      count: 130000,
    },
    {
      upDown: 'up',
      category: '급여',
      text: '보너스',
      count: 500000,
    },
    {
      upDown: 'down',
      category: '기타',
      text: '냉장고 구입',
      count: 430000,
    },
    {
      upDown: 'down',
      category: '공과금',
      text: '아파트 관리비',
      count: 130000,
    },
    {
      upDown: 'up',
      category: '급여',
      text: '보너스',
      count: 500000,
    },
    {
      upDown: 'down',
      category: '기타',
      text: '냉장고 구입',
      count: 430000,
    },
  ]);

  return (
    <div className="details-container">
      {filterContent.map((data: datas) => (
        <div className="OneContent">
          {data.upDown === 'income' ? (
            <div className="Up-Detail"></div>
          ) : (
            <div className="Down-Detail"></div>
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
