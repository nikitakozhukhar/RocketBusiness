const videoLinks = {
  youtube: `https://www.youtube.com/embed/s52QzwGe0rE`,
  rutube: 'https://rutube.ru/video/embed/bff36fbabf4ee9eee60e5792aa1f231b/',
}

document.addEventListener('DOMContentLoaded', () => {
  const videoButton = document.querySelector('.video__button');
  const choiseSrcBlock = document.querySelector('.modal__choice-src');
  const choiceSrcButtons = document.querySelectorAll('.modal__video-button');

  const closeVideoButton = document.querySelector('.modal__close-btn');
  const videoModal = document.querySelector('.modal');
  const videoFrame = document.querySelector('.modal__video-frame');

  //открываем окно выбора источника
  videoButton.addEventListener('click', () => {
    videoButton.classList.add('video__button_hidden');
    choiseSrcBlock.classList.remove('modal__choice-src_hidden')
  });

  closeVideoButton.addEventListener('click', () => {
    videoFrame.src = ''; // сбрасываем видео, чтобы остановить воспроизведение
    videoModal.classList.add('modal_hidden');
    choiceSrcButtons.forEach(button => button.classList.add('video__button_hidden'));
    videoButton.classList.remove('video__button_hidden')
  });

  //включаем видео из выбранного источника
  choiceSrcButtons.forEach(choiceSrcButton => choiceSrcButton.addEventListener('click', () => {
    const source = choiceSrcButton.dataset.video;

    videoFrame.src = videoLinks[source]
    
    videoModal.classList.remove('modal_hidden');
  }))
});

