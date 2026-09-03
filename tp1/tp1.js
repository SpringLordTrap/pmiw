let pantalla = 0;
let Frespiracion = [];
let Fsinging = [];
let options = [">> start", ">> exit", "CONTROLA A \nADVENTURE \nFREDDY"];
let x = 80;
let y1 = 450;
let y2 = 550;
// Valores de Burbujas
let xBurbuja = -200;
let oBurbuja = 0;
let anchoBurbuja  = 350;
let altoBurbuja = 150;
let posX_final = 50; 
let posY_final = 250; 
let posY_final2 = 150;
let indice = 0;
let estaCantando = false;
let velocidadAnim = 10; 
function preload() {
  menu = loadImage("data/menu.png");
  fondo = loadImage("data/fondo.png");
  estatica = loadImage("data/estatica.jpg");
//BURBUJAS DE ACCION
  burbujaMenu = loadImage("data/Burbujas/irmenu.png");
  burbujaCantar = loadImage("data/Burbujas/cantar.png");
  burbujaReset = loadImage("data/Burbujas/reset.png");  

  for (let i = 0; i < 6; i++) {
    Frespiracion[i] = loadImage("data/AFreddyBreath/" + nf(i + 1, 4) + ".png");
    Fsinging[i] = loadImage("data/AFreddySinging/" + nf(i + 1, 4) + ".png");
  }
}

//____________________________________________________________________________________________________________________________

function setup() {
  createCanvas(800, 600);
}

//____________________________________________________________________________________________________________________________

function draw() {
  if (pantalla === 0) {
    dibujarMenu();
  } else if (pantalla === 1) {
    AdventureFreddy();
  }
}

//____________________________________________________________________________________________________________________________

function dibujarMenu() {
  background(0);
  image(menu, 0, 0, 800, 600);
  tint(255, 30);
  image(estatica, 0, 0, 800, 600);
  noTint();
  
  fill(255);
  textSize(50);
  text(options[0], x, y1);
  text(options[1], x, y2);
  
  textSize(60);
  text(options[2], 50, 100);
  
    /*
  fill(255, 255, 0); 
  textSize(16);
  text("X: " + mouseX + " | Y: " + mouseY, mouseX + 10, mouseY - 10); //es una manera para poder ver en que coordenada estoy
  */
  
}

//____________________________________________________________________________________________________________________________

function AdventureFreddy() {
  background(255);
  image(fondo, 0, 0, 800, 600);
  
  if (estaCantando) {
    dibujarAnimacion(Fsinging,300,10,velocidadAnim);
  } else {
    dibujarAnimacion(Frespiracion,300,10,velocidadAnim); }
  // Animación de los botones
  if (xBurbuja < posX_final) { xBurbuja += 8; }
  if (oBurbuja < 255) { oBurbuja += 10; }
  //Burbuja del menu
  tint(255, oBurbuja); 
  image(burbujaMenu, xBurbuja, posY_final, anchoBurbuja, altoBurbuja); 
  //burbuja cantando o de reset dependiendo si clickeas o no
  if (estaCantando) {
    image(burbujaReset,xBurbuja,posY_final2,anchoBurbuja,altoBurbuja);
  } else {
    image(burbujaCantar,xBurbuja,posY_final2,anchoBurbuja,altoBurbuja);
  }
  noTint();
}

//____________________________________________________________________________________________________________________________

function dibujarAnimacion(arrayImagenes,posX,posY,velocidad) {
  image(arrayImagenes[indice],posX,posY,600,600);
    if (frameCount % velocidad === 0) {
    indice++; }
  if (indice >= arrayImagenes.length) {
    indice = 0; }
}

//____________________________________________________________________________________________________________________________

function cambiarEstado(nuevaPantalla) {
  pantalla = nuevaPantalla;
  xBurbuja = -200;
  oBurbuja = 0;
  estaCantando = false;
  indice = 0;
}

//____________________________________________________________________________________________________________________________

//para volver al menu
function estaEnMenu() {
  return pantalla === 0;
}

//____________________________________________________________________________________________________________________________

function mousePressed() {
  if (estaEnMenu()) {
    if (mouseX >= 70 && mouseX <= 260 && mouseY >= 412 && mouseY <= 455) {
      cambiarEstado(1);
    }
  } else if (pantalla === 1) {
    // Clic botón cantar y reset
    if (mouseX >= posX_final && mouseX <= posX_final + anchoBurbuja &&
        mouseY >= posY_final2 && mouseY <= posY_final2 + altoBurbuja) {
      estaCantando = !estaCantando;
      indice = 0;
    }
    // Clic botón ir al menú
    if (mouseX >= posX_final && mouseX <= posX_final + anchoBurbuja &&
        mouseY >= posY_final && mouseY <= posY_final + altoBurbuja) {
      cambiarEstado(0); 
    }
  }
}
