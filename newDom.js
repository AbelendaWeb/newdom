// ************************* APIS ******************************************************************************************

// APLICATION PROGRAMMING INTERFACE

/* 
console.log(document)

let texto = "Hola soy tu amigo y docente digital Angel Abelenda"

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)
 */

// NODOS, ELEMENTOS Y SELECTORES

/* // No se usan
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByName("nombre"))

// Se usan actualmente
console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a"))
document.querySelectorAll("a").forEach(a =>{
    console.log(a)})
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[3])
console.log(document.querySelectorAll("#menu li"))
 */

// ATTRIBUTES

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// DATA-ATTRIBUTES

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description", "Modelo de objeto del documento");
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

// ESTILOS Y VARIABLES CSS

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "18.3%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "Trem";
$linkDOM.style.borderRadius = "5px";
$linkDOM.style.height = "30px";
$linkDOM.style.lineHeight = "30px";
$linkDOM.style.fontSize = "20px";
$linkDOM.style.fontWeight = "bold";

console.log($linkDOM.style);

// VARIABLES CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#ccc")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-color",varDarkColor) */

// CLASES CSS EN JAVASCRIPT

/* const $card = document.querySelector(".card") 

console.log($card)

console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.classList)
console.log($card.classList.remove("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList)
$card.classList.toggle("rotate-45")
console.log($card.classList)
$card.classList.toggle("rotate-45")
console.log($card.classList)
console.log($card.classList.replace("rotate-45","rotate-135"))
$card.classList.add("opacity-80","sepia")
$card.classList.toggle("rotate-135")
 */

// TEXTO Y HTML

/* const $whatlsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
    API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

//$whatlsDOM.innerText = text;
$whatlsDOM.textContent = text;
$whatlsDOM.innerHTML = text;
$whatlsDOM.outerHTML = text */

// DOM TRAVERSING RECORRIENDO EL DOM

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("body"));
console.log($cards.closest("div"));
console.log($cards.children[3].closest("section")); */

// CREAR ELEMENTOS Y FRAGMENTOS DEL DOM

/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-k3Bp5Gi_aFfEWGOcfcXg-lQnDPrZxnDLA&s"
);
$img.setAttribute("Alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-k3Bp5Gi_aFfEWGOcfcXg-lQnDPrZxnDLA&s" alt = "Otro">
<figcaption>Otro</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera", "otoño", "verano", "invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((element) => {
  const $li = document.createElement("li");
  $li.textContent = element;
  $ul.appendChild($li);
});

const Continentes = ["Africa", "Asia", "Europa", "Oceania", "America"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
Continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3) */

// TEMPLATES HTML

/* $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$frament = document.createDocumentFragment(),
cardContent = [
  {
    title: "Tecnología",
    img: "https://picsum.photos/200"
  },
  {
    title: "Animales",
    img: "https://picsum.photos/200"
  },
  {
    title: "Arquitectura",
    img: "https://picsum.photos/200"
  },
  {
    title: "Gente",
    img: "https://picsum.photos/200"
  },
  {
    title: "Naturaleza",
    img: "https://picsum.photos/200"
  }
]

cardContent.forEach(element => {
  $template.querySelector("img").setAttribute("src",element.img);
  $template.querySelector("img").setAttribute("alt",element.title);
  $template.querySelector("figcaption").textContent = element.title;

  let $clone = document.importNode($template,true)
  $frament.appendChild($clone)
})

$cards.appendChild($frament) */

// MODIFICAR ELEMENTOS Old Style

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$clone = $cards.cloneNode(true)

$newCard.innerHTML = `
<img src="https://picsum.photos/200" alt="Any">
<figcaption>Any</figcaption>
`
$newCard.classList.add("card")

document.body.appendChild($clone)
 */
//$cards.replaceChild($newCard,$cards.children[2])
//$cards.removeChild($cards.lastElementChild)
//$cards.insertBefore($newCard,$cards.firstElementChild)

// MODIFICAR ELEMENTOS

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"); */

/* $newCard.innerHTML = `
<img src="https://picsum.photos/200" alt="Any">
<figcaption>Any</figcaption>
` */

/* let $contentCard = `
<img src="https://picsum.photos/200" alt="Any">
<figcaption></figcaption>
`


$newCard.classList.add("card")
//$cards.insertAdjacentElement("afterbegin",$newCard)

$cards.insertAdjacentHTML("afterbegin",$contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any") */

// MANEJADORES DE EVENTOS

/* function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("eventoSemantico");

function saludar(persona = "Desconocido"){
  alert(`Hola ${persona}`)
}

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola piche pendejo");
  console.log(e);
  console.log(event);
};

const $eventoMultiple = document.getElementById("multipleEvent");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("manejador de piches eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

$eventoMultiple.addEventListener("click",()=>saludar("Angel")
)
const $eventoRemover = document.getElementById("deleteEvent")
const removerDBC = (e)=>{
  alert(`Removiendo el evento de tipo ${e.type}`)
  console.log(e)
  $eventoRemover.removeEventListener("dblclick",removerDBC)
}

$eventoRemover.addEventListener("dblclick",removerDBC)

 */

// BOM : Browser object model
/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("***********RESIZE************");
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerHeight);
  console.log(window.outerWidth);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("***********SCROLL************");
  console.log(window.scrollY);
  console.log(window.scrollX);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.clear();
  console.log("***********LOAD************");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);

});


document.addEventListener("DOMContentLoaded",e=>{
  console.log("*************DOMContentLoaded**********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}) */

//BOM Metodos del BOM:

/* window.alert("alert")
window.confirm("Confirma")
window.prompt("Di cosas") */

/* const $btnOpen = document.getElementById("Abrir-ventana");
const $btnClose = document.getElementById("Cerrar-ventana");
const $btnPrint = document.getElementById("Imprimir-ventana");

let ventana;

$btnOpen.addEventListener("click", (e) => {
  ventana = window.open("https://www.google.es");
});
$btnClose.addEventListener("click", (e) => {
  ventana.close();
});
$btnPrint.addEventListener("click", (e) => {
  window.print();
});
 */

// BOM important Objects

/* console.log("*************OBJETO URL (location)********************");
console.log(location)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.pathname) */



/* console.log("*************HISTORY (History)********************");
console.log(history)
console.log(history.length)
console.log(history.back(3))
console.log(history.forward(-3))
console.log(history.go(1)) */


console.log("*************Navigator (Navigator)********************");
console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)
