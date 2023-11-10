function fadeInOnScroll(element, offset) {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const elementPosition = element.getBoundingClientRect().top + scrollY;
    const isVisible = scrollY + windowHeight - offset > elementPosition;
  
    if (isVisible) {
      element.classList.add('visible');
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
      element.classList.remove('visible');
    }
  }
  
  const biodata = document.querySelector('.biodata');
  const offset = 100;
  
  window.addEventListener('scroll', () => {
    fadeInOnScroll(biodata, offset);
  });
  
  // Memanggil fungsi saat halaman pertama kali dimuat
  fadeInOnScroll(biodata, offset);
  