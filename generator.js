const PI = 3.14159;

function startGenerator () {
  var age = generateAge();
  generateType(age);
  generateHair();
  generateAttribute();
  generateCharacter(age);
  generateSuperPower();
  // generateSuperPowerGrowth(age);
  generateGift();

}

function generateType (age) {
  var type = document.getElementById('type');
  var message = document.getElementById('message');
  var randomNumber = Math.ceil(Math.random() * 100);
    // randomNumber=10;
    // console.log(age);
  if (randomNumber === 100 && age === 29){
    type.innerHTML = '冠军宇';
    bingo('恭喜抽中特等奖！快把绝版冠军宇带回家！');
  }
  else if (randomNumber === 100 || randomNumber === 31){
    type.innerHTML = '红衣宇';
    bingo('运气爆表，百年不遇的红衣宇对你挥手！');
  }

  else if ([6,17,7,22].indexOf(randomNumber) !=-1){
    type.innerHTML = '西装宇';
    bingo('恭喜抽中限量款！');
  }
  else if ([10,24,11,12].indexOf(randomNumber) !=-1){
    type.innerHTML = '老板宇';
    bingo('恭喜抽中限量款！');
  }
  else if (randomNumber > 60)
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
  // var gH = Math.ceil(Math.random() * 29);

  var age =  Math.round(normalDistribution(24,5));
  if (age>29){
      age =29;
  }

  var text1 = document.getElementById('age');
  text1.innerHTML = age;
  return age;
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
  var message2 = document.getElementById('message2');
  var randomNumber = Math.ceil(Math.random() * 100);
  // randomNumber = 1;
  if (randomNumber === 100){
    gift.innerHTML = '冠军毛巾一条';
    bingo('赠品似乎有点意思呢！');
    message2.innerHTML = '上面还有汗水的气味';
  }
  else if (randomNumber === 7||randomNumber===22){
    gift.innerHTML = '舞撼兄弟大师课一次';
    bingo('赠品似乎有点意思呢！');
    message2.innerHTML = '和韩宇老师一起跳起来！';
  }
  else if (randomNumber === 5||randomNumber===31){
    gift.innerHTML = '亲手整理过的hardihood白色帽子一顶';
    bingo('赠品似乎有点意思呢！');
    message2.innerHTML = '摸着帽子就当间接牵手了！';
  }
  else if (randomNumber === 1){
    gift.innerHTML = '看腹肌一次';
    bingo('赠品似乎有点意思呢！');
    message2.innerHTML = '只许看不许摸！';
  }
  else if (randomNumber < 100)
    gift.innerHTML = '再扭一次';
  else
    gift.innerHTML = '没有中奖，下次再来~';
}
function bingo (text) {
  var message = document.getElementById('message');
  message.innerHTML = text;
  document.getElementById("button").hidden = true;
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
