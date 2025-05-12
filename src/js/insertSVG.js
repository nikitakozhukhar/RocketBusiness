function insertSVG() {
  const play = document.querySelector('.video__play-icon')
  const favourites = document.querySelectorAll('.card__favourite');
  const eyes = document.querySelectorAll('.card__eye');

  // Добавление иконки play  
  const svgPlay = "http://www.w3.org/2000/svg";
  const svgPlayIcon = document.createElementNS(svgPlay, "svg");
  svgPlayIcon.setAttribute("width", "10");
  svgPlayIcon.setAttribute("height", "13");
  svgPlayIcon.setAttribute("viewBox", "0 0 10 13");
  
  const pathPlay = document.createElementNS(svgPlay, "path");
  pathPlay.setAttribute("d", "M0.916687 1.25L9.08335 6.5L0.916687 11.75V1.25Z");
  pathPlay.setAttribute("fill", "none");
  pathPlay.setAttribute("stroke", "white");

  svgPlayIcon.appendChild(pathPlay);
 
  play.appendChild(svgPlayIcon.cloneNode(true));


  // Добавление иконки сердце  
  const svgFav = "http://www.w3.org/2000/svg";
  const svgFavourites = document.createElementNS(svgFav, "svg");
  svgFavourites.setAttribute("width", "17");
  svgFavourites.setAttribute("height", "15");
  svgFavourites.setAttribute("viewBox", "0 0 17 15");
  svgFavourites.classList.add('svg-icon', 'svg-favourite');
  
  const pathFav = document.createElementNS(svgFav, "path");
  pathFav.setAttribute("d", "M8.58499 12.7111L8.49998 12.793L8.40649 12.7111C4.36899 9.18802 1.7 6.85831 1.7 4.49592C1.7 2.86103 2.975 1.63488 4.67499 1.63488C5.98399 1.63488 7.25899 2.45232 7.70948 3.56403H9.29048C9.74098 2.45232 11.016 1.63488 12.3249 1.63488C14.025 1.63488 15.3 2.86103 15.3 4.49592C15.3 6.85831 12.6309 9.18802 8.58499 12.7111ZM12.3249 0C10.8459 0 9.42649 0.662125 8.49998 1.70027C7.57348 0.662125 6.15398 0 4.67499 0C2.057 0 0 1.97002 0 4.49592C0 7.57767 2.88999 10.1035 7.26749 13.921L8.49998 15L9.73248 13.921C14.1099 10.1035 17 7.57767 17 4.49592C17 1.97002 14.943 0 12.3249 0Z");
  pathFav.setAttribute("fill", "currentColor");

  svgFavourites.appendChild(pathFav);

  favourites.forEach(favorite => {
    favorite.innerHTML = '';
    favorite.appendChild(svgFavourites.cloneNode(true));
  });

  // Добавление иконки глаза
  const svgEye = "http://www.w3.org/2000/svg";
  const svgEyes = document.createElementNS(svgEye, "svg");
  svgEyes.setAttribute("width", "17");
  svgEyes.setAttribute("height", "15");
  svgEyes.setAttribute("viewBox", "0 0 17 15");
  svgEyes.classList.add('svg-icon', 'svg-eye');
  
  const pathEye = document.createElementNS(svgEye, "path");
  pathEye.setAttribute("d", "M9.49999 4.125C10.1299 4.125 10.734 4.37522 11.1794 4.82062C11.6248 5.26602 11.875 5.87011 11.875 6.5C11.875 7.12989 11.6248 7.73398 11.1794 8.17938C10.734 8.62478 10.1299 8.875 9.49999 8.875C8.8701 8.875 8.26601 8.62478 7.82061 8.17938C7.37521 7.73398 7.12499 7.12989 7.12499 6.5C7.12499 5.87011 7.37521 5.26602 7.82061 4.82062C8.26601 4.37522 8.8701 4.125 9.49999 4.125ZM9.49999 0.5625C13.4583 0.5625 16.8387 3.02458 18.2083 6.5C16.8387 9.97542 13.4583 12.4375 9.49999 12.4375C5.54166 12.4375 2.16124 9.97542 0.791656 6.5C2.16124 3.02458 5.54166 0.5625 9.49999 0.5625ZM2.51749 6.5C3.15736 7.80649 4.15094 8.90726 5.38529 9.67716C6.61963 10.4471 8.04522 10.8552 9.49999 10.8552C10.9548 10.8552 12.3804 10.4471 13.6147 9.67716C14.849 8.90726 15.8426 7.80649 16.4825 6.5C15.8426 5.19351 14.849 4.09274 13.6147 3.32284C12.3804 2.55294 10.9548 2.14479 9.49999 2.14479C8.04522 2.14479 6.61963 2.55294 5.38529 3.32284C4.15094 4.09274 3.15736 5.19351 2.51749 6.5Z");
  pathEye.setAttribute("fill", "currentColor");
  
  svgEyes.appendChild(pathEye);

  eyes.forEach(eye => {
    eye.innerHTML = '';
    eye.appendChild(svgEyes.cloneNode(true));
  });
}

document.addEventListener('DOMContentLoaded', insertSVG);