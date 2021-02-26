import { useState, useEffect } from 'react';

const AccountDetail = () => {
  interface datas {
    upDown: string;
    category: string;
    text: string;
    count: number;
  }
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
      {fakedata.map((data: datas) => (
        <div className="OneContent">
          {data.upDown === 'up' ? (
            <div className="Up-Detail"></div>
          ) : (
            <div className="Down-Detail"></div>
          )}
          <div className="left-Detail">
            <div className="category-Detail">{data.category}</div>
            <div className="text-Detail">{data.text}</div>
            <div className="count-Detail">{`${data.count} 원`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountDetail;
