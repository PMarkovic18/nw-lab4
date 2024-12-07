document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("picture-grid");
    const pictureCount = 100;

    for (let i = 1; i <= pictureCount; i++) {
        const img = document.createElement("img");
        img.src = `/pictures/picture_${i}.jpg`;
        img.alt = `Picture ${i}`;
        grid.appendChild(img);
    }
});