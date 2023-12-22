document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('open');

        // Добавим анимацию появления меню
        menu.style.animation = 'menuAppear 0.3s ease-in-out';
    });

    // Добавим функцию для закрытия меню по клику вне его области
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('open');
        }
    });

    // Добавим стили анимации
    const styles = document.createElement('style');
    styles.innerHTML = `
    @keyframes menuAppear {
      from {
        opacity: 0;
        transform: translateX(-100%);  
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

    document.head.appendChild(styles);
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data
  })
  .then(response => {
    // Обработка ответа после успешной отправки
    console.log('Форма отправлена успешно'); 
  })
  .catch(error => {
    // Обработка ошибки
    console.error('Ошибка при отправке формы', error);
  });
});