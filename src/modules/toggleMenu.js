const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    menuItems = menu.querySelectorAll('ul > li');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

  document.addEventListener('click', (event) => {
    let target = event.target;

    target = target.closest('.menu');
    if (btnMenu === target) {
      menu.classList.add('active-menu');
    } else if (!event.target.classList.contains('active-menu')) {
      menu.classList.remove('active-menu');
    }
  });

};

export default toggleMenu;