import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Nav = () => {
  const history = useHistory();

  const clickLogo = ():void => {
    
  }

  const toogleBtnSet = () => {
    //const menu = document.querySelector('.navbar__menu') as HTMLFormElement;
    //const handleLogin = document.querySelector('.navbar__handleLogin') as HTMLFormElement;

    //menu.classList.toggle('active');
    //handleLogin.classList.toggle('active');
    const side = document.querySelector('.sidebar') as HTMLFormElement;
    const sideMenu = document.querySelector('.sidebar__menu') as HTMLFormElement;
    const sideLogin = document.querySelector('.sidebar__handleLogin') as HTMLFormElement;
    const sideProfile = document.querySelector('.sidebar__profile') as HTMLFormElement;
    side.classList.toggle('active');
    sideMenu.classList.toggle('active');
    sideLogin.classList.toggle('active');
    sideProfile.classList.toggle('active');
  }


  return (
    <nav className= "navbar">

      <div className= "navbar__logo">
        <a onClick={clickLogo}>
          Weconomy
        </a>
      </div>


      <ul className= "navbar__menu">
        <li className= "navBtns">가계부 작성하기</li>
        <li className= "navBtns">내 가계부</li>
        <li className= "navBtns">문의하기</li>
      </ul>

      <div className= "navbar__handleLogin">
        <a>로그인</a>
      </div>   

      <nav className= "sidebar">
        <div className= "sidebar__profile">
          <img className= "sidebar__image" src= "https://ifh.cc/g/xMR6n6.png"></img>
        </div>
      <ul className= "sidebar__menu">
        <li className= "sideBtns">가계부 작성하기</li>
        <li className= "sideBtns">내 가계부</li>
        <li className= "sideBtns">문의하기</li>
      </ul>

      <div className= "sidebar__handleLogin">
        <a>로그인</a>
      </div>   
      </nav>

      <a href="#" onClick = {toogleBtnSet} className= "navbar__toogleBtn">
        <i className="fas fa-bars"></i>
      </a>

    </nav>
  )
}

export default Nav


/*


*/
