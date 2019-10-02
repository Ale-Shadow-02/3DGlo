const sendForm = () => {
  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const validInput = (input) => {
    let typeInput = input.getAttribute('type'),
      regExp = new RegExp();

    if (typeInput === 'text' || input.classList.contains('mess')) {
      regExp = /^[А-Яёа-яё\s]+$/;
    } else if (typeInput === 'tel') {
      regExp = /^\+$|\d+$/;
    }

    if (!regExp.test(input.value)) {
      input.value = input.value.slice(0, -1);
    }
  };


  const statusMessage = document.createElement('div');

  const forms = document.querySelectorAll('form');
  forms.forEach((elem) => {
    elem.querySelectorAll('input').forEach((elem) => {
      elem.addEventListener('input', function () {
        validInput(elem);
      });
    });

    elem.addEventListener('submit', (event) => {
      event.preventDefault();
      elem.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      statusMessage.style.cssText = 'color: white;';
      const formData = new FormData(elem);

      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 2000');
          }
          statusMessage.textContent = successMessage;
          clearInput(elem);
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        });
    });
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

  };

  const clearInput = (elem) => {
    elem.querySelectorAll('input').forEach(elem => {
      elem.value = '';
    });
  };
};

export default sendForm;