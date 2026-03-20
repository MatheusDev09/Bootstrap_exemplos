const favoritar = document.querySelectorAll(".custom-button");

favoritar.forEach((estrela) => {
    estrela.addEventListener('click', () => {
        estrela.classList.toggle("bi-star");
        estrela.classList.toggle("bi-star-fill");
    });
});