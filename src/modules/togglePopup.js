/* const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');

  const popupAnim = () => {
    popup.style.cssText = `display: block; transform: translateX(-100%);`;
  //popupContent.style.cssText = `display: block; transform: translateX(-100%);`;
  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (screen.width > 576) {
      if (!popup.style.transaform || popup.style.transaform === `translateX(-100%)`) {
        popup.style.cssText = `display: block; transform: translateX(0); transition: 1s ease;`;
      } else {
        popup.style.cssText = `display: block; transform: translateX(-100%);`;
      }
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

if (screen.width > 576) {
  popupAnim();
}else {
  popup.style.display = 'none';
  popupBtn.forEach(element => {
    element.addEventListener('click', () => {
      popup.style.display = 'bloick';
    });
  });
  
}
}; */

const togglePopup = (duration = 2000) => {
    const popUp = document.querySelector('.popup');
    document.querySelectorAll('.popup-btn').forEach(popUpBtn => {
      popUpBtn.addEventListener('click', () => {
        popUp.style.display = 'block';
        //document.body.style.overflow = 'hidden';
        if (screen.width > 576) {
        popUp.querySelector('.popup-content').style.opacity = 0;
        let start = Date.now();
        let timer = setInterval(() => {
          // сколько времени прошло с начала анимации?
          let timePassed = Date.now() - start;

          if (timePassed >= duration) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
          }
          // отрисовать анимацию на момент timePassed, прошедший с начала анимации
          animatePopUp(timePassed);

        }, 20);

        function animatePopUp(timePassed) {
          popUp.querySelector('.popup-content').style.opacity = timePassed / duration;
        }
      }
      });
    
    });
    popUp.addEventListener('click', function ({
      target
    }) {
      if (target == this || target.matches('.popup-close')) {
        this.style.display = 'none';
      }
    });
  };


export default togglePopup;