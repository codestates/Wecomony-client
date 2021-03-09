import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from '../component/nav';
import TextField from '@material-ui/core/TextField';
import LoginModal from '../component/loginmodal';
import RequestLoginModal from '../component/requestLoginModal';
import AskNoneSaveModal from '../component/askNoneSave';
import { sendEmail } from '../store/actions/pageAction';
import SendEmailModal from '../component/sendEmailModal';

const HelpDeskPage = () => {
  const dispatch = useDispatch();

  const [err, setErr] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  const submitEmail = (e: any) => {
    e.preventDefault();

    if (email.length === 0 || title.length === 0 || desc.length === 0) {
      return setErr('공백이 있습니다');
    } else {
      let data = {
        email: email,
        title: title,
        message: desc,
      };
      setErr('');
      dispatch(sendEmail(data));
    }
  };
  return (
    <>
      <Nav></Nav>
      <div className="HelpDesk-Container">
        <LoginModal></LoginModal>
        <RequestLoginModal></RequestLoginModal>
        <AskNoneSaveModal></AskNoneSaveModal>
        <SendEmailModal></SendEmailModal>
        <div className="HelpDesk-input-Container">
          <h1 className="HelpDesk-Title">어떻게 도와드릴까요?</h1>
          <div className="HelpDesk-Buckit">
            <TextField
              id="outlined-multiline-flexible"
              label="이메일"
              multiline
              name="email"
              style={{ marginBottom: '20px' }}
              onChange={handleEmailChange}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="제목"
              name="title"
              style={{ marginBottom: '20px' }}
              onChange={handleTitleChange}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="문의내용"
              multiline
              name="message"
              style={{ marginBottom: '20px' }}
              onChange={handleDescChange}
              rows={10}
              variant="outlined"
            />
            {err ? (
              <div className="HelpDesk-Error">{err}</div>
            ) : (
              <div className="HelpDesk-Error"></div>
            )}
            <button onClick={submitEmail} className="helpDesk-btn">
              문의하기
            </button>
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
