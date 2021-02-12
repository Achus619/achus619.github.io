function caer() {
  const holis = document.querySelector("#holis");
  const body = document.querySelector("body");
  const punto = document.querySelector(".punto");
  const bienvenidx = document.querySelector("#bienvenidx");
  if (!holis || !body || !punto || !bienvenidx) {
    console.error("No encontré los elementos");
    return;
  }
  holis.classList.add("holis-subir");
  body.classList.add("background-scroll");
  punto.classList.add("punto-cayendo", "ocultar-pulso");
  bienvenidx.classList.add("bienvenidx-subir");
}
