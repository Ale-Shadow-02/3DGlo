const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  popup.style.cssText = `display: block; transform: translateX(-100%);`;
  //popupContent.style.cssText = `display: block; transform: translateX(-100%);`;
  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (!popup.style.transaform || popup.style.transaform === `translateX(-100%)`) {
        popup.style.cssText = `display: block; transform: translateX(0); transition: 1s ease;`;
      } else {
        popup.style.cssText = `display: block; transform: translateX(-100%);`;
      }
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.cssText = `display: block; transform: translateX(-100%); transition: 1s ease;`;
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.cssText = `display: block; transform: translateX(-100%); transition: 1s ease;`;
      }
    }
  });
};

export default togglePopup;