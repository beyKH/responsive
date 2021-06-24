elSiteOpenNavButton = document.querySelector(".sitenav__toggler");
elSiteNavButtonClose = document.querySelector(".nav-modal__cancel-button");
elModalNav = document.querySelector('.nav-modal');



elSiteOpenNavButton.addEventListener('click', function () {
  elModalNav.classList.add('nav-modal--active');
})

elSiteNavButtonClose.addEventListener('click',function () {
  elModalNav.classList.remove('nav-modal--active');
})
