const sideButtons = document.querySelectorAll('.side button');
sideButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    document.body.classList.toggle('signup');
  })
);
