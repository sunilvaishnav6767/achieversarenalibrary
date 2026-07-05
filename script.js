document.addEventListener("DOMContentLoaded", () => {

    console.log("Achiever's Arena Library Loaded");

    /* ================= HERO SLIDER ================= */


    const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
    heroVideo.play().catch(() => {});
}


    /* ================= GALLERY LIGHTBOX ================= */

    const images=document.querySelectorAll(".gallery-grid img");

    images.forEach(img=>{

        img.addEventListener("click",()=>{

            const overlay=document.createElement("div");

            overlay.className="lightbox active";

            const full=document.createElement("img");

            full.src=img.src;

            const close=document.createElement("span");

            close.className="close";

            close.innerHTML="&times;";

            overlay.appendChild(full);

            overlay.appendChild(close);

            document.body.appendChild(overlay);

            close.onclick=()=>{

                overlay.remove();

            }

            overlay.onclick=(e)=>{

                if(e.target===overlay){

                    overlay.remove();

                }

            }

        });

    });


    /* ================= SCROLL ANIMATION ================= */

    const cards=document.querySelectorAll(
        ".card,.price-card,.review-card,.stat-card"
    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        card.style.transition=".7s";

        observer.observe(card);

    });

});
