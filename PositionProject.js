document.querySelectorAll("#btns button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert(`You clicked: ${btn.innerText}`);
        btn.style.backgroundColor = "#007143"; // Click hone par color change
    });
});



const mainImage = document.querySelector("#second img");
const thumbnails = document.querySelectorAll("#row img");

thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src;

        
        mainImage.style.transform = "scale(1.1)";
        setTimeout(() => {
            mainImage.style.transform = "scale(1)";
        }, 300);
    });
});