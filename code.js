var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var son = createSprite(10, 200,20,20);
son.shapeColor= "red"

 var life = 20;
var line1 = createSprite(5, 150,2000,10);
line1.shapeColor= "black"

var line2 = createSprite(5, 270,2000,10);
line2.shapeColor= "black"

var bullet3 = createSprite(70, 165,20,20);
bullet3.shapeColor= "yellow"

var bullet4= createSprite(300, 165,20,20);
bullet4.shapeColor= "yellow"

var bullet1 = createSprite(150, 165,20,20);
bullet1.shapeColor= "yellow"

var bullet2 = createSprite(250, 165,20,20);
bullet2.shapeColor= "yellow"

var fim = createSprite(380, 210,50,110);
fim.shapeColor= "lightgreen"

bullet1.velocityY=5;
bullet2.velocityY=5;
bullet3.velocityY=5;
bullet4.velocityY=5;

//Essas condicionais estão repetidas, por favor apague-as
//Você já as escreveu dentro de draw nas linhas 63 a 68

 if(keyDown("right")){
    son.x = son.x + 2;
  }
  if(keyDown("left")){
    son.x = son.x - 2;
  }

 
function draw() {
 background("lightblue");

bullet1.bounceOff(line1);  
bullet1.bounceOff(line2);  

bullet2.bounceOff(line1);  
bullet2.bounceOff(line2);  

bullet3.bounceOff(line2);  
bullet3.bounceOff(line1);  

bullet4.bounceOff(line2);  
bullet4.bounceOff(line1);  

if (son.collide(fim)){
 son.destroy()
  
}

 if(keyDown("right")){
    son.x = son.x + 4;
  }
  if(keyDown("left")){
    son.x = son.x - 4;
  }


  if(son.isTouching(bullet1)||
     son.isTouching(bullet2)||
     son.isTouching(bullet3)||
     son.isTouching(bullet4)){//inconssistência. Por favor apague son
     //ótimo você entendeu como reposicionar seu sprite na pos inicial
    son.x=20                            // nao enntendi a parte do son
    son.y=190
    life=life+0;
                
                 
    }                                                         

  createSprite() 
  createEdgeSprites()
  drawSprites()
    
     text("Vidas: "+life,300,120)
 
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
