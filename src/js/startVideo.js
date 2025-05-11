document.addEventListener('DOMContentLoaded', () => {
  const videoButton = document.querySelector('.video_button');
  const closeVideoButton = document.querySelector('.close-btn');
  const videoModal = document.querySelector('.modal');
  const videoFrame = document.querySelector('.video-frame');

  videoButton.addEventListener('click', () => {
    videoModal.classList.remove('hide-frame');
  })

  closeVideoButton.addEventListener('click', () => {
    videoModal.classList.add('hide-frame');
  })

  videoFrame.src = 'https://rutube.ru/video/a010fb0d7e4c5abc54153fdf37f23049/'

})