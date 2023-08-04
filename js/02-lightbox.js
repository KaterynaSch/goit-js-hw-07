import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

function createItems(arr) {
    return arr.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join("");    
}
container.insertAdjacentHTML("beforeend", createItems(galleryItems));

container.addEventListener('click', handlerItemClick);

const img = document.querySelector(".gallery__image");


function handlerItemClick(evt) {    
    evt.preventDefault();

    if (evt.target === evt.currentTarget) {
        return;
    }
  
    const itemLink = evt.target.src;    
    const galleryItem = galleryItems.find(({ preview }) => preview === itemLink);   
   
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: "alt",        
        captionDelay: 250 
     });
    
};