document.addEventListener("DOMContentLoaded", function () {

    console.log("Achiever's Arena Library Website Loaded Successfully");

    // Gallery Image Full Screen
    const images = document.querySelectorAll(".gallery-grid img");

    images.forEach(img => {
        img.addEventListener("click", () => {

            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,0.95)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "9999";

            const fullImg = document.createElement("img");
            fullImg.src = img.src;
            fullImg.style.maxWidth = "95%";
            fullImg.style.maxHeight = "95%";
            fullImg.style.borderRadius = "10px";

            const closeBtn = document.createElement("div");
            closeBtn.innerHTML = "✕";
            closeBtn.style.position = "fixed";
            closeBtn.style.top = "20px";
            closeBtn.style.right = "20px";
            closeBtn.style.color = "#fff";
            closeBtn.style.fontSize = "40px";
            closeBtn.style.fontWeight = "bold";
            closeBtn.style.cursor = "pointer";
            closeBtn.style.zIndex = "10001";

            overlay.appendChild(fullImg);
            overlay.appendChild(closeBtn);

            closeBtn.onclick = (e) => {
                e.stopPropagation();
                document.body.removeChild(overlay);
            };

            overlay.onclick = () => {
                document.body.removeChild(overlay);
            };

            document.body.appendChild(overlay);

        });
    });


    // Hero Background Slider

    const hero = document.getElementById("hero");

    const backgrounds = [
        "hero.webp",
        "20260320_230250.jpg",
        "20260320_230449.jpg",
        "20260320_230614.jpg",
        "20260321_115107.jpg"
    ];

    let current = 0;
    const dotsContainer = document.createElement("div");
dotsContainer.className = "slider-dots";
hero.appendChild(dotsContainer);

backgrounds.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
});

    function changeBackground() {

    hero.classList.add("fade");

    setTimeout(() => {

        hero.style.background =
        `linear-gradient(rgba(0,0,0,.65), rgba(5,10,30,.80)), url("${backgrounds[current]}")`;

        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";
        hero.style.backgroundRepeat = "no-repeat";

        hero.classList.remove("fade");
const dots = document.querySelectorAll(".dot");
dots.forEach(dot => dot.classList.remove("active"));
dots[current].classList.add("active");
        current = (current + 1) % backgrounds.length;

    }, 250);

    }
    changeBackground();

    setInterval(changeBackground, 7000);

});
