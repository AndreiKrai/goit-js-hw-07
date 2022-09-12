import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function makeGallary(array = []) {
  return array.map((galleryItem) => {
    const img = document.createElement("img");
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    img.classList.add("gallery__image");
    img.dataset.source = galleryItem.original;
    const refEl = document.createElement("a");
    refEl.classList.add("gallery__link");
    refEl.href = galleryItem.original;
    refEl.appendChild(img);

    return refEl;
  });
}

let instance = null;
galleryEl.append(...makeGallary(galleryItems));
function makeInstanse(url) {
  instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
  instance.show();
}

galleryEl.addEventListener("click", galleryClick);

function galleryClick(event) {
  if (!event.target.nodeName === "IMG") {
    return;
  }
  event.preventDefault();
  makeInstanse(event.target.dataset.source);
  window.addEventListener("keydown", onEscPress);
}
function onEscPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
  window.removeEventListener("keydown", onEscPress);
}
