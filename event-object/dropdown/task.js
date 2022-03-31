const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownLink = document.querySelectorAll('.dropdown__link');

dropdownValue.addEventListener('click', function () {
  if (!dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.classList.add('dropdown__list_active');
    document.getElementsByClassName('dropdown__value')[0].style = "--arrow-symbol: '⇧'";
  } else {
    dropdownList.classList.remove('dropdown__list_active');
    document.getElementsByClassName('dropdown__value')[0].style = "--arrow-symbol: '⇩'";
  }
});

for (let i = 0; i < dropdownLink.length; i++) {
  dropdownLink[i].addEventListener('click', function (event) {
    event.preventDefault();
    dropdownValue.innerText = this.innerText;
    dropdownList.classList.remove('dropdown__list_active');
    document.getElementsByClassName('dropdown__value')[0].style = "--arrow-symbol: '⇩'";
  });
}
