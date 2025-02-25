let xBolinha, yBolinha, diametro, raio;
let velocidadeXBolinha, velocidadeYBolinha;
let raqueteAltura = 100;
let raqueteComprimento = 10;
let x = 10; 
let y = 150;
let xRaquete2;  

function setup() {
    createCanvas(600, 400);
    raio = 20;
    diametro = raio * 2;
    xBolinha = width / 2;
    yBolinha = height / 2;
    velocidadeXBolinha = 5;
    velocidadeYBolinha = 4;
    xRaquete2 = width - raqueteComprimento - 10;  
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    criarRaquete(x, y);        
    criarRaquete(xRaquete2, y);
}

function mostraBolinha() {
    fill(255); 
    circle(xBolinha, yBolinha, diametro); 
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function criarRaquete(xPos, yPos){
    //X,Y, raqueteComprimento, raqueteAltura
    rect(xPos, yPos, raqueteComprimento, raqueteAltura);
}


