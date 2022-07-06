// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery")


const creatorItemDiv = ({preview,original,description}={}) => {
    return   `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  `
}

const createItem = () => { 
 return galleryItems.map(el => {
 return creatorItemDiv(el)
}).join("")
}
galleryEl.insertAdjacentHTML('beforeend',createItem(galleryItems))

 new SimpleLightbox('.gallery a'),{
     captionsData:"alt",
    captionDelay: 250,
    enableKeyboard: "true",
 };