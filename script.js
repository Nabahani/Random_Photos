const imageContainer = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        const image = document.createElement("img");
        image.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 200000)}`
        image.alt = "Image";

        imageContainer.appendChild(image);
    }
})