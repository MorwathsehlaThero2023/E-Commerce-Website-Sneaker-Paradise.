document.addEventListener('DOMContentLoaded', function () {
  const sneakerCards = document.querySelectorAll('.sneaker');

  // Handle click on sneaker cards
  sneakerCards.forEach(function (sneakerCard) {
    const sneakerName = sneakerCard.querySelector('h3').textContent;
    const sneakerImg = sneakerCard.querySelector('img').src;

    sneakerCard.addEventListener('click', function () {
      // You can customize this behavior, like opening a modal or redirecting to a product page
      alert(`Clicked on ${sneakerName}`);
    });
  });

  // Handle smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSectionId = navLink.getAttribute('href');
      document.querySelector(targetSectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Handle sticky navigation
  const navbar = document.querySelector('.navbar');
  const initialNavbarTop = navbar.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.scrollY > initialNavbarTop) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });
});
