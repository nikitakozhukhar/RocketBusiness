document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const track = document.getElementById('track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dots');
  const cards = document.querySelectorAll('.product-card');
  
  let currentSlide = 0;
  const cardWidth = cards[0].offsetWidth + 20; // ширина карточки + margin
  const visibleCards = 1.5; // видно 1.5 карточки
  
  // Инициализация точек
  function initDots() {
      dotsContainer.innerHTML = '';
      cards.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('slider-dot');
          if (index === currentSlide) dot.classList.add('active');
          dotsContainer.appendChild(dot);
      });
  }
  
  // Обновление слайдера
  function updateSlider() {
      const offset = -currentSlide * cardWidth;
      track.style.transform = `translateX(${offset}px)`;
      
      // Обновление прозрачности карточек
      cards.forEach((card, index) => {
          if (index === currentSlide) {
              card.style.opacity = '1';
          } else if (index === currentSlide + 1) {
              card.style.opacity = '0.5';
          } else {
              card.style.opacity = '0.5';
          }
      });
      
      // Обновление точек
      document.querySelectorAll('.slider-dot').forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
      });
      
      // Скрытие/показ кнопок навигации
      prevBtn.style.display = currentSlide === 0 ? 'none' : 'flex';
      nextBtn.style.display = currentSlide === cards.length - 1 ? 'none' : 'flex';
  }
  
  // Обработчики событий
  nextBtn.addEventListener('click', () => {
      if (currentSlide < cards.length - 1) {
          currentSlide++;
          updateSlider();
      }
  });
  
  prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
          currentSlide--;
          updateSlider();
      }
  });
  
  // Свайп для мобильных
  let startX = 0;
  let isDragging = false;
  
  track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
  });
  
  track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].clientX;
      const diff = startX - x;
      
      if (diff > 50 && currentSlide < cards.length - 1) {
          // Свайп влево
          currentSlide++;
          updateSlider();
          isDragging = false;
      } else if (diff < -50 && currentSlide > 0) {
          // Свайп вправо
          currentSlide--;
          updateSlider();
          isDragging = false;
      }
  });
  
  track.addEventListener('touchend', () => {
      isDragging = false;
  });
  
  // Инициализация
  initDots();
  updateSlider();
  
  // Адаптация к изменению размера окна
  window.addEventListener('resize', () => {
      updateSlider();
  });
});