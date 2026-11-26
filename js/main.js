// ===== MOBILE MENU =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// ===== ROOM FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const roomCards = document.querySelectorAll('.room-card[data-type]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => {
      const isActive = b === button;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive);
    });

    roomCards.forEach((card) => {
      card.hidden = !(filter === 'all' || card.dataset.type === filter);
    });
  });
});

// ===== DINING MENU TABS =====
const menuTabs = document.querySelectorAll('.menu-tab');
const menuPanels = document.querySelectorAll('.menu-panel');

menuTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.menu;

    menuTabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-pressed', isActive);
    });

    menuPanels.forEach((panel) => {
      panel.hidden = panel.dataset.menu !== target;
    });
  });
});

// ===== RESERVATION FORM =====
const reserveForm = document.querySelector('#reserve-form');

if (reserveForm) {
  const dateInput = reserveForm.querySelector('#res-date');
  const message = reserveForm.querySelector('.form-message');

  // Stop people picking a date in the past
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  dateInput.min = `${now.getFullYear()}-${month}-${day}`;

  reserveForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Spam trap: bots fill hidden fields, people don't
    if (reserveForm.elements.website.value !== '') {
      return;
    }

    if (!reserveForm.checkValidity()) {
      reserveForm.reportValidity();
      return;
    }

    // textContent is safe: it shows text, never runs it as HTML
    message.textContent = 'Thank you! This is a demo, so nothing was sent.';
    reserveForm.reset();
  });
}

// ===== QUOTE FORM =====
const quoteForm = document.querySelector('#quote-form');

if (quoteForm) {
  const quoteDate = quoteForm.querySelector('#q-date');
  const quoteMessage = quoteForm.querySelector('.form-message');

  // Stop people picking a date in the past
  const today = new Date();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  quoteDate.min = `${today.getFullYear()}-${m}-${d}`;

  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Spam trap: bots fill hidden fields, people don't
    if (quoteForm.elements.website.value !== '') {
      return;
    }

    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }

    // textContent is safe: it shows text, never runs it as HTML
    quoteMessage.textContent = 'Thank you! This is a demo, so nothing was sent.';
    quoteForm.reset();
  });
}

// ===== GALLERY FILTER + LIGHTBOX =====
const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('#lightbox');

if (lightbox) {
  const lightboxImg = lightbox.querySelector('#lightbox-img');
  const lightboxCaption = lightbox.querySelector('#lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  galleryFilters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      galleryFilters.forEach((b) => {
        const isActive = b === button;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', isActive);
      });

      galleryItems.forEach((item) => {
        item.hidden = !(filter === 'all' || item.dataset.category === filter);
      });
    });
  });

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const photo = item.querySelector('img');
      lightboxImg.src = photo.getAttribute('src');
      lightboxImg.alt = photo.alt;
      lightboxCaption.textContent = photo.alt;
      lightbox.showModal();
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.close());

  // Clicking the dark area outside the photo also closes it
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
}