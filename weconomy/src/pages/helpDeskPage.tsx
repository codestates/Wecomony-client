import React, { useState, useEffect } from 'react';
import Nav from '../component/nav';
import TextField from '@material-ui/core/TextField';
import LoginModal from '../component/loginmodal';
import RequestLoginModal from '../component/requestLoginModal';
import AskNoneSaveModal from '../component/askNoneSave';

const HelpDeskPage = () => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };
  return (
    <>
      <Nav></Nav>
      <div className="HelpDesk-Container">
        <LoginModal></LoginModal>
        <RequestLoginModal></RequestLoginModal>
        <AskNoneSaveModal></AskNoneSaveModal>
        <div className="HelpDesk-input-Container">
          <h1 className="HelpDesk-Title">어떻게 도와드릴까요?</h1>
          <div className="HelpDesk-Buckit">
            <TextField
              id="outlined-multiline-flexible"
              label="이메일"
              multiline
              style={{ marginBottom: '20px' }}
              onChange={handleEmailChange}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="제목"
              style={{ marginBottom: '20px' }}
              onChange={handleTitleChange}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="문의내용"
              multiline
              style={{ marginBottom: '20px' }}
              onChange={handleDescChange}
              rows={10}
              variant="outlined"
            />
            <button className="helpDesk-btn">문의하기</button>
            <div className="helpDesk-notice">
              입력하신 이메일로 답변이 전송됩니다
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDeskPage;
