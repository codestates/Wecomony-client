import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InsideLoginModal from './insideLoginModal';
import { RootState } from '../store/reducers';

const LoginModal: React.FC = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.isLoginModalOpen,
  );

  return <>{isOpen ? <InsideLoginModal></InsideLoginModal> : null}</>;
};

export default LoginModal;
