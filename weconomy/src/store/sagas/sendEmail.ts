import * as emailjs from 'emailjs-com';
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  sendEmailModalOpen,
  sendEmailModalClose,
} from '../actions/modalActions';

interface data {
  email: string;
  title: string;
  message: string;
}

function* workerSendEmail(action: any) {
  yield put(sendEmailModalOpen());

  const data: data = {
    email: action.data.email,
    title: action.data.title,
    message: action.data.message,
  };

  yield emailjs
    .send(
      'service_13h2blf',
      'template_uo19erz',
      data,
      'user_A6Z7DqFji9kGFceViL0e2',
    )
    .then(() => {});
  yield delay(1200);

  yield put(sendEmailModalClose());
}

export default workerSendEmail;
