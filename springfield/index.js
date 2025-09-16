document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.onclick = () => {
      modal.classList.add('open');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    }
  });
  function closeModal() {
    modal.classList.remove('open');
    modalImg.src = '';
  }
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.onclick = closeModal;
  });
  modal.onclick = function(e) {
    if (e.target === modal) closeModal();
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") closeModal();
  });
});