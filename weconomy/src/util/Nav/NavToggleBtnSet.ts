const NavToggleBtnSet = () => {
    const side = document.querySelector('.sidebar') as HTMLFormElement;
    const sideMenu = document.querySelector(
      '.sidebar__menu',
    ) as HTMLFormElement;
    const sideLogin = document.querySelector(
      '.sidebar__handleLogin',
    ) as HTMLFormElement;
    const sideProfile = document.querySelector(
      '.sidebar__profile',
    ) as HTMLFormElement;
    side.classList.toggle('active');
    sideMenu.classList.toggle('active');
    sideLogin.classList.toggle('active');
    sideProfile.classList.toggle('active');
  };

  export default NavToggleBtnSet