const saleCards = document.querySelectorAll('.card__promo_sale');

saleCards.forEach(hitCard => {
  if (hitCard.textContent >= '-30%') {
    hitCard.style.backgroundColor = '#FF5BC6'
  }
})