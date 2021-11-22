var cenario,caixa1, caixa2, caixa3, leo
var statuss = "caixaOn"
function preload(){
  cenarioImg = loadImage("cenario1.jpg");
  leoImg = loadAnimation("personagem1.png");
  caixa1Img = loadAnimation("caixa1.png");
  caixa2mg = loadAnimation("caixa2.png");
  caixa3mg = loadAnimation("caixa3.png");
  caixaQuebrada = loadAnimation("cx-quebrada2.png");
  obj = loadAnimation("obj.png");
}

function setup() {
  //tela
  createCanvas(1200,800);
  //sprites do game
  leo = createSprite(200,300,10,10);
  leo.addAnimation("leo", leoImg);
  obstaculo = createSprite(500,300,80,400);
  obstaculo.visible = false;
  obstaculo2 = createSprite(80,400,80,700);
  obstaculo2.visible = false;
  obstaculo3 = createSprite(300,180,400,20);
  obstaculo3.visible = false;
  obstaculo4 = createSprite(300,780,400,20);
  obstaculo4.visible = false;
  caixa1 = createSprite(500, 635, 50, 80);
  caixa1.addAnimation("cx1", caixa1Img);
  caixa1.addAnimation("quebrada", caixaQuebrada);
  caixa1.setCollider("rectangle", 0, 0, 100, 100);
  caixa1.debug = true;
  caixa2 = createSprite(500,725,80,30);
  caixa2.addAnimation("cx2", caixa2mg);
  caixa2.addAnimation("quebrada", caixaQuebrada);
  caixa2.setCollider("rectangle", 0, 0, 100, 100);
  caixa2.debug = true;
  caixa3 = createSprite(500,545,80,30);
  caixa3.addAnimation("cx2", caixa3mg);
  caixa3.addAnimation("quebrada", caixaQuebrada);
  caixa3.setCollider("rectangle", 0, 0, 100, 100);
  caixa3.debug = true;
  texto = createSprite(600,400,10,10);
  texto.addAnimation("obj", obj)
}

function draw() {
  background(cenarioImg);
  //rebater nas paredes *_*
  leo.bounceOff(obstaculo);
  leo.bounceOff(obstaculo2);
  leo.bounceOff(obstaculo3);
  leo.bounceOff(obstaculo4);
  leo.bounceOff(caixa1);
  leo.bounceOff(caixa2);
  leo.bounceOff(caixa3);
  //fechar o objetivo
  if(keyDown("x")){
    texto.visible = false;
  }
  //controlar o personagem *_*
  if(keyDown("right")){
    leo.x = leo.x +5;
  }
  if(keyDown("left")){
    leo.x = leo.x -5;
  }
  if(keyDown("up")){
    leo.y = leo.y -5;
  }
  if(keyDown("down")){
    leo.y = leo.y +5;
  }
  if (leo.isTouching(caixa1) && keyDown("x")){
    statuss = "caixaOff";
    caixa1.changeAnimation("quebrada", caixaQuebrada);
    }

  if( leo.isTouching(caixa1) && statuss === "caixaOff" && keyDown("x")){
    caixa1.lifetime = 30;
  }
  if (leo.isTouching(caixa2) && keyDown("x")){
    statuss = "caixaOff";
    caixa2.changeAnimation("quebrada", caixaQuebrada);
  }
  if( leo.isTouching(caixa2) && statuss === "caixaOff" && keyDown("x")){
      caixa2.lifetime = 30;
  }
  if (leo.isTouching(caixa3) && keyDown("x")){
    statuss = "caixaOff";
    caixa3.changeAnimation("quebrada", caixaQuebrada);
  }
  if( leo.isTouching(caixa3) && statuss === "caixaOff" && keyDown("x")){
      caixa3.lifetime = 30;
  }
  
  drawSprites();
}

  /*if (caixa1.x - caixa2.x < caixa2.width/2 + caixa1.width/2
      && caixa2.x - caixa1.x < caixa2.width/2 + caixa1.width/2
      && caixa1.y - caixa2.y < caixa2.height/2 + caixa1.height/2
      && caixa2.y - caixa1.y < caixa2.height/2 + caixa1.height/2) {
    caixa1.shapeColor = "red";
    caixa2.shapeColor = "red";
  }
  else {
    caixa1.shapeColor = "green";
    caixa2.shapeColor = "green";
  }*/