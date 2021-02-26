import * as React from 'react';
import { useState, useEffect } from 'react';

const NowLoading: React.FC = () => {
  return (
    <div className="LoginModalOuter">
      <div className="insideLoading animate__animated animate__fadeIn">
        <img src="https://ifh.cc/g/Uty5Nn.gif" alt="로딩"></img>
      </div>
    </div>
  );
};

export default NowLoading;
