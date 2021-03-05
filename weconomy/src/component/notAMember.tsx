import * as React from 'react';
import { useState, useEffect } from 'react';
import { GoAlert } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
const NotAMember: React.FC = () => {
  const history = useHistory();

  const clickBack = () => {
    history.push('/');
  };

  return (
    <div className="NotAMemberOuter">
      <div className="NotAMemberInside">
        <GoAlert className="NotAMemberIcon"></GoAlert>
        <h1>해당 그룹의 멤버가 아닙니다</h1>
        <button onClick={clickBack} className="NotAMemberBtn">
          메인 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default NotAMember;
