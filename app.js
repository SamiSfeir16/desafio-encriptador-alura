const mensaje = document.querySelector(".main__receptor__texto__textarea");
const btnEncriptar = document.querySelector(".btn__encriptar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");
const cajaResultado = document.querySelector(".main__resultado");
const imagenResultado = document.querySelector(".main__resultado__muñeco");
const textoResultado = document.querySelector(".main__resultado__texto__texto");
const textoConvertido = document.querySelector(
  ".main__resultado__texto__anuncio"
);
const btnCopiar = document.querySelector(".btn__copiar");

const llaves = {
  encriptar: {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  },

  desencriptar: {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  },
};

const conversion = function (opcion) {
  let textoOri = mensaje.value.trim();
  let textoConv = textoOri;

  if (validacionCadena(textoOri)) {
    for (const [key, value] of Object.entries(llaves[opcion])) {
      textoConv = textoConv.replaceAll(key, value);
    }
    mostrarTexto(textoConv);
  } else {
    alert("Solo letras minúsculas y sin acentos");
  }
};

const mostrarTexto = function (texto) {
  imagenResultado.remove();
  textoResultado.classList.add("ocultar");
  textoConvertido.classList.add("main__resultado__texto__anuncio--active");
  textoConvertido.textContent = texto;
};

const validacionCadena = (cadena) =>
  !/[áéíóúÁÉÍÓÚ]/.test(cadena) && cadena === cadena.toLowerCase();

btnEncriptar.addEventListener("click", function () {
  conversion("encriptar");
});

btnDesencriptar.addEventListener("click", function () {
  conversion("desencriptar");
});

btnCopiar.addEventListener("click", function () {
  const mensajeConvertido = document.querySelector(
    ".main__resultado__texto__anuncio--active"
  );
  if (mensajeConvertido !== null) {
    navigator.clipboard.writeText(mensajeConvertido.textContent);
    alert("Texto Copiado");
  }
});
