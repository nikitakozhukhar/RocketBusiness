document.addEventListener('DOMContentLoaded', () => {
  const videoButton = document.querySelector('.video__button');
  const closeVideoButton = document.querySelector('.modal__close-btn');
  const videoModal = document.querySelector('.modal');
  const videoFrame = document.querySelector('.modal__video-frame');

  videoButton.addEventListener('click', () => {
    videoModal.classList.remove('modal_hidden');
  })

  closeVideoButton.addEventListener('click', () => {
    videoModal.classList.add('modal_hidden');
  })

  videoFrame.src = 'https://rutube.ru/video/a010fb0d7e4c5abc54153fdf37f23049/'

})