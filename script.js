window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    } else {
      card.style.opacity = 0;
      card.style.transform = 'translateY(50px)';
    }
  });
});
