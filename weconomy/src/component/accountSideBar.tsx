import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AccountSideBar = () => {
    const history = useHistory();
  
    const createGroup = ():void => {
      
    }

    const manageGroup = ():void => {

    }

    return (
        <nav className= "account__sidebar">

          <ul className= "account__profile">
            <li className = "account__list">
              
              <div className="account__username">유재우</div>
            </li>
            <li className = "account__list">
              
              <div className="account__username">박준석</div>
            </li>
            <li className = "account__list">
              
              <div className="account__username">이상철</div>
            </li>
            <li className = "account__list">
              
              <div className="account__username">김용호</div>
            </li>
          </ul>

        <ul className= "account__handleGroup">
          <li className= "accountBtns">
            <a onClick={createGroup}>그룹 생성하기</a>
          </li>
          <li className= "accountBtns">
            <a onClick={manageGroup}>그룹 관리하기</a>
          </li>
        </ul>

        </nav>
    )
  }
  
  export default AccountSideBar