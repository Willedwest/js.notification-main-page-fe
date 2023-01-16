//Getting nodeElement from the DOM

const markAll = document.querySelector('.mark-all');

let removeReadBg = document.querySelectorAll('.notification-unread');

markAll.addEventListener('click', () => {
  removeReadBg.forEach((read) => {
    read.parentElement.classList.add('active')
  });
});

removeReadBg.forEach((read) => {
    read.addEventListener('click', () => {
      // read.parentElement.classList.add('active')

      read.parentElement.classList.add('active')
    });
  });