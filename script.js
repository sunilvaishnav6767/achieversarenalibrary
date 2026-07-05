document.addEventListener("DOMContentLoaded", () => {

    console.log("Achiever's Arena Library Loaded");

    /* ================= HERO SLIDER ================= */

    const hero = document.getElementById("hero");

    const backgrounds = [
    "hero.webp",
    "images/IMG-20260306-WA0019.jpg",
    "images/20260320_230657.jpg",
    "images/20260320_230311.jpg",
    "images/file_00000000cbbc71fa9e6f20cf49f430dc.png",
    "images/20260320_230449.jpg",
    "images/20260320_230200.jpg",
    "images/20260320_230628.jpg",
    "images/IMG-20260704-WA0017.jpg"
];

    let current = 0;

    function setBackground(index){

        hero.classList.add("fade");

        setTimeout(()=>{

            hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.25), rgba(5,7,13,.45)), url("${backgrounds[index]}")`;

hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center center";
hero.style.backgroundRepeat = "no-repeat";

            hero.classList.remove("fade");

            const dots=document.querySelectorAll(".dot");

            dots.forEach(dot=>dot.classList.remove("active"));

            if(dots[index]){
                dots[index].classList.add("active");
            }

        },250);

    }

    /* ================= CREATE DOTS ================= */

    const dotsContainer=document.createElement("div");

    dotsContainer.className="slider-dots";

    backgrounds.forEach((img,index)=>{

        const dot=document.createElement("span");

        dot.className="dot";

        if(index===0){
            dot.classList.add("active");
        }

        dot.onclick=()=>{

            current=index;

            setBackground(current);

        }

        dotsContainer.appendChild(dot);

    });

    hero.appendChild(dotsContainer);

    setBackground(current);

    setInterval(()=>{

        current++;

        if(current>=backgrounds.length){
            current=0;
        }

        setBackground(current);

    },5000);


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
