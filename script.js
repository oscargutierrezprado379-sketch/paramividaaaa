// =========================
// MÚSICA
// =========================

const boton = document.getElementById("play");
const musica = document.getElementById("musica");

let sonando = false;

boton.addEventListener("click",()=>{

    if(!sonando){

        musica.play();

        boton.innerHTML="⏸ Pausar audio";

        sonando=true;

    }else{

        musica.pause();

        boton.innerHTML="▶ Reproducir nuestro audio";

        sonando=false;

    }

});

// =========================
// CORAZONES
// =========================

function crearCorazon(){

    const corazon=document.createElement("div");

    corazon.innerHTML="💙";

    corazon.style.position="fixed";
    corazon.style.left=Math.random()*100+"vw";
    corazon.style.top="100vh";
    corazon.style.fontSize=(20+Math.random()*25)+"px";
    corazon.style.pointerEvents="none";
    corazon.style.zIndex="999";

    document.body.appendChild(corazon);

    corazon.animate([

        {
            transform:"translateY(0)",
            opacity:0
        },

        {
            opacity:1
        },

        {
            transform:"translateY(-120vh)",
            opacity:0
        }

    ],{

        duration:7000+Math.random()*3000

    });

    setTimeout(()=>{

        corazon.remove();

    },10000);

}

setInterval(crearCorazon,500);

// =========================
// ABRIR FOTOS
// =========================

document.querySelectorAll(".galeria img").forEach(img=>{

img.addEventListener("click",()=>{

const fondo=document.createElement("div");

fondo.style.position="fixed";
fondo.style.left="0";
fondo.style.top="0";
fondo.style.width="100%";
fondo.style.height="100%";
fondo.style.background="rgba(0,0,0,.9)";
fondo.style.display="flex";
fondo.style.justifyContent="center";
fondo.style.alignItems="center";
fondo.style.zIndex="99999";

const foto=document.createElement("img");

foto.src=img.src;

foto.style.maxWidth="90%";
foto.style.maxHeight="90%";
foto.style.borderRadius="20px";
foto.style.boxShadow="0 0 40px rgba(255,255,255,.3)";

fondo.appendChild(foto);

document.body.appendChild(fondo);

fondo.onclick=()=>{

fondo.remove();

}

});

});

// =========================
// ANIMACIÓN AL SCROLL
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// =========================
// EFECTO DE ESCRITURA
// =========================

const titulo=document.querySelector(".hero h1");

const texto=titulo.innerHTML;

titulo.innerHTML="";

let i=0;

function escribir(){

if(i<texto.length){

titulo.innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,80);

}

}

escribir();

console.log("💙 Hecho con mucho cariño.");