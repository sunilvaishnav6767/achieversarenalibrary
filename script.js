document.addEventListener("DOMContentLoaded", function () {
    console.log("Achiever's Arena Library Website Loaded Successfully");
});
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

    overlay.appendChild(fullImg);

    overlay.onclick = () => {
      document.body.removeChild(overlay);
    };

    document.body.appendChild(overlay);
  });
});
