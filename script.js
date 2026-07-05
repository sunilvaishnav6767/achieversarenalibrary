/* =====================================================
   ACHIEVER'S ARENA LIBRARY
   PREMIUM JS v3.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

/* ================= LOADER ================= */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},800);

});

/* ================= HERO VIDEO ================= */

const heroVideo = document.querySelector(".hero-video");

if(heroVideo){

heroVideo.play().catch(()=>{});

}

/* ================= HAMBURGER MENU ================= */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if(menuToggle && navLinks){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

}

/* ================= STICKY NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="12px 7%";

navbar.style.background="rgba(5,7,13,.96)";

}else{

navbar.style.padding="18px 7%";

navbar.style.background="rgba(5,7,13,.92)";

}

});

/* ================= SCROLL PROGRESS ================= */

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

/* ================= BACK TO TOP ================= */

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

});
/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`
<span class="close-lightbox">&times;</span>
<img src="${img.src}">
`;

document.body.appendChild(overlay);

overlay.classList.add("active");

overlay.addEventListener("click",(e)=>{

if(e.target===overlay || e.target.classList.contains("close-lightbox")){

overlay.remove();

}

});

});

});

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems=document.querySelectorAll(
".why-card,.facility-card,.price-card,.review-card,.contact-card,.social-card,.stat-card"
);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

revealObserver.observe(item);

});

/* =====================================================
   ACTIVE MENU
===================================================== */

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters=document.querySelectorAll(".stat-card h3");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".hero-stats");

if(!stats) return;

if(window.scrollY>stats.offsetTop-500 && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text);

if(isNaN(number)) return;

let count=0;

const speed=Math.ceil(number/40);

const update=()=>{

count+=speed;

if(count<number){

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=text;

}

};

update();

});

}

});

/* =====================================================
   CURRENT YEAR
===================================================== */

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=`© ${new Date().getFullYear()} Achiever's Arena Library<br>All Rights Reserved.`;

}
});
