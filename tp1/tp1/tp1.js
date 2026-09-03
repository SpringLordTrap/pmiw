
let pantalla = 0
let Frespiracion = []; //Esto es la variable que voy a utilizar para llamar a las imagenes
let Fsinging = [];
let options = [">> start",">> exit","CONTROLA A \nADVENTURE \nFREDDY"]; //Esto es para el menú y las opciones
let x = 80;
let y1 = 450;
let y2 = 550;
//valores de Burbujas
let xBurbuja = -200;
let oBurbuja = 0;
let anchoBurbuja  = 350;
let altoBurbuja = 150;
let posX_final = 50; 
let posY_final = 250; 
let posY_final2 = 150;
//
let indice = 0;
let Cantando = false
let velocidadAnim = 10;
function preload() {
  menu = loadImage("data/menu.png");
  fondo = loadImage("data/fondo.png");
  estatica = loadImage("data/estatica.jpg");
//BURBUJAS DE ACCION
  burbujaMenu = loadImage("data/Burbujas/irmenu.png");
  burbujaCantar = loadImage("data/Burbujas/cantar.png");
  burbujaReset = loadImage("data/Burbujas/reset.png");  

for (let i = 0; i<6; i++) {
    Frespiracion [i] = loadImage("data/AFreddyBreath/" +nf(i+1,4)+ ".png");
    Fsinging [i] = loadImage("data/AFreddySinging/" +nf(i+1,4)+ ".png");
  }
}

//____________________________________________________________________________________________________________________________

function setup() {
 createCanvas (800,600);
}

//____________________________________________________________________________________________________________________________

function draw() {
  if(pantalla===0){
   dibujarMenu();
     } else if(pantalla===1){
       AdventureFreddy();
     }
}

//____________________________________________________________________________________________________________________________

function dibujarMenu() {
  background(0);
  image(menu,0,0,800,600); //esta es la primera imagen, la del menú
  tint(255, 30); //tint es para cambiar la opacidad de la imagen de la estatica. El 255 es blanco, y el otro valor es la opacidad de la imagen
  image(estatica,0,0,800,600);
  noTint(); //esto es para que la opacidad no se baje en las siguientes fotos que vaya a usar
  
  fill(255);
  textSize(50);
  text(options[0],x,y1);
  text(options[1],x,y2);
  
  textSize(60);
  text(options[2],50,100);
  
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
  
  //esto es para la animacion del personaje
  if (estaCantando) {
    image(Fsinging[indice], 300, 10, 600, 600);
  } else {
    image(Frespiracion[indice], 300, 10, 600, 600);
  }
  // Velocidad que quiero que vaya las dos animaciones
  if (frameCount % 10 === 0) {
    indice++;  }
  // Reinicia el contador de fotogramas segun la animacion que esta activa
  if (estaCantando) {
    if (indice >= Fsinging.length) {
      indice = 0; }
  } 
  else {
    if (indice >= Frespiracion.length) {
      indice = 0;  }
  }

  //esto es para la animacion del boton del menu
  if (xBurbuja < posX_final) {
    xBurbuja += 8; }
  if (oBurbuja < 255) {
    oBurbuja += 10; }
  tint(255, oBurbuja); 
  image(burbujaMenu, xBurbuja, posY_final, anchoBurbuja, altoBurbuja); 
  noTint();
  
    //esto es para la animacion del boton de cantar 
  
  if (xBurbuja < posX_final) {
    xBurbuja += 8; }
  if (oBurbuja < 255) {
    oBurbuja += 10; }
  tint(255, oBurbuja); 
  if(estaCantando) {
  image(burbujaReset, xBurbuja, posY_final2, anchoBurbuja, altoBurbuja); }
  else {
  image(burbujaCantar, xBurbuja, posY_final2, anchoBurbuja, altoBurbuja); }
  noTint();
  
}

//____________________________________________________________________________________________________________________________

  function mousePressed() {
    if (pantalla === 0) {
    if (mouseX >= 70 && mouseX <= 260 && mouseY >= 412 && mouseY <= 455) {
      pantalla = 1;
    xBurbuja = -200;
    oBurbuja = 0;
    
    estaCantando = false; //Esto hace que su estado base, inicial, sea siempre la de respirar
    }
  } else if (pantalla === 1) {
    //Clic sobre el boton de cantar
    if (mouseX >= posX_final && mouseX <= posX_final + anchoBurbuja &&
        mouseY >= posY_final2 && mouseY <= posY_final2 + altoBurbuja) {
        estaCantando = !estaCantando; // Alterna entre cantar y respirar
        indice = 0; }// Reinicia el contador para que la animación empiece desde el frame 0
     //click sobre el boton ir menu
     if (mouseX >= posX_final && mouseX <= posX_final + anchoBurbuja &&
         mouseY >= posY_final && mouseY <= posY_final + altoBurbuja) {
         pantalla = 0; // Regresa al menú inicial
         estaCantando = false;
         indice = 0;
    }
  }
 }
