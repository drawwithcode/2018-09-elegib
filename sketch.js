
var myLoc;
var myMap;
var canvas;
var placesPosition;
var myPosition;
var placesPositionWidth;
var placesPositionHeight;
var compariT = 0;
var compariD = 0;
var click = -1;
var myPosizioneMudec = {};
var myInfoMudec = {};
var myPosizioneDuomo = {};
var myInfoDuomo = {};
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZWxlZ2liIiwiYSI6ImNqb3IwY29oYTBhb2Mza3Bia3V4NmVmYWkifQ.O7bo83m2nCLq7Ut6nowgpQ'); // per avere le info della mappa da un sito esterno tipo google maps
var mudecLat = 45.4516914;
var mudecLon = 9.159253;
var duomoLat = 45.4640976;
var duomoLon = 9.1897378;
var breraLat = 45.4719545;
var breraLon = 9.1856258;
var pradaLat = 45.4548766;
var pradaLon = 9.1889234;
var bicoccaLat = 45.5219736;
var bicoccaLon = 9.2177465;
var options = {
  lat: duomoLat,
  lng: duomoLon,
  zoom: 12, // più zoom metti più quando si carica la mappa si apre in corrispondenza del punto indicato in lat  e lng
  style: 'mapbox://styles/elegib/cjor0pzrl06nh2ss2cpgi8ts1',
//  pitch: 50 // inica l'inclinazione con cui viene mostrata la mappa
}


function preload(){
  myLoc = getCurrentPosition(); // prende la posizione attuale
  placesPosition = loadImage ('./assets/places.png ');
  myPosition = loadImage ('./assets/io.png ')
  }

function setup() {

canvas = createCanvas(windowWidth, windowHeight); // canvas si crea in quest'altro modo

myMap = mappa.tileMap(options);
myMap.overlay(canvas) // così gli dico che deve creare due livelli diversi, canvas sotto e livello my map sopra

/*myPosizioneDuomo = new posizione(0, 0,30);
myPosizioneDuomo.lat = duomoLat;
myPosizioneDuomo.lng = duomoLon;
myInfoDuomo = new info(0, 0,10);
myInfoDuomo.testo = 'daiii';*/

myPosizioneBrera = new posizione(0, 0,30);
myPosizioneBrera.lat = breraLat;
myPosizioneBrera.lng = breraLon;
myPosizioneBrera.place = 'la Pinacoteca di Brera';
myInfoBrera = new info(0, 0,10);
myInfoBrera.testo = "LA PINACOTECA DI BRERA \n\nLa Pinacoteca di Brera, aperta al pubblico nel 1809,\nsi trova nell’omonimo palazzo,\nove hanno sede anche altre istituzioni culturali,\nquali la Biblioteca Braidense, l'Osservatorio astronomico,\nl'Orto Botanico,l’Istituto Lombardo Accademia di Scienze\ne Lettere e l'Accademia di Belle Arti.\nLa Pinacoteca di Brera è una galleria nazionale d'arte antica\ne moderna, il museo espone una delle più celebri raccolte\nin Italia di pittura, specializzata in pittura veneta e lombarda,\ncon importanti pezzi di altre scuole.\nInoltre, grazie a donazioni, propone un percorso espositivo\nche spazia dalla preistoria all'arte contemporanea,\ncon capolavori di artisti del XX secolo.\nNel 2014 è stato il ventunesimo sito statale italiano più visitato,\ncon 269.805 visitatori e un introito lordo totale di 882.866,20 euro ";

myPosizioneMudec = new posizione(0, 0,30);
myPosizioneMudec.lat = mudecLat;
myPosizioneMudec.lng = mudecLon;
myPosizioneMudec.place = 'il museo Mudec';
myInfoMudec = new info(0, 0,10);
myInfoMudec.testo = 'MUDEC\n\n Il Museo delle culture di Milano (Mudec)\nè un museo e polo espositivo inaugurato nel 2014,\ndedicato alla valorizzazione\ne alla ricerca interdisciplinare sulle culture del mondo.\nNel Mudec hanno trovato collocazione i reperti\ne collezioni delle raccolte etnografiche\ne antropologiche del Comune di Milano.\nGli spazi del museo costituiscono inoltre\nun polo espositivo per mostre\ned eventi temporanei. ';

myPosizionePrada = new posizione(0, 0,30);
myPosizionePrada.lat = pradaLat;
myPosizionePrada.lng = pradaLon;
myPosizionePrada.place = 'Fondazione Prada';
myInfoPrada = new info(0, 0,10);
myInfoPrada.testo = "FONDAZIONE PRADA\n\n La torre prada è un edificio progettato\nda Rem Koolhaas con Chris van Duijn e Federico Pompignoli\ndello studio Oma che segna il completamento\ndella sede di Milano.\nLa Torre include nove piani,\nsei dei quali ospitano sale espositive\nper una superficie totale di più di 2.000 mq.\nGli altri tre piani, invece,\naccolgono un ristorante e servizi per il visitatore.\nLa struttura è completata da una terrazza panoramica\ndi 160 mq dove si trova un bar\ncon vista eccezionale su Milano."


myPosizioneBicocca = new posizione(0, 0,30);
myPosizioneBicocca.lat = bicoccaLat;
myPosizioneBicocca.lng = bicoccaLon;
myPosizioneBicocca.place = "l'HangarBicocca";
myInfoBicocca = new info(0, 0,10);
myInfoBicocca.testo = 'HANGARBICOCCA\n\nPirelli HangarBicocca è una fondazione no profit\nnata a Milano nel 2004 dalla riconversione di uno stabilimento\nindustriale in un’istituzione dedicata alla produzione\ne promozione di arte contemporanea.\nLuogo dinamico di sperimentazione e ricerca,\ncon i suoi 15.000 metri quadrati è tra gli spazi espositivi\ncon sviluppo orizzontale più grandi d’Europa e ogni anno presenta\nimportanti mostre personali di artisti italiani e internazionali.\nOgni progetto espositivo\nviene concepito in stretta relazione con l’architettura dell’edificio\ned è accompagnato da un programma di eventi collaterali\ne di approfondimento. L’accesso allo spazio e alle mostre\nè totalmente gratuito e il dialogo tra pubblico e arte\nè favorito dalla presenza di mediatori culturali. ';





 }

function draw() {
clear(); // mettendo clear se sposto la mappa l'ellisse segue la posizione associata senza lasciare la scia
fill(255);
imageMode(CENTER);
placesPositionHeight = placesPosition.height;
placesPositionWidth = placesPosition.width;


var myPoint = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude); // converte la longitudine e la latitudine in pixel
var point = myMap.latLngToPixel(mudecLat, mudecLon); // converte la longitudine e la latitudine in pixel
var point1 = myMap.latLngToPixel(duomoLat, duomoLon); // converte la longitudine e la latitudine in pixel
var point2 = myMap.latLngToPixel(breraLat, breraLon); // converte la longitudine e la latitudine in pixel
var point3 = myMap.latLngToPixel(pradaLat, pradaLon); // converte la longitudine e la latitudine in pixel
var point4 = myMap.latLngToPixel(bicoccaLat, bicoccaLon); // converte la longitudine e la latitudine in pixel

fill(255)




/*myPosizioneDuomo.display()
myPosizioneDuomo.x = point1.x;
myPosizioneDuomo.y = point1.y - placesPositionHeight/2;
myInfoDuomo.display();
myInfoDuomo.x = point1.x +10;
myInfoDuomo.y = point1.y-10;*/

myPosizioneBrera.display()
myPosizioneBrera.x = point2.x;
myPosizioneBrera.y = point2.y - placesPositionHeight/2;;
myInfoBrera.display();
myInfoBrera.x = point2.x +25;
myInfoBrera.y = point2.y-30;


myPosizioneMudec.display()
myPosizioneMudec.x = point.x;
myPosizioneMudec.y = point.y - placesPositionHeight/2;
myInfoMudec.display();
myInfoMudec.x = point.x +25;
myInfoMudec.y = point.y-30;

myPosizionePrada.display()
myPosizionePrada.x = point3.x;
myPosizionePrada.y = point3.y - placesPositionHeight/2;
myInfoPrada.display();
myInfoPrada.x = point3.x +25;
myInfoPrada.y = point3.y-30;

myPosizioneBicocca.display()
myPosizioneBicocca.x = point4.x;
myPosizioneBicocca.y = point4.y - placesPositionHeight/2;
myInfoBicocca.display();
myInfoBicocca.x = point4.x +25;
myInfoBicocca.y = point4.y-30;

if(((myPosizioneBrera.x - mouseX) ** 2) + ((myPosizioneBrera.y - mouseY) ** 2) < 200 ||
   ((myPosizioneDuomo.x - mouseX) ** 2) + ((myPosizioneDuomo.y - mouseY) ** 2) < 200 ||
   ((myPosizioneMudec.x - mouseX) ** 2) + ((myPosizioneMudec.y - mouseY) ** 2) < 200 ||
   ((myPosizionePrada.x - mouseX) ** 2) + ((myPosizionePrada.y - mouseY) ** 2) < 200 ||
   ((myPosizioneBicocca.x - mouseX) ** 2) + ((myPosizioneBicocca.y - mouseY) ** 2) < 200   ){
   cursor(HAND);}
else if(((myInfoBrera.x - mouseX) ** 2) + ((myInfoBrera.y - mouseY) ** 2) <100 ||
        ((myInfoDuomo.x - mouseX) ** 2) + ((myInfoDuomo.y - mouseY) ** 2) < 100 ||
        ((myInfoMudec.x - mouseX) ** 2) + ((myInfoMudec.y - mouseY) ** 2) < 100 ||
        ((myInfoPrada.x - mouseX) ** 2) + ((myInfoPrada.y - mouseY) ** 2) < 100 ||
        ((myInfoBicocca.x - mouseX) ** 2) + ((myInfoBicocca.y - mouseY) ** 2) < 600 ||
        ((myPoint.x - mouseX) ** 2) + ((myPoint.y - mouseY) ** 2) < 100   ){
    cursor(ARROW);}
 else {cursor(MOVE)}

image(myPosition, myPoint.x, myPoint.y);
push();
textAlign(CENTER);
textSize(20);
fill(255);
if(((myPoint.x - mouseX) ** 2) + ((myPoint.y - mouseY) ** 2) < 600){ text('Tu sei qui', myPoint.x, myPoint.y-30)  }
pop();



if(frameCount < 900) {
  push();
  fill(0,0,0,230);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, 500, 200);
  textAlign(CENTER);
  fill(255)
  text('Zoom in or zoom out to find yourself on the map, you are the red pointer.\nClick on the blue pointer to know the ditstance between you\n and the place you choose, click again to change place.\nPut the mouse over the white dots to have\n some information about the place you choose.', windowWidth/2, windowHeight/2-30)
}




}


function posizione(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 255;
  this.testo;
  this.lat;
  this.lng;
  this.click = 0;
  this.place ;
  this.width = placesPositionWidth;
  this.height = placesPositionHeight;



this.display = function() {
  //var myPoint = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  fill(255);
  image(placesPosition, this.x, this.y, this.width, this.height);
  var distance = calcGeoDistance(myLoc.latitude, myLoc.longitude, this.lat, this.lng,"km" );
  //  ellipse (this.x, this.y, this.diameter);



  if(((this.x - mouseX) ** 2) + ((this.y - mouseY) ** 2) < 200 && click== 1 ){
  //  var myPoint = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
    this.click = 1;   line (myPosition.x, myPosition.y, this.lat, this.lng) }
  else if(click == -1) {this.click = 0};

  if(this.click == 1){

push()
stroke(255);
rectMode(CENTER)
fill(0,0,0,200)
rect(400, windowHeight/2 - 200, 500, 200)
pop();
push();
 textSize(25)
 textAlign(CENTER)
  fill(255)
  text('La distanza fra te\n e '+this.place + ':\n\n' + distance + ' Km' ,400, windowHeight/2 -240)}
pop();
  //if(keyIsPressed == true && keyCode === ESCAPE) {click = 0}




}
}

function info(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 200;
  this.testo;


this.display = function() {
  if(((this.x - mouseX) ** 2) + ((this.y - mouseY) ** 2) < 100){compariT = 1;  }
  else {compariT = 0;};




  if(compariT == 1) {
    push();
    stroke(255);
    rectMode(CENTER)
    fill(0,0,0,200)
    rect(400, windowHeight/2 +135, 500, 400);
    pop();
    fill(255)
  textSize(15)

  text('Alcune informazioni a propositio del luogo:\n\n' + this.testo,180, windowHeight/2-25);}

  fill(this.color);
  ellipse (this.x, this.y, this.diameter);}


  console.log(compariT)

}


function mousePressed() {
  if(((myPosizioneBrera.x - mouseX) ** 2) + ((myPosizioneBrera.y - mouseY) ** 2) < 200 ||
     ((myPosizioneDuomo.x - mouseX) ** 2) + ((myPosizioneDuomo.y - mouseY) ** 2) < 200 ||
     ((myPosizioneMudec.x - mouseX) ** 2) + ((myPosizioneMudec.y - mouseY) ** 2) < 200 ||
     ((myPosizionePrada.x - mouseX) ** 2) + ((myPosizionePrada.y - mouseY) ** 2) < 200 ||
     ((myPosizioneBicocca.x - mouseX) ** 2) + ((myPosizioneBicocca.y - mouseY) ** 2) < 200   )
    {
  click = click * -1
}}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
