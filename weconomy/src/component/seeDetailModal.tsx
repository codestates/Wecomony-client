import React, { useRef, useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { seeDetailModalClose } from '../store/actions/modalActions';
import { useReactToPrint } from 'react-to-print';
import threeComma from '../util/threeComma';
import CalcullationDay from '../util/accountPage/CalculationDay';

interface ParamsId {
  id: string;
}

interface datas {
  id: number;
  upDown: string;
  category: string;
  desc: string;
  cost: number;
}

const SeeDetailModal: React.FC = () => {
  const params: ParamsId = useParams();
  const componentRef = useRef(null);

  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: RootState) => state.modalStatus?.seeDetailModal,
  );

  const closeSeeDetailModal = () => {
    dispatch(seeDetailModalClose());
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle:
      '@media print { body { -webkit-print-color-adjust: exact; } @page { size: A4; margin: 400mm !important }}',
  });

  const groupNow = useSelector((state: RootState) =>
    state.userStatus.groups?.filter((group: datas) => {
      return group.id === Number(params.id);
    }),
  );

  const dateNow = useSelector(
    (state: RootState) => state.pageStatus?.detailDate,
  );

  const filterContent = groupNow[0].Contents.filter(
    (content: any) =>
      content?.dateTime === new Date(dateNow).toLocaleDateString(),
  );

  const filterIncome = filterContent.filter(
    (content: any) => content.upDown === 'income',
  );

  const filterOutcome = filterContent.filter(
    (content: any) => content.upDown === 'outcome',
  );

  const date = new Date(dateNow).toLocaleDateString();

  useEffect(() => {
    console.log(filterIncome, filterOutcome);
  });

  return (
    <>
      {isOpen ? (
        <div className="seeDetailModalOuter" onClick={closeSeeDetailModal}>
          <div
            className="seeDetailModalInner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="seeDetailModalContents">
              <div className="printArea" ref={componentRef}>
                <div className="seeDetailTop">
                  <div className="seeDetailModalTitle">Weconomy</div>
                </div>
                <div className="seeDetailBody">
                  <div>
                    <div className="TitleSeeDetail">가계부</div>
                    <div className="innerDescSeedetail">
                      <div className="accountNameSeeDetail">{`가계부명 : ${groupNow[0].meetName} `}</div>
                      <div className="dateSeeDetail">{`날짜 : ${date}`}</div>
                    </div>
                    <div className="seeDetailIncome">
                      <div className="seeDetailIncomeTitle">수입</div>
                      <div className="contentsSeeDetail">
                        {filterIncome.map((content: any) => (
                          <div className="oneContentSeeDetail">
                            <div className="seeDetailCate">
                              {content.category}
                            </div>
                            <div className="seeDetailCost">
                              {threeComma(content.cost)}
                            </div>
                            <div className="seeDetailDesc">{content.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="seeDetailOutcome">
                      <div className="seeDetailOutcomeTitle">지출</div>
                      <div className="contentsSeeDetail">
                        {filterOutcome.map((content: any) => (
                          <div className="oneContentSeeDetail">
                            <div className="seeDetailCate">
                              {content.category}
                            </div>
                            <div className="seeDetailCost">
                              {threeComma(content.cost)}
                            </div>
                            <div className="seeDetailDesc">{content.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="seeDetailTotal">{`합계 : ${threeComma(
                      CalcullationDay('total', filterContent),
                    )} 원`}</div>
                  </div>
                </div>
              </div>
              <div className="seeDetailBottom">
                <button className="seeDetailBtn" onClick={handlePrint}>
                  출력 및 저장
                </button>
                <button onClick={closeSeeDetailModal} className="seeDetailBtn">
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SeeDetailModal;
