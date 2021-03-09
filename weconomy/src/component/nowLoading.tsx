import * as React from 'react';
import { useState, useEffect } from 'react';

const NowLoading: React.FC = () => {
  return (
    <div className="LoadingOuter">
      <div className="insideLoading animate__animated animate__fadeIn">
        <img
          className="contentLoading"
          src="https://ifh.cc/g/zeELpz.gif"
          alt="로딩"
        ></img>
      </div>
    </div>
  );
};

export default NowLoading;
