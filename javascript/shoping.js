const category = document.querySelector('.category');
  const scrollIndicator = document.querySelector('.scroll-indicator');

  category.addEventListener('scroll', () => {
    const scrollWidth = category.scrollWidth - category.clientWidth;
    const scrollLeft = category.scrollLeft;
    const scrollPercentage = (scrollLeft / scrollWidth) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
});

function toggleFavorite(button) {
  button.classList.toggle("clicked");
}