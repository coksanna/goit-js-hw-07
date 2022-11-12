import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGallery(items) {
    return items.map(({preview, original, description})=> `<li>
    <a class="gallery__item" href='${original}'> 
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
      />
    </a>
  </li>`).join('');
};
// console.log(galleryItems);

const galleryMarkup = createGallery(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
let gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,    
    scrollZoom: false,
});


