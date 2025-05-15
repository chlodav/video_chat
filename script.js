
document.querySelectorAll('.card').forEach(card => {
  const bg = card.getAttribute('bg-color');
  if (bg) card.style.backgroundColor = bg;
});
 