const PI = 3.14159;

function startGenerator () {
  // generateBody();
  generateType();
  var age = generateAge();
  generateHair();
  generateAttribute();
  generateCharacter(age);
  generateSuperPower();
  // generateSuperPowerGrowth(age);
  generateGift();

}

function generateType () {
  var type = document.getElementById('type');
  var randomNumber = Math.ceil(Math.random() * 10000);
  if (randomNumber === 10000)
    type.innerHTML = '冠军宇';
  else if (randomNumber === 531 | randomNumber === 722)
    type.innerHTML = '红衣宇';
  else if (randomNumber % 722 === 0)
    type.innerHTML = '老板宇';
  else if (randomNumber > 9000)
    type.innerHTML = '胖宇';
  else
    type.innerHTML = '瘦宇';
}

function generateSuperPower () {
  randomData('superpowerdata', Superpower_data);
}

function generateSuperPowerGrowth (age) {
  if (age >18) {
    var randomNumber = Math.ceil(Math.random() * 1000);
    if (randomNumber === 1000) {
      randomData('superpowerdata', Special_data);
    }
    else {
      randomData('superpowerdata', Superpower_data);
    }
  }
  else {
    randomData('superpowerdata', Superpower_data);
  }
}

function generateBody () {
  var height = normalDistribution(180, 5);
  height = Math.round(height);
  var text1 = document.getElementById('height');
  text1.innerHTML = height;

  var bmi = normalDistribution(20, 1);
  var weight = Math.round(bmi * (height / 100) * (height / 100));
  var text2 = document.getElementById('weight');
  text2.innerHTML = weight;
}

function generateAge () {
  var gH = Math.ceil(Math.random() * 29);
  var text1 = document.getElementById('age');
  text1.innerHTML = gH;
  return gH;
}
function generateHair () {
  randomData('hairstyle', Hair_data);
}

function generateAttribute () {
  randomData('attribute', Attribute_data);
}
function generateCharacter (age) {
  if (age > 18) {
    randomData('character', Character_data);
  } else {
    randomData('character', Character_data_child);
  }
}

function generateGift () {
  var gift = document.getElementById('gift');
  var randomNumber = Math.ceil(Math.random() * 1000);
  if (randomNumber === 1000)
    gift.innerHTML = '冠军毛巾一条';
  else if (randomNumber === 722)
    gift.innerHTML = '舞撼兄弟大师课一次';
  else if (randomNumber === 531)
    gift.innerHTML = '亲手整理过的hardihood白色帽子一顶';
  else if (randomNumber === 1)
    gift.innerHTML = '看腹肌一次';
  else if (randomNumber < 100)
    gift.innerHTML = '再扭一次';
  else
    gift.innerHTML = '没有中奖，下次再来~';
}

function normalDistribution (u, v) {
  // Box-Muller
  var x1 = Math.random();
  var x2 = Math.random();
  var nD = Math.sqrt(-2 * Math.log(x1)) * Math.sin(2 * PI * x2) * v + u;
  return nD;
}
function randomRGB () {
  var rValue = Math.round(Math.random() * 255).toString(16);
  var gValue = Math.round(Math.random() * 255).toString(16);
  var bValue = Math.round(Math.random() * 255).toString(16);
  if (rValue.length < 2)
    rValue = '0' + rValue;
  if (gValue.length < 2)
    gValue = '0' + gValue;
  if (bValue.length < 2)
    bValue = '0' + bValue;
  return '#' + rValue + gValue + bValue;
}
function randomData (elementId, dataName) {
  var t1Num = Math.floor(Math.random() * dataName.length);
  var text1 = document.getElementById(elementId);
  text1.innerHTML = dataName[t1Num];
}
