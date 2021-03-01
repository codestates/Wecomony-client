const onClickProfile = () => {
  const dropDown = document.querySelector(
    '.profileDropDown',
  ) as HTMLFormElement;
  dropDown.classList.toggle('showDropDown');
};

export default onClickProfile;