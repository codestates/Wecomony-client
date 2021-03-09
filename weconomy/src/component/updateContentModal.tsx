import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { RootState } from '../store/reducers';
import { updateContentModalClose } from '../store/actions/modalActions';
import { updateContent, deleteContent } from '../store/actions/contentAction';
import { RiCloseFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import threeComma from '../util/threeComma';

interface ParamsId {
  id: string;
}
const UpdateContentModal = () => {
  const dispatch = useDispatch();
  const params: ParamsId = useParams();

  const [desc, setDesc] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [err, setErr] = useState<string>('');

  const onChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const onChangeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.value);
  };

  const userNow = useSelector((state: RootState) => state.userStatus.userData);

  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.updateContentModal,
  );

  const contentId = useSelector(
    (state: RootState) => state.modalStatus.updateContentId,
  );

  const groups = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );
  const contentNow = groups[0].Contents.filter(
    (content: any) => content.id === contentId,
  );

  const closeModal = () => {
    dispatch(updateContentModalClose());
  };

  const postUpdate = () => {
    if (cost.length === 0 || desc.length === 0) {
      setErr('공백이 있습니다');
    } else if (desc.length > 12) {
      setErr('10자를 초과할 수 없습니다');
    } else if (isNaN(Number(cost))) {
      setErr('금액에는 숫자만 가능합니다');
    } else {
      let data = {
        userId: userNow?.id,
        contentId: contentId,
        desc: desc,
        cost: cost,
      };
      dispatch(updateContent(data));
    }
  };

  const postDelete = () => {
    let data = {
      userId: userNow?.id,
      contentId: contentId,
    };
    dispatch(deleteContent(data));
  };

  return (
    <>
      {isOpen ? (
        <div>
          <div className="updateContentModalOuter" onClick={closeModal}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="insideUpdateContentModal animate__animated animate__fadeIn"
            >
              <div className="UpdateContentModalContents">
                <RiCloseFill
                  onClick={closeModal}
                  className="updateContentModalClose"
                ></RiCloseFill>
                <div className="UpdateContentModalTop">
                  <div className="UpdateGroupModalTitle">Weconomy</div>
                </div>
                <div className="UpdateContentModalBody">
                  <input
                    className="inputUpdateContentModal"
                    type="text"
                    value={desc}
                    name="desc"
                    onChange={onChangeDesc}
                    placeholder={threeComma(contentNow[0].desc)}
                  ></input>
                  <input
                    className="inputUpdateContentModal"
                    type="text"
                    name="text"
                    onChange={onChangeCost}
                    value={cost}
                    placeholder={threeComma(contentNow[0].cost)}
                  ></input>
                  {err ? <div className="errMessage">{err}</div> : null}
                </div>
                <div className="UpdateContentModalBottom">
                  <button onClick={postUpdate} className="updateContentBtn">
                    수정
                  </button>
                  <button onClick={postDelete} className="deleteContentBtn">
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UpdateContentModal;
