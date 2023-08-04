import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

function createItems(arr) {
    return arr.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </li>`).join("");    
}
container.insertAdjacentHTML("beforeend", createItems(galleryItems));

container.addEventListener('click', handlerItemClick);

function handlerItemClick(evt) {
    evt.preventDefault();

    if (evt.target === evt.currentTarget) {
        return;
    }
 
    const source = evt.target.dataset.source;
   
    const galleryItem = galleryItems.find(({ original }) => original === source);   
    
    const instance = basicLightbox.create(`
    <img        
        src="${galleryItem.original}"    
        alt="${galleryItem.description}"
     /> `, {
        onShow: (instance) => {
            document.addEventListener("keydown", handlerKeyClick)
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', handlerKeyClick)
        }
    }); 
    instance.show();

    document.addEventListener('keydown', handlerKeyClick);
    function handlerKeyClick(evt) {     
        if (evt.code === "Escape") {
            instance.close();
        }  
    };
};
   



