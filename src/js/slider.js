document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('track');
    const dotsContainer = document.getElementById('dots');
    const cards = document.querySelectorAll('.product-card');

    const tabletMediaQuery = window.matchMedia('(min-width: 960px) and (max-width: 1439px)');
    
    if (tabletMediaQuery.matches) {
        // Для планшета - отключаем слайдер
        const sliderTrack = document.getElementById('track');
        if (sliderTrack) {
            sliderTrack.style.transform = 'none';
            
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.flex = '0 0 calc(50% - 10px)';
            });
            
            const dots = document.getElementById('dots');
            if (dots) dots.style.display = 'none';
        }
        return;
    }


    let currentSlide = 0;
    const cardWidth = cards[0].offsetWidth + 20; 

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
    }

    // Свайп для мобильных
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        console.log(e)
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