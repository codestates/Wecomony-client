import * as React from 'react';
import { useState, useEffect } from 'react';
import InsideLoginModal from './insideLoginModal';

const LoginModal: React.FC = () => {
  const [isLogin, setLogin] = useState<boolean>(false);
  return <>{isLogin ? <InsideLoginModal></InsideLoginModal> : null}</>;
};

export default LoginModal;
