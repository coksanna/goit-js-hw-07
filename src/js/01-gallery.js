import { galleryItems } from './gallery-items.js';

function createGallery(items) {
    return items.map(({preview, original, description})=> `<div class="gallery__item">
    <a class="gallery__link" href='${original}'> 
      <img
        class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt='${description}'
      />
    </a>
  </div>`).join('');
};

const instance = basicLightbox.create(`
  <div class="modal">
      <img src ='' alt = ''/>
  </div>
`);

const galleryEl = document.querySelector('.gallery');
const source = instance.element().querySelector('img');
const body = document.querySelector('body');  

const galleryMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  source.src = event.target.dataset.source;
  source.alt = event.target.alt;
  instance.show();
}

function closeModal(e) {
  if (e.code  === "Escape") {
      instance.close();
  }
};

galleryEl.addEventListener('click', onGalleryClick);
body.addEventListener('keydown', closeModal);  



