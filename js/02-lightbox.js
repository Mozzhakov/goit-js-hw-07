import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const getImages = (gallery) => {
  const newArrayOfImages = gallery.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
   </a>`;
  });
  return newArrayOfImages.join("");
};

galleryContainer.innerHTML = getImages(galleryItems);

const createModal = () => {
  const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
};

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
});

createModal();
