import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function makeGallary(array = []) {
  return array
    .map((galleryItems) => {
      return `<a class="gallery__item" href="${galleryItems.original}">
  <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>`;
    })
    .join("");
}
galleryEl.innerHTML = makeGallary(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: true,
});
