'use strict';
var GOODS_NAME = [
  'Чесночные сливки',
  'Огуречный педант',
  'Молочная хрюша',
  'Грибной шейк',
  'Баклажановое безумие',
  'Паприколу итальяно',
  'Нинзя-удар васаби',
  'Хитрый баклажан',
  'Горчичный вызов',
  'Кедровая липучка',
  'Корманный портвейн',
  'Чилийский задира',
  'Беконовый взрыв',
  'Арахис vs виноград',
  'Сельдерейная душа',
  'Початок в бутылке',
  'Чернющий мистер чеснок',
  'Раша федераша',
  'Кислая мина',
  'Кукурузное утро',
  'Икорный фуршет',
  'Новогоднее настроение',
  'С пивком потянет',
  'Мисс креветка',
  'Бесконечный взрыв',
  'Невинные винные',
  'Бельгийское пенное',
  'Острый язычок'
];
var GOODS_PICTURE = [
  'img/cards/gum-cedar.jpg',
  'img/cards/gum-chile.jpg',
  'img/cards/gum-eggplant.jpg',
  'img/cards/gum-mustard.jpg',
  'img/cards/gum-portwine.jpg',
  'img/cards/gum-wasabi.jpg',
  'img/cards/ice-cucumber.jpg',
  'img/cards/ice-eggplant.jpg',
  'img/cards/ice-garlic.jpg',
  'img/cards/ice-italian.jpg',
  'img/cards/ice-mushroom.jpg',
  'img/cards/ice-pig.jpg',
  'img/cards/marmalade-beer.jpg',
  'img/cards/marmalade-caviar.jpg',
  'img/cards/marmalade-corn.jpg',
  'img/cards/marmalade-new-year.jpg',
  'img/cards/marmalade-sour.jpg',
  'img/cards/marshmallow-bacon.jpg',
  'img/cards/marshmallow-beer.jpg',
  'img/cards/marshmallow-shrimp.jpg',
  'img/cards/marshmallow-spicy.jpg',
  'img/cards/marshmallow-wine.jpg',
  'img/cards/soda-bacon.jpg',
  'img/cards/soda-celery.jpg',
  'img/cards/soda-cob.jpg',
  'img/cards/soda-garlic.jpg',
  'img/cards/soda-peanut-grapes.jpg',
  'img/cards/soda-russian.jpg'
];
var GOODS_CONTENT = [
  'молоко',
  'сливки',
  'вода',
  'пищевой краситель',
  'патока',
  'ароматизатор бекона',
  'ароматизатор свинца',
  'ароматизатор дуба, идентичный натуральному',
  'ароматизатор картофеля',
  'лимонная кислота',
  'загуститель',
  'эмульгатор',
  'консервант: сорбат калия',
  'посолочная смесь: соль, нитрит натрия',
  'ксилит',
  'карбамид',
  'вилларибо',
  'виллабаджо'
];
var GOODS_AMOUNT_MAX = 20;
var GOODS_PRICE_MIN = 100;
var GOODS_PRICE_MAX = 1500;
var GOODS_WEIGHT_MIN = 30;
var GOODS_WEIGHT_MAX = 300;
var GOODS_RAITING_MAX = 5;
var GOODS_RAITING_NUMBER_MIN = 10;
var GOODS_RAITING_NUMBER_MAX = 900;
var GOODS_ENERGY_MIN = 70;
var GOODS_ENERGY_MAX = 500;
var GOODS_COUNT = 26;
var goodsData = [];

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomBoolean = function () {
  return (Math.floor(Math.random() * 2) === 0);
};

var getGoodsContent = function () {
  var composition = '';
  var number = getRandomInRange(0, GOODS_CONTENT.length - 1);
  for (var i = 0; i < number; i++) {
    if(i === number - 1){
      composition += GOODS_CONTENT[getRandomInRange(0, GOODS_CONTENT.length - 1)];
    }
    else{
      composition += GOODS_CONTENT[getRandomInRange(0, GOODS_CONTENT.length - 1)] + ', ';
    }
  }
  return composition;
};

var generateGood = function () {
  return {
    name: GOODS_NAME[getRandomInRange(0, GOODS_NAME.length - 1)],
    picture: GOODS_PICTURE[getRandomInRange (0, GOODS_PICTURE.length - 1)],
    amount: getRandomInRange(0 , GOODS_AMOUNT_MAX),
    price: getRandomInRange(GOODS_PRICE_MIN, GOODS_PRICE_MAX),
    weight: getRandomInRange(GOODS_WEIGHT_MIN, GOODS_WEIGHT_MAX),
    rating: {
      value: getRandomInRange(1, GOODS_RAITING_MAX),
      number: getRandomInRange(GOODS_RAITING_NUMBER_MIN, GOODS_RAITING_NUMBER_MAX)
    },
    nutritionFacts: {
      sugar: getRandomBoolean(),
      energy: getRandomInRange(GOODS_ENERGY_MIN, GOODS_ENERGY_MAX),
      contents: getGoodsContent()
    }
  };
};

var generateGoodsData = function () {
  for (var i = 0; i < GOODS_COUNT; i++) {
    goodsData[i] = generateGood();
  }
  return goodsData;
};

var good = generateGoodsData();
debugger;
