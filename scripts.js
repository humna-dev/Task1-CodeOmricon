document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-image");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let currentIndex;

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = this.alt;
            currentIndex = index;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    next.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    });

    prev.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
