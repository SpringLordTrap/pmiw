/*
https://youtu.be/WMWPfuXif-o
Thomas De Maio 126976/6
Comisión 3
*/

let Escenarios = [];
let Dialogos = [];
let Finales = [];
let Opciones = [];
let imgAdvertencia, imgCreditos, imgMapa, imgMascara, imgReset, imgEstatica;
let musicaFinales;
let Musica = [];
let pantalla = "ADVERTENCIA";
let textoAlpha = 0;
let fadePantalla = 0;

//desiciones
let subEstado = "DECISION";
let opcionesAlpha = 0;
let opcion1X = -200;
let opcion2X = 888;

//-----------------------------------------------------------------------------------------------------------------------------

//textos/líneas/diálogos
let lineaDialogo = 0;
let textosEscena1 = [
  "NARRADOR: Un día como cualquier otro, Mike se pone a leer el diario tranquilamente hasta que encuentra un anuncio en búsqueda de nuevo personal para la reapertura de la antigua pizzería de su infancia...",
  "NARRADOR: Mike se contacta con el número y se le informa que trabajaría como guardia nocturno de 12 a 6 a.m. Mike duda por un momento, pero termina aceptando el puesto...",
  "NARRADOR: Al poco tiempo decide tomarse una siesta por la tarde para así poder soportar hasta las 6 a.m"
];
let textosEscena2 = [
  "MIKE: ¡Aún no puedo creer que vaya a trabajar en Freddy Fazbear's Pizza! Ese lugar me trae tantos buenos recuerdos.",
  "MIKE: Los cumpleaños de mis amigos, la sala de arcade, la buena pizza... ¡y los animatrónicos! ¿Cómo no extrañarlos? Freddy el oso, Bonnie el conejo, Chica el pollo...",
  "MIKE: De tanto pensar en la pizzería me está dando hambre, voy a ver qué hay en la heladera así morfo algo mientras termino de verme esta serie",
  "NARRADOR: Al joven Mike se le pasó la tarde volando viendo la tele.",
  "MIKE: ¿¡Cómo vas a terminar el episodio así!? Me urge ver cómo sigue, no me puedo quedar con la duda... Igual, me estoy cayendo del sueño, no sé cómo haré en el trabajo...",
  "MIKE: Uh, ya son casi las 11, debería estar preparándome... pero qué fiaca. Bueno, toca hacerlo, así es la vida. Aunque... un episodio más no le hará daño a nadie."
];
let textosEscena2punto5 = [
  "NARRADOR: Lo que Mike ignoró es que la comodidad del sillón eventualmente le ganaría. El joven se quedó dormido en la mitad del episodio y para cuando se despertó ya eran las 2 a.m."
];
let textosEscena3 = [
  "MIKE: Se ve... más tétrica de lo que recordaba... probablemente por la hora y la falta de luz.",
  "MIKE: Vos podés Mike, solo entrá y avanzá hasta la sala de seguridad. Decí que me pasaron un mapa del lugar y de paso me traje una linterna."
];
let textosEscena4 = [
  "MIKE: Debe ser acá. Con razón me pasaron un mapa, este lugar es enorme. Y no parece haber nadie... No sé si sorprenderme, por algo pedían staff nocturno.",
  "TELÉFONO: ¿Hola? ¿Hola? ¿Se escucha? Bueno, espero que sí. ¿Qué tal, empleado? Este es un mensaje pregrabado para los próximos guardias de seguridad.",
  "TELÉFONO: Mirá, no me pagan por esto, y por el bien de mi salud mental no pienso seguir en este puesto, pero pensaba dejar esta mini ayuda para quien le sirva.",
  "TELÉFONO: Desde mi experiencia, lo que más te van a servir serán el mini televisor en tu escritorio para ver las cámaras y la máscara de oso debajo de la silla. Arrancá yendo a la cámara 7."
];
let textosEscena5 = [
  "MIKE: ¡Dios mío, pero qué cambiados están! La reapertura vino con nuevas caras.",
  "TELÉFONO: Deberías estar viendo el escenario con los animatrónicos si es que no cambiaron las cámaras. Echales un ojo siempre que puedas. Si vas a revisarlos en persona, ponete la máscara de oso, vos haceme caso. Pasá a la cámara 9."
];
let textosEscena6 = [
  "TELÉFONO: Esa es la sala de premios. Lo importante acá es esa enorme caja musical. Cada que accedas a esta cámara podrás ver un opción para darle cuerda a la caja. Hacelo. Constantemente. O te arrepentirás.",
  "TELÉFONO: Eso es todo, prácticamente. Por supuesto que hay otras cámaras pero no son realmente útiles a menos que entren a robar. Seguro estés lleno de preguntas, pero ya irás agarrándole la mano. ¡Suerte, la necesitarás!",
  "MIKE: ...Qué tipo más raro, no tuvo ningún sentido todo lo que me dijo... Bueno, quiero volver a ver los nuevos animatrónicos."
];
let textosEscena7 = [
  "MIKE: Pero... ¡¿Qué?! ¡¿Adónde se fueron los otros dos?! ¡¿Acaso entraron a robar?!",
  "NARRADOR: Mike escucha ruidos en frente suyo. Desvía sus ojos del mini televisor y enciende su linterna."
];
let textosEscena8 = [
  "MIKE: Pero... ¡¿Chica?! ¡¿Qué hace ahí?! ¡¿Desde cuándo pueden moverse de sus posiciones?! ¡Esto es completamente nuevo! ¡Y aterrador!",
  "NARRADOR: Se escuchan ruidos a su derecha. Mike dirige su linterna hacia el conducto de ventilación."
];
let textosEscena9 = [
  "MIKE: ¡¿Bonnie?! ¡¿Cómo te metiste ahí?! ¡¡Me está viendo fijamente!! La linterna parece que lo dejó inmovilizado, ¡¿pero y ahora qué hago?!"
];
let textosEscena10 = [
  "NARRADOR: Mike baja la guardia y descansa por un rato. Se toma un momento para respirar y procesar todo lo que acaba de pasar en silencio.",
  "NARRADOR: El tiempo pasa y los ruidos regresan, esta vez aún más intimidantes y fuertes, como si algo grande se aproximara."
];
let textosEscena11 = [
  "NARRADOR: Mike siente nervios, tensión y calor con la máscara puesta. Vuelven a sonar ruidos metálicos a su derecha pero Mike se mantiene tembloroso y con los ojos cerrados del miedo.",
  "NARRADOR: Pasan los minutos y aún no se quita la máscara... Hasta que nuevamente percata sonidos metálicos, pero esta vez de su lado izquierdo.",
  "NARRADOR: Mike se siente incapaz de quitarse la máscara a pesar del sudor en su cara por sus nervios, respiración rápida y jadeo. Nuevamente hay ruidos provenientes del conducto izquierdo y entonces Mike lo asocia con la huida del peligro.",
  "NARRADOR: Dudándolo un poco, decide sacarse la máscara al no poder soportar el sofocante calor."
];
let textosEscena12 = [
  "MIKE: Dios... Mío... ¿Qué clase de pesadilla es esta? ¡¿Cuándo acaba este sufrimiento?! ¡¿Y qué hora es?!",
  "MIKE: Son las 5:45, prácticamente las 6. Yo me largo de acá, ni loco gasto un minuto más en este infierno. Ya ni sé si estoy alucinando, cualquier segundo más acá podría ser el último. Más les vale me paguen por esto, incluso si no cumplí las 6 horas exactas.",
  "MIKE: No... Necesito asegurar esa plata, no hice todo esto en vano. Además, siento que estoy olvidando algo... Revisaré de nuevo las cámaras."
];
let textosEscena13 = [
  "MIKE: ¿¡Y esa marioneta tan perturbadora!? ¡AH, está saliendo de la caja musical! ¡¡Olvidé darle cuerda!!",
  "NARRADOR: Mike procede a darle cuerda a la caja musical a través de la opción incorporada en la pantalla, salvándose el pellejo casi de milagro."
];
let textosEscena14 = [
  "NARRADOR: Pero al llegar, el joven es recibido con una penosa nota de despido en la puerta. Perdió la oportunidad de trabajar en el lugar de su infancia.",
  "NARRADOR: En una mezcla de emociones de tristeza y furia, Mike se desquita con la puerta principal del local e irrumpe en él. Todo lo que quería en ese momento era volver a ver a los animatrónicos."
];
let textosEscena15 = [
  "NARRADOR: Dejándose llevar por la ira, Mike destruye a los nuevos animatrónicos sin piedad alguna y escapa de la escena del crimen."
];
let textosEscena16 = [
  "MIKE: ¡¡AHH, Freddy!! ¡La máscara! Pero... Esta una máscara de oso... ¡¡No creo que funcione con él!!"
];
let textosEscena17 = [
  "NARRADOR: Una vez más, Mike se coloca la máscara. Por un tiempo no se escuchó ningún ruido que le indique que ya esté a salvo y la presencia de Freddy aún se sentía. Eventualmente, luego de mucha incertidumbre, los sonidos de metal alejándose volvieron y Mike aliviado se quita la máscara."
];
let textosEscena18 = [
  "NARRADOR:  En un ataque de desesperación, Mike corre hacia su auto y conduce hasta la pizzería, esperando poder arreglar las cosas."
];
let textosEscena19 = [
  "NARRADOR: Pero no contaba con que ya no eran los mismos de antes ya que estos fueron remodelados.",
  "MIKE: ¡¿Y estos quiénes son?! ¡¿Qué les hicieron?! ¡¡Lo único que me faltaba, los arruinaron!!”"
];
let textosFinal1 = [
  "NARRADOR: Así es como logra Mike finalmente terminar su jornada laboral completa y recibir su tan merecido cheque. Después de esta experiencia no volvería a ver sus personajes de la infancia de la misma manera. Fin."
];
let textosFinal2 = [
  "NARRADOR: Mike es asesinado por un animatrónico al no haber prestado atención a lo que el sujeto del teléfono le dijo que haga."
];
let textosFinal3 = [
  "NARRADOR: Al día siguiente, los empleados de la mañana se encontraron con el desastre y llamaron a las autoridades para que arrestaran al culpable, Mike, quien se encuentra fugitivo."
];

//-----------------------------------------------------------------------------------------------------------------------------

//carga de imagenes
function preload() {
  for (let i = 1; i <= 16; i++) {
    let numero = nf(i, 3);
    let prefijo = (i >= 13) ? "escenario" : "escena";
    Escenarios[i - 1] = loadImage("data/escenarios/" + prefijo + numero + ".jpg");
  }
  for (let i = 1; i <= 3; i++) {
    Dialogos[i - 1] = loadImage("data/dialogos/dialogo" + i + ".png");
  }
  for (let i = 1; i <= 3; i++) {
    Finales[i - 1] = loadImage("data/finales/final" + i + ".jpg");
  }
  for (let i = 1; i <= 9; i++) {
    let numero = nf(i, 3);
    Opciones[i - 1] = loadImage("data/opciones/" + numero + ".png");
  }

  imgAdvertencia = loadImage("data/advertencia.jpg");
  imgCreditos    = loadImage("data/Creditos.jpg");
  imgMapa        = loadImage("data/mapa.png");
  imgMascara     = loadImage("data/mascara.png");
  imgReset       = loadImage("data/reset.jpg");
  imgEstatica    = loadImage("data/estatica.png");

  //carga de musica
  for (let i = 1; i <= 4; i++) {
    Musica[i - 1] = loadSound("data/musica/" + i + ".mp3");
  }
  musicaFinales = loadSound("data/musica/musicafinales.mp3");
}

//-----------------------------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(800, 450);
}

//-----------------------------------------------------------------------------------------------------------------------------

function draw() {
  background(0);
  
  if (textoAlpha < 255) {
    textoAlpha += 10;
  }

  //estructura textos
  fill(255, 255, 255, textoAlpha);
  textAlign(LEFT, TOP);
  textSize(15);

  if (pantalla === "ADVERTENCIA") {
    image(imgAdvertencia, 0, 0, width, height);

    //texto que parpadea para que el usuario sepa que debe hacer click
    if (frameCount % 60 < 30) {
      fill(255);
      textAlign(CENTER);
      textSize(20);
      text("Haz clic en la pantalla para continuar", width / 2, height - 30);
    }

//-----------------------------------------------------------------------------------------------------------------------------
  }

  //escena 1
  else if (pantalla === "ESCENA_01") {
    image(Escenarios[0], 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    text(textosEscena1[lineaDialogo], 250, 325, 450);

//-----------------------------------------------------------------------------------------------------------------------------
  }

  //escena 2
  else if (pantalla === "ESCENA_02") {
    image(Escenarios[1], 0, 0, width, height);

    let textoActual = "";
    if (subEstado === "NARRADOR_DESCANSO") {
      textoActual = textosEscena2punto5[0];
    } else {
      textoActual = textosEscena2[lineaDialogo];
    }

    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
    } else if (textoActual.startsWith("NARRADOR:")) {
      image(Dialogos[2], -80, 220, 900, 300);
    }
    text(textoActual, 250, 325, 450);

    //desicion
    if (subEstado === "DECISION") {
      if (opcionesAlpha < 255) {
        opcionesAlpha += 8;
      }
      opcion1X = lerp(opcion1X, 150, 0.08);
      opcion2X = lerp(opcion2X, 480, 0.08);
      tint(255, opcionesAlpha);
      image(Opciones[0], opcion1X, 185, 240, 70);
      image(Opciones[1], opcion2X, 185, 240, 70);
      noTint();
    }


//-----------------------------------------------------------------------------------------------------------------------------
  }

  //escena 3
  else if (pantalla === "ESCENA_03") {
    image(Escenarios[2], 0, 0, width, height);
    image(Dialogos[0], -80, 220, 900, 300)
    if (lineaDialogo === 1) {
      image(imgMapa, 70, -70, 700, 450);
  }
  fill(255, 255, 255, textoAlpha);
    text(textosEscena3[lineaDialogo], 250, 325, 450);
  }
  
//-----------------------------------------------------------------------------------------------------------------------------

  //escena 4
  else if (pantalla === "ESCENA_04") {
    image(Escenarios[3], 0, 0, width, height);


    if (textosEscena4[lineaDialogo].startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
    } else if (textosEscena4[lineaDialogo].startsWith("TELÉFONO:")) {
      image(Dialogos[1], -80, 220, 900, 300);
    }
    text(textosEscena4[lineaDialogo], 250, 325, 450);
  }
  
//-----------------------------------------------------------------------------------------------------------------------------

  //escena 5
  else if (pantalla === "ESCENA_05") {
    image(Escenarios[4], 0, 0, width, height);
    tint(255, 100);
    image(imgEstatica, 0, 0, width, height);
    noTint();

    let textoActual = textosEscena5[lineaDialogo];

    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
    } else if (textoActual.startsWith("TELÉFONO:")) {
      image(Dialogos[1], -80, 220, 900, 300);
    }
    text(textoActual, 250, 325, 450);
  }

//-----------------------------------------------------------------------------------------------------------------------------

  //escena 6
  else if (pantalla === "ESCENA_06") {
    image(Escenarios[5], 0, 0, width, height);
    tint(255, 100);
    image(imgEstatica, 0, 0, width, height);
    noTint();

    let textoActual = textosEscena6[lineaDialogo];

    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
    } else if (textoActual.startsWith("TELÉFONO:")) {
      image(Dialogos[1], -80, 220, 900, 300);
    }
    text(textoActual, 250, 325, 450);
  }

//-----------------------------------------------------------------------------------------------------------------------------

  //escena 7
  else if (pantalla === "ESCENA_07") {
    image(Escenarios[6], 0, 0, width, height);
    tint(255, 100);
    image(imgEstatica, 0, 0, width, height);
    noTint();

    let textoActual = textosEscena7[lineaDialogo];

    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
    } else if (textoActual.startsWith("NARRADOR:")) {
      image(Dialogos[2], -80, 220, 900, 300);
    }
    text(textoActual, 250, 325, 450);
  }

//-----------------------------------------------------------------------------------------------------------------------------

  //escena 8
  else if (pantalla === "ESCENA_08") {
    image(Escenarios[7], 0, 0, width, height);

    let textoActual = textosEscena8[lineaDialogo];

    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
    } else if (textoActual.startsWith("NARRADOR:")) {
      image(Dialogos[2], -80, 220, 900, 300);
    }
    text(textoActual, 250, 325, 450);
  }

//-----------------------------------------------------------------------------------------------------------------------------

  //escena 9
  else if (pantalla === "ESCENA_09") {
    image(Escenarios[8], 0, 0, width, height);

   image(Dialogos[0], -80, 220, 900, 300);
   fill(255, 255, 255, textoAlpha);
   text(textosEscena9[lineaDialogo], 250, 325, 450);
   
   if (subEstado === "DECISION") {
      if (opcionesAlpha < 255) {
        opcionesAlpha += 8;
      }
      opcion1X = lerp(opcion1X, 150, 0.08);
      opcion2X = lerp(opcion2X, 480, 0.08);
      tint(255, opcionesAlpha);
      
      image(Opciones[4], opcion1X, 185, 240, 70); 
      image(Opciones[5], opcion2X, 185, 240, 70);
      noTint();
    }
    
//-----------------------------------------------------------------------------------------------------------------------------
    
//escena 10
  } else if (pantalla === "ESCENA_10") {
    image(Escenarios[8], 0, 0, width, height);
    image(imgMascara, 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena11[lineaDialogo], 250, 325, 450);
    if (subEstado === "DECISION") {
      if (opcionesAlpha < 255) {
        opcionesAlpha += 8;
      }
      opcion1X = lerp(opcion1X, 150, 0.08);
      opcion2X = lerp(opcion2X, 480, 0.08);
      tint(255, opcionesAlpha);
      image(Opciones[3], opcion1X, 185, 240, 70); 
      image(Opciones[4], opcion2X, 185, 240, 70);
      noTint();
  }
    else if (pantalla === "FINAL_2") {
      image(Finales[1], 0, 0, width, height);
      }

  
//-----------------------------------------------------------------------------------------------------------------------------

//escena 11
  } else if (pantalla === "ESCENA_11") {
    image(Escenarios[12], 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena10[lineaDialogo], 250, 325, 450);

//-----------------------------------------------------------------------------------------------------------------------------

//escena 12
  } else if (pantalla === "ESCENA_12") {
    image(Escenarios[11], 0, 0, width, height);
    image(Dialogos[0], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena16[lineaDialogo], 250, 325, 450);
    if (subEstado === "DECISION") {
      if (opcionesAlpha < 255) {
        opcionesAlpha += 8;
      }
      opcion1X = lerp(opcion1X, 150, 0.08);
      opcion2X = lerp(opcion2X, 480, 0.08);
      tint(255, opcionesAlpha);
      image(Opciones[6], opcion1X, 185, 240, 70); // Botón izquierdo
      image(Opciones[4], opcion2X, 185, 240, 70); // Botón derecho
      noTint();
    }
  }
  
//-----------------------------------------------------------------------------------------------------------------------------

//escena 13
    else if (pantalla === "ESCENA_13") {
    image(Escenarios[11], 0, 0, width, height);
    image(imgMascara, 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena17[lineaDialogo], 250, 325, 450);
    
 //-----------------------------------------------------------------------------------------------------------------------------
 
//escena 14
  }  else if (pantalla === "ESCENA_14") {
    image(Escenarios[9], 0, 0, width, height);
    image(Dialogos[0], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena12[lineaDialogo], 250, 325, 450);
    if (subEstado === "DECISION") {
      if (opcionesAlpha < 255) {
        opcionesAlpha += 8;
      }
      opcion1X = lerp(opcion1X, 150, 0.08);
      opcion2X = lerp(opcion2X, 480, 0.08);
      tint(255, opcionesAlpha);
      image(Opciones[7], opcion1X, 185, 240, 70); 
      image(Opciones[8], opcion2X, 185, 240, 70);
      noTint();
    }

//-----------------------------------------------------------------------------------------------------------------------------


//escena 15
  }  else if (pantalla === "ESCENA_15") {
    image(Escenarios[13], 0, 0, width, height);
    tint(255, 100);
    image(imgEstatica, 0, 0, width, height);
    noTint();
    let textoActual = textosEscena13[lineaDialogo];
    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
      } else if (textoActual.startsWith("NARRADOR:")) {
      image(Dialogos[2], -80, 220, 900, 300);
      }
      fill(255, 255, 255, textoAlpha);
    text(textoActual, 250, 325, 450);
  

//-----------------------------------------------------------------------------------------------------------------------------
  
//final 1
  } else if (pantalla === "FINAL_1") {
    image(Finales[0], 0, 0, width, height); 
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosFinal1[lineaDialogo], 250, 325, 450);
  }
  else if (pantalla === "PANTALLA_RESET") {
    image(imgReset, 0, 0, width, height);
  }
  else if (pantalla === "CREDITOS") {
    image(imgCreditos, 0, 0, width, height); 

    

//-----------------------------------------------------------------------------------------------------------------------------

//final 2
  }    else if (pantalla === "FINAL_2") {
    image(Finales[1], 0, 0, width, height); 
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosFinal2[lineaDialogo], 250, 325, 450);
  }
  else if (pantalla === "PANTALLA_RESET") {
    image(imgReset, 0, 0, width, height);
  }
  else if (pantalla === "CREDITOS") {
    image(imgCreditos, 0, 0, width, height); 
  }

//-----------------------------------------------------------------------------------------------------------------------------

    else if (pantalla === "ESCENA_16") {
    image(Escenarios[2], 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300)
    if (lineaDialogo === 1) {
      image(imgMapa, 70, -70, 700, 450);
  }
  fill(255, 255, 255, textoAlpha);
    text(textosEscena18[lineaDialogo], 250, 325, 450);
  }
    

//-----------------------------------------------------------------------------------------------------------------------------

    else if (pantalla === "ESCENA_17") {
    image(Escenarios[14], 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena14[lineaDialogo], 250, 325, 450);
  }

//-----------------------------------------------------------------------------------------------------------------------------

     else if (pantalla === "ESCENA_18") {
    image(Escenarios[4], 0, 0, width, height);
    let textoActual = textosEscena19[lineaDialogo];
    if (textoActual.startsWith("MIKE:")) {
      image(Dialogos[0], -80, 220, 900, 300);
      } else if (textoActual.startsWith("NARRADOR:")) {
      image(Dialogos[2], -80, 220, 900, 300);
      }
      fill(255, 255, 255, textoAlpha);
    text(textoActual, 250, 325, 450);
     }

//-----------------------------------------------------------------------------------------------------------------------------

   else if (pantalla === "ESCENA_19") {
    image(Escenarios[15], 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosEscena15[lineaDialogo], 250, 325, 450);
   }

//-----------------------------------------------------------------------------------------------------------------------------

   else if (pantalla === "FINAL_3") {
    image(Finales[2], 0, 0, width, height);
    image(Dialogos[2], -80, 220, 900, 300);
    fill(255, 255, 255, textoAlpha);
    text(textosFinal3[lineaDialogo], 250, 325, 450);
   }
    else if (pantalla === "PANTALLA_RESET") {
    image(imgReset, 0, 0, width, height);
   }
    else if (pantalla === "CREDITOS") {
    image(imgCreditos, 0, 0, width, height); 
  }

//-----------------------------------------------------------------------------------------------------------------------------
  
  if (fadePantalla > 0) {
    fill(0, 0, 0, fadePantalla);
    rect(0, 0, width, height); 
    fadePantalla -= 8; }
}

//-----------------------------------------------------------------------------------------------------------------------------

function mousePressed() {

  if (pantalla === "ADVERTENCIA") {
    pantalla = "ESCENA_01";
    userStartAudio();
    if (Musica[0] && Musica[0].isLoaded()) {
      if (!Musica[0].isPlaying()) {
        Musica[0].setVolume(0.5);
        Musica[0].loop();
      }
    } else {
      console.log("El audio 1 no cargó o falta la librería p5.sound.");
    }

    //escena 1
  } else if (pantalla === "ESCENA_01") {
    if (lineaDialogo < textosEscena1.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_02";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
      subEstado = "DIALOGO";
      opcionesAlpha = 0;
      opcion1X = -200;
      opcion2X = 888;
    }

    //escena 2
  } else if (pantalla === "ESCENA_02") {
    if (subEstado === "DIALOGO") {
      if (lineaDialogo < textosEscena2.length - 1) {
        lineaDialogo++;
        textoAlpha = 0;
      } else {
        subEstado = "DECISION";
      }
    } else if (subEstado === "DECISION") {
      if (mouseX > 150 && mouseX < 390 && mouseY > 185 && mouseY < 255) {
        pantalla = "ESCENA_03";
        fadePantalla = 255;
        subEstado = "DIALOGO";
        lineaDialogo = 0;
        textoAlpha = 0;
        if (Musica[0].isPlaying()) Musica[0].stop();
        if (Musica[1] && Musica[1].isLoaded() && !Musica[1].isPlaying()) {
          Musica[1].setVolume(0.5);
          Musica[1].loop();
        }
      } else if (mouseX > 480 && mouseX < 720 && mouseY > 185 && mouseY < 255) {
        subEstado = "NARRADOR_DESCANSO";
        textoAlpha = 0;
      }
    } else if (subEstado === "NARRADOR_DESCANSO") {
      pantalla = "ESCENA_16";
      fadePantalla = 255;
      subEstado = "DIALOGO";
      lineaDialogo = 0;
      textoAlpha = 0;
      if (Musica[0].isPlaying()) Musica[0].stop();
      if (Musica[1] && Musica[1].isLoaded() && !Musica[1].isPlaying()) {
        Musica[1].setVolume(0.5);
        Musica[1].loop();
      }
    }
  }

  //escena 3
  else if (pantalla === "ESCENA_03") {
    if (lineaDialogo < textosEscena3.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_04";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }

  //escena 4
  else if (pantalla === "ESCENA_04") {
    if (lineaDialogo < textosEscena4.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_05";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }

  //escena 5
  else if (pantalla === "ESCENA_05") {
    if (lineaDialogo < textosEscena5.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_06";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }

  //escena 6
  else if (pantalla === "ESCENA_06") {
    if (lineaDialogo < textosEscena6.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_07";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }

  //escena 7
  else if (pantalla === "ESCENA_07") {
    if (lineaDialogo < textosEscena7.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_08";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }

  //escena 8
  else if (pantalla === "ESCENA_08") {
    if (lineaDialogo < textosEscena8.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    } else {
      pantalla = "ESCENA_09";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }

  //escena 9
  else if (pantalla === "ESCENA_09") {
  if (subEstado === "DIALOGO") {
      if (lineaDialogo < textosEscena9.length - 1) {
        lineaDialogo++;
        textoAlpha = 0;
      } else {
        subEstado = "DECISION"; 
        opcionesAlpha = 0;
        opcion1X = -200;
        opcion2X = 888;
      }
    }
    else if (subEstado === "DECISION") {
      if (mouseX > 150 && mouseX < 390 && mouseY > 185 && mouseY < 255) {
        pantalla = "ESCENA_10";
        fadePantalla = 255;
        subEstado = "DIALOGO";
        lineaDialogo = 0;
        textoAlpha = 0;
      } 
      else if (mouseX > 480 && mouseX < 720 && mouseY > 185 && mouseY < 255) {
        pantalla = "FINAL_2"; 
        fadePantalla = 255;
      for (let i = 0; i < Musica.length; i++) {
      Musica[i].stop(); 
    }
      if (!musicaFinales.isPlaying()) {
      musicaFinales.loop();
    }
      }
    }
}

  //escena 10
  else if (pantalla === "ESCENA_10") {
    if (subEstado === "DIALOGO") {
      if (lineaDialogo === 1) {
        subEstado = "DECISION";
        opcionesAlpha = 0;
        opcion1X = -200;
        opcion2X = 888;
      }
    else if (lineaDialogo < textosEscena11.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
      } else {
        pantalla = "ESCENA_11";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
    }
  }
  else if (subEstado === "DECISION") {
      if (mouseX > 150 && mouseX < 390 && mouseY > 185 && mouseY < 255) {
        pantalla = "FINAL_2";
        fadePantalla = 255;
              for (let i = 0; i < Musica.length; i++) {
      Musica[i].stop(); 
    }
      if (!musicaFinales.isPlaying()) {
      musicaFinales.loop();
    }
      }
      else if (mouseX > 480 && mouseX < 720 && mouseY > 185 && mouseY < 255) {
        subEstado = "DIALOGO";
        lineaDialogo = 2; 
        textoAlpha = 0;
      }
    }
  }
  
  //escena 11
  else if (pantalla === "ESCENA_11") {
    if (lineaDialogo < textosEscena10.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "ESCENA_12";
      fadePantalla = 255; 
      lineaDialogo = 0;
      textoAlpha = 0;
    }
}
  //escena 12
  else if (pantalla === "ESCENA_12") {
    if (subEstado === "DIALOGO") {
      subEstado = "DECISION";
      opcionesAlpha = 0;
      opcion1X = -200;
      opcion2X = 888;
    }
    else if (subEstado === "DECISION") {
      if (mouseX > 150 && mouseX < 390 && mouseY > 185 && mouseY < 255) {
        pantalla = "FINAL_2"; 
        fadePantalla = 255;
              for (let i = 0; i < Musica.length; i++) {
      Musica[i].stop(); 
    }
      if (!musicaFinales.isPlaying()) {
      musicaFinales.loop();
    }
       }
       else if (mouseX > 480 && mouseX < 720 && mouseY > 185 && mouseY < 255) {
        pantalla = "ESCENA_13"; 
        fadePantalla = 255;
        subEstado = "DIALOGO"; 
        lineaDialogo = 0;
        textoAlpha = 0;
       }
    }
  }
  
  //escena 13
  else if (pantalla === "ESCENA_13") {
    if (lineaDialogo < textosEscena17.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "ESCENA_14";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
  }
 }
 
  //escena 14
  else if (pantalla === "ESCENA_14") {
    if (subEstado === "DIALOGO") {
      if (lineaDialogo === 1) {
        subEstado = "DECISION";
        opcionesAlpha = 0;
        opcion1X = -200;
        opcion2X = 888;
      }
      else if (lineaDialogo < textosEscena12.length - 1) {
        lineaDialogo++;
        textoAlpha = 0;
      }
      else {
        pantalla = "ESCENA_15"; 
        fadePantalla = 255;
        lineaDialogo = 0;
        textoAlpha = 0;
        for (let i = 0; i < Musica.length; i++) {
    Musica[i].stop();
  }
  if (!Musica[2].isPlaying()) {
    Musica[2].loop();
  }
      }
    }
    else if (subEstado === "DECISION") {
     if (mouseX > 150 && mouseX < 390 && mouseY > 185 && mouseY < 255) {
        pantalla = "FINAL_2"; 
        fadePantalla = 255;
              for (let i = 0; i < Musica.length; i++) {
      Musica[i].stop(); 
    }
      if (!musicaFinales.isPlaying()) {
      musicaFinales.loop();
    }
      }
      else if (mouseX > 480 && mouseX < 720 && mouseY > 185 && mouseY < 255) {
        subEstado = "DIALOGO"; 
        lineaDialogo = 2; 
        textoAlpha = 0;
      }
    }
  }
  
  //escena 15
  else if (pantalla === "ESCENA_15") {
    if (lineaDialogo < textosEscena13.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "FINAL_1"; 
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
      for (let i = 0; i < Musica.length; i++) {
      Musica[i].stop(); 
    }
    if (!musicaFinales.isPlaying()) {
      musicaFinales.loop();
    }
   }
  }
  
  //final 1
  else if (pantalla === "FINAL_1") {
    pantalla = "PANTALLA_RESET"; 
    fadePantalla = 255;
  }
    //reset
  else if (pantalla === "PANTALLA_RESET") {
    if (mouseX > 55 && mouseX < 320 && mouseY > 376 && mouseY < 420) {
      pantalla = "ESCENA_01"; 
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
      subEstado = "DIALOGO";
      
      musicaFinales.stop(); 
      for (let i = 0; i < Musica.length; i++) {
        Musica[i].stop(); 
      }
      if (!Musica[0].isPlaying()) {
        Musica[0].loop();
      }
    }
    else if (mouseX > 480 && mouseX < 757 && mouseY > 376 && mouseY < 420) {
      pantalla = "CREDITOS";
      fadePantalla = 255;
    }
  }
  else if (pantalla === "CREDITOS") {
    pantalla = "PANTALLA_RESET";
    fadePantalla = 255;
  }
  
  //final 2
  else if (pantalla === "FINAL_2") {
    pantalla = "PANTALLA_RESET"; 
    fadePantalla = 255;
  }
  
  //escena 16
    else if (pantalla === "ESCENA_16") {
    if (lineaDialogo < textosEscena18.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "ESCENA_17";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
  }
 }  
 
  //escena 17
  else if (pantalla === "ESCENA_17") {
    if (lineaDialogo < textosEscena14.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "ESCENA_18";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
  }
 }  
 
  //escena 18
  else if (pantalla === "ESCENA_18") {
    if (lineaDialogo < textosEscena19.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "ESCENA_19";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
  }
 }  
 
  //escena 19
    else if (pantalla === "ESCENA_19") {
    if (lineaDialogo < textosEscena15.length - 1) {
      lineaDialogo++;
      textoAlpha = 0;
    }
    else {
      pantalla = "FINAL_3";
      fadePantalla = 255;
      lineaDialogo = 0;
      textoAlpha = 0;
            for (let i = 0; i < Musica.length; i++) {
      Musica[i].stop(); 
    }
    if (!musicaFinales.isPlaying()) {
      musicaFinales.loop();
    }
  }
 } 
 
  //final 3
      else if (pantalla === "FINAL_3") {
    pantalla = "PANTALLA_RESET"; 
    fadePantalla = 255;
  }
}
