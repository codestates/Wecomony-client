const MobileSidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__image" src="https://ifh.cc/g/xMR6n6.png"></img>
      </div>
      <ul className="sidebar__menu">
        <li className="sideBtns">가계부 작성하기</li>
        <li className="sideBtns">내 가계부</li>
        <li className="sideBtns">문의하기</li>
      </ul>

      <div className="sidebar__handleLogin">
        <a>로그인</a>
      </div>
    </nav>
  );
};

export default MobileSidebar;
