const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

/* Open Lightbox */
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

function showImage() {
  lightboxImg.src = galleryImages[currentIndex].src.replace("400/300", "800/600");
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage();
}

function  prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage();
}

/* Filter */
function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}