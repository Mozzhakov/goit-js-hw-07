import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const getImages = (gallery) => {
  const newArrayOfImages = gallery.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
</div>`;
  });
  return newArrayOfImages.join("");
};

galleryContainer.innerHTML = getImages(galleryItems);

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const alt = e.target.alt;
  const img = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src='${img}' alt='${alt}' width='800' height='600'>`,
    {
      onShow: () => galleryContainer.addEventListener("keyup", onEscPress),
      onClose: () => galleryContainer.removeEventListener("keyup", onEscPress),
    }
  );
  const onEscPress = (e) => {
    if (e.key === "Escape") instance.close();
  };
  instance.show();
});
