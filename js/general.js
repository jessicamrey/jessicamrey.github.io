document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('readMoreBtn');
  const hiddenContent = document.querySelector('.hidden-content');
  
  const quotes = document.querySelectorAll('.quote-content');
  const prevBtn = document.querySelector('.quote-nav.left');
  const nextBtn = document.querySelector('.quote-nav.right');
  
  //load quotes
    fetch('quotes.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar quotes.html');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('quotes-container').innerHTML = html;
      initQuotesCarousel();
    })
    .catch(error => {
      console.error(error);
    });
	
  // carrousel
function initQuotesCarousel() {
  const quotes = document.querySelectorAll('.quote-content');
  const prevBtn = document.querySelector('.quote-nav.left');
  const nextBtn = document.querySelector('.quote-nav.right');

  let currentIndex = 0;

  function showQuote(index, direction) {
    quotes.forEach(q => {
      q.classList.remove('active', 'slide-in-left', 'slide-in-right');
    });

    const activeQuote = quotes[index];
    activeQuote.classList.add('active');

    if (direction === 'next') {
      activeQuote.classList.add('slide-in-right');
    } else if (direction === 'prev') {
      activeQuote.classList.add('slide-in-left');
    }
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentIndex, 'prev');
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex, 'next');
  });

  showQuote(currentIndex, 'next');
}


  //Intro Read more
  btn.addEventListener('click', function () {
    hiddenContent.classList.toggle('show');

    this.textContent = hiddenContent.classList.contains('show')
      ? 'READ LESS'
      : 'READ MORE';
  });
  
  
});


/* read more dark theme

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('readMoreBtn');
  const hidden = document.querySelector('.hidden-content');
  const overlay = document.querySelector('.intro-overlay');

  if (!btn || !hidden || !overlay) return;

  btn.addEventListener('click', () => {
    const expanded = hidden.classList.toggle('show');

    overlay.classList.toggle('is-expanded', expanded);

    btn.textContent = expanded ? 'Leer menos' : 'Leer más';
  });
});*/


  

