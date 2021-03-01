 const removeDropDown = (event: any) => {
  if (!event.target.matches('.userProfileNav')) {
    var dropdowns = document.getElementsByClassName('profileDropDown');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showDropDown')) {
        openDropdown.classList.remove('showDropDown');
      }
    }
  }
};

export default removeDropDown