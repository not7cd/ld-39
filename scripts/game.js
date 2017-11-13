(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Clickable = function (_Phaser$Sprite) {
  _inherits(Clickable, _Phaser$Sprite);

  function Clickable(game, x, y, key) {
    _classCallCheck(this, Clickable);

    var _this = _possibleConstructorReturn(this, (Clickable.__proto__ || Object.getPrototypeOf(Clickable)).call(this, game, x, y, key));

    _this._bmd = game.make.bitmapData();
    _this._bmd.load(key);
    _this._bmd.replaceRGB(0, 0, 0, 255, 255, 255, 255, 255);
    _this._key = key;

    _this.inputEnabled = true;
    _this.input.pixelPerfectOver = true;
    _this.input.useHandCursor = true;

    _this.events.onInputOver.add(_this.recolorOver, _this);
    _this.events.onInputOut.add(_this.recolorOut, _this);
    _this.events.onInputDown.add(_this.action, _this);
    // this.events.onInputDown.add(this.particle, this);
    return _this;
  }

  // action() {}

  _createClass(Clickable, [{
    key: "recolorOver",
    value: function recolorOver() {
      this.loadTexture(this._bmd);
      // this.setType()
    }
  }, {
    key: "recolorOut",
    value: function recolorOut() {
      this.loadTexture(this._key);
      // this.setType()
    }
  }, {
    key: "setType",
    value: function setType() {
      if (this._type) {
        this.frame = this._type;
      }
    }
  }, {
    key: "addTimeToPass",
    value: function addTimeToPass(time) {
      var timeToPass = time * 0.7 / (0.2 + this.game.global.energy / 100);
      console.log(timeToPass);
      this.game.global.timeToPass += timeToPass;
    }
  }, {
    key: "particle",
    value: function particle() {}
  }]);

  return Clickable;
}(Phaser.Sprite);

exports.default = Clickable;

},{}],2:[function(require,module,exports){
'use strict';

var _Boot = require('states/Boot');

var _Boot2 = _interopRequireDefault(_Boot);

var _Preloader = require('states/Preloader');

var _Preloader2 = _interopRequireDefault(_Preloader);

var _CoffeeShop = require('states/CoffeeShop');

var _CoffeeShop2 = _interopRequireDefault(_CoffeeShop);

var _GameOver = require('states/GameOver');

var _GameOver2 = _interopRequireDefault(_GameOver);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 200, 150, Phaser.AUTO, 'content', null));

    _this.state.add('Boot', _Boot2.default, false);
    _this.state.add('Preloader', _Preloader2.default, false);
    _this.state.add('CoffeeShop', _CoffeeShop2.default, false);
    _this.state.add('GameOver', _GameOver2.default, false);
    _this.state.start('Boot');
    return _this;
  }

  return Game;
}(Phaser.Game);

new Game();

},{"states/Boot":9,"states/CoffeeShop":10,"states/GameOver":11,"states/Preloader":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Clickable2 = require('abstracts/Clickable');

var _Clickable3 = _interopRequireDefault(_Clickable2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Coffee = function (_Clickable) {
  _inherits(Coffee, _Clickable);

  function Coffee(game, x, y) {
    _classCallCheck(this, Coffee);

    var _this = _possibleConstructorReturn(this, (Coffee.__proto__ || Object.getPrototypeOf(Coffee)).call(this, game, x, y, 'coffee'));

    _this._energy = 13;
    _this._damage = 1;
    _this._timeCost = 10 * 60; // [s]
    // this._cost = 3

    _this.game.stage.addChild(_this);
    return _this;
  }

  _createClass(Coffee, [{
    key: 'action',
    value: function action() {
      this.game.global.dS.play();
      this.game.global.player.moveTo(112, this.y + 20);
      this.game.global.energy += this._energy;
      this.game.global.damage += this._damage;
      this.addTimeToPass(this._timeCost);
      // TODO: Pokazuj odjety koszt
      // console.log(this.game.global.energy)
      this.destroy();
    }
  }]);

  return Coffee;
}(_Clickable3.default);

exports.default = Coffee;

},{"abstracts/Clickable":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Clickable2 = require('abstracts/Clickable');

var _Clickable3 = _interopRequireDefault(_Clickable2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Customer = function (_Clickable) {
  _inherits(Customer, _Clickable);

  function Customer(game, x, y, type) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this, game, x, y, 'customer'));

    _this._type = type;
    _this._state = 0;
    _this._bmd = 'customer_w';
    _this.setType();
    _this._energy = 3;
    _this._pays = 12;
    _this._timeCost = 1 * 60; // [s]
    _this._waitTime = game.rnd.integerInRange(30, 90) * 60;
    _this._enterTime = game.global.timePassed;

    _this.emitter = game.add.emitter(0, 0, 100);

    _this.emitter.makeParticles('cash');
    _this.emitter.gravity = 200;

    _this.anchor.set(0.5, 1);

    _this.game.stage.addChild(_this);
    return _this;
  }

  _createClass(Customer, [{
    key: 'action',
    value: function action() {
      this.game.global.player.moveTo(112, this.y);
      this.game.global.energy -= this._energy * 0.2;
      this.addTimeToPass(this._timeCost * 0.2);
      var drink = this.game.global.coffeeCounter.getFirstAlive();
      if (drink) {
        this.game.global.sS.play();
        this.game.global.energy -= this._energy;
        this.addTimeToPass(this._timeCost);
        var pay = this._pays - this._state;
        this.game.global.money += pay;
        drink.destroy();
        this.particle(4 - this._state);
        this.destroy();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      // console.log('up');
      this._state = Math.floor((this.game.global.timePassed - this._enterTime) / this._waitTime * 4);

      this.setType();
      if (this.game.global.timePassed - this._enterTime > this._waitTime) {
        this.destroy();
      }
    }
  }, {
    key: 'recolorOver',
    value: function recolorOver() {
      // console.log(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 100,
      //   Math.floor(((this.game.global.timePassed - this._enterTime) / this._waitTime) * 4));
      // console.log(this._type, this._state);
      // console.log(this.frame);
      this.loadTexture(this._bmd);
      this.setType();
    }
  }, {
    key: 'setType',
    value: function setType() {
      if (typeof this._type !== 'undefined') {
        this.frame = this._type + this._state;
      }
    }
  }, {
    key: 'particle',
    value: function particle(amount) {
      this.emitter.x = this.centerX;
      this.emitter.y = this.centerY;

      this.emitter.start(true, 1000, null, amount);
    }
  }]);

  return Customer;
}(_Clickable3.default);

exports.default = Customer;

},{"abstracts/Clickable":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Customer = require('objects/Customer');

var _Customer2 = _interopRequireDefault(_Customer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CustomerFactory = function () {
  function CustomerFactory() {
    _classCallCheck(this, CustomerFactory);

    this.RATIO = Math.PI * 2 / (Phaser.Timer.SECOND * (24 * 60 * 60));
    this.PHASE_SHIFT = 12 * Phaser.Timer.SECOND * (60 * 60) * this.RATIO;
  }

  _createClass(CustomerFactory, [{
    key: 'createCustomer',
    value: function createCustomer(game) {
      var rectangle = new Phaser.Rectangle(5, 60, 66, 40);
      var p = new Phaser.Point();
      rectangle.random(p);
      p.floor();
      // laol
      var type = 4 * game.rnd.integerInRange(0, 3);
      var customer = new _Customer2.default(game, p.x, p.y, type);
      game.global.customerQueue.add(customer);
    }
  }, {
    key: 'intensity',
    value: function intensity(miliseconds) {
      var time = miliseconds * this.RATIO;
      var x = Math.cos(time + this.PHASE_SHIFT) * 0.4;
      x += Math.cos(time * 2 + this.PHASE_SHIFT) * 0.2;
      x += Math.cos(time * 4 + this.PHASE_SHIFT) * 0.2;
      x = (x + 1) / 2 / 8;
      return x;
    }
  }, {
    key: 'inviteCustomer',
    value: function inviteCustomer(game, miliseconds) {
      // console.log(this.intensity(miliseconds));
      if (Math.random() < this.intensity(miliseconds)) {
        this.createCustomer(game);
      }
    }
  }]);

  return CustomerFactory;
}();

exports.default = CustomerFactory;

},{"objects/Customer":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Coffee = require('objects/Coffee');

var _Coffee2 = _interopRequireDefault(_Coffee);

var _Clickable2 = require('abstracts/Clickable');

var _Clickable3 = _interopRequireDefault(_Clickable2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Machine = function (_Clickable) {
  _inherits(Machine, _Clickable);

  function Machine(game, x, y) {
    _classCallCheck(this, Machine);

    var _this = _possibleConstructorReturn(this, (Machine.__proto__ || Object.getPrototypeOf(Machine)).call(this, game, x, y, 'machine'));

    _this._energyCost = 3;
    _this._moneyCost = 2;
    _this._timeCost = 5 * 60;

    _this.game.stage.addChild(_this);
    return _this;
  }

  _createClass(Machine, [{
    key: 'action',
    value: function action() {
      if (this.game.global.money > 0) {
        this.game.global.mS.play();
        this.game.global.player.moveTo(this.game.input.x + 20, 63);
        this.game.global.energy -= this._energyCost;
        this.game.global.money -= this._moneyCost;
        this.addTimeToPass(this._timeCost);

        // console.log(this.game.global.energy)
        var rectangle = new Phaser.Rectangle(85, 50, 15, 40);
        var p = new Phaser.Point();
        rectangle.random(p);
        p.floor();
        var coffee = new _Coffee2.default(this.game, p.x, p.y);
        // TODO: change this global nonsense
        this.game.global.coffeeCounter.add(coffee);
      }
    }
  }]);

  return Machine;
}(_Clickable3.default);

exports.default = Machine;

},{"abstracts/Clickable":1,"objects/Coffee":3}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Player = function (_Phaser$Sprite) {
  _inherits(Player, _Phaser$Sprite);

  function Player(game) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, 150, 50, 'player'));

    _this.game.physics.enable(_this, Phaser.Physics.ARCADE);
    _this._bounds = new Phaser.Rectangle(100, 40, 40, 60);
    // let debug = game.add.graphics(this._bounds.x, this._bounds.y);
    // debug.beginFill(0x000077);
    // debug.drawRect(0, 0, this._bounds.width, this._bounds.height);

    _this.x = _this._bounds.centerX;
    _this.y = _this._bounds.centerY;

    _this.inputEnabled = true;
    _this.anchor.set(0.5, 1);

    // this.input.enableDrag();
    _this.input.boundsRect = _this._bounds;

    _this.game.stage.addChild(_this);
    return _this;
  }

  // update() {}

  _createClass(Player, [{
    key: 'moveTo',
    value: function moveTo(x, y) {
      this.x = x;
      this.y = y;
      this.floorPosition();
    }
  }, {
    key: 'floorPosition',
    value: function floorPosition() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
    }
  }]);

  return Player;
}(Phaser.Sprite);

exports.default = Player;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var StatsPanel = function (_Phaser$Group) {
  _inherits(StatsPanel, _Phaser$Group);

  function StatsPanel(game) {
    _classCallCheck(this, StatsPanel);

    var _this = _possibleConstructorReturn(this, (StatsPanel.__proto__ || Object.getPrototypeOf(StatsPanel)).call(this, game));

    _this.bottomPanel = _this.game.add.sprite(0, 0, 'bottomPanel');
    _this.panelText = _this.game.add.bitmapText(7, 116, 'panelFont', 'Energy\nDay 1\tCash', 5);
    // this.moneyText = this.game.add.bitmapText(7 + 100, 116 + 10, 'panelFont', 'Cash: ' + this.game.global.money, 5)
    // this.dayText = this.game.add.bitmapText(7, 116 + 10, 'panelFont', 'Day: 1', 5)

    _this.bmd = game.make.bitmapData();
    _this.bmd.load('energyBar');
    _this.bmd.setHSL(0.2);
    _this.energyBar = _this.game.add.sprite(37, 116, 'energyBar');
    _this._fullEnergyBarWidth = _this.energyBar.width;
    _this.cropRect = new Phaser.Rectangle(0, 0, _this.energyBar.width, _this.energyBar.height);
    _this.energyBar.crop(_this.cropRect);
    return _this;
  }

  _createClass(StatsPanel, [{
    key: 'update',
    value: function update() {
      if (this.game.global.energy > 100) {
        this.bmd.setHSL(0.2 + (this.game.global.energy - 100) / 200);
      } else {
        this.cropRect.width = this._fullEnergyBarWidth * this.game.global.energy / 100;
        this.energyBar.updateCrop();
      }
      this.energyBar.loadTexture(this.bmd);
      var timedate = new Date(this.game.global.timePassed * 1000);
      var time = timedate.toLocaleTimeString('en-US', {
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC"
      });
      var day = timedate.getDate();
      // console.log(timedate.UTC())

      this.panelText.text = 'Energy\nDay ' + day + ' \t\t   Time ' + time + '\t\t   Cash $' + this.game.global.money;
      // console.log(this.energyBar.width * this.game.global.energy / 100);
    }
  }]);

  return StatsPanel;
}(Phaser.Group);

exports.default = StatsPanel;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: 'preload',
    value: function preload() {
      // Set some globals
      // NOTE: this wont work if player restarts form menu


      // Set 4x the scale
      this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
      this.game.scale.setUserScale(4, 4);

      // Enable crisp rendering
      // this.game.renderer.renderSession.roundPixels = true;
      Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    }
  }, {
    key: 'create',
    value: function create() {
      this.state.start('Preloader');
    }
  }]);

  return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Coffee = require('objects/Coffee');

var _Coffee2 = _interopRequireDefault(_Coffee);

var _Machine = require('objects/Machine');

var _Machine2 = _interopRequireDefault(_Machine);

var _Player = require('objects/Player');

var _Player2 = _interopRequireDefault(_Player);

var _CustomerFactory = require('objects/CustomerFactory');

var _CustomerFactory2 = _interopRequireDefault(_CustomerFactory);

var _Stats = require('objects/Stats');

var _Stats2 = _interopRequireDefault(_Stats);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CoffeeShop = function (_Phaser$State) {
  _inherits(CoffeeShop, _Phaser$State);

  function CoffeeShop() {
    _classCallCheck(this, CoffeeShop);

    return _possibleConstructorReturn(this, (CoffeeShop.__proto__ || Object.getPrototypeOf(CoffeeShop)).apply(this, arguments));
  }

  _createClass(CoffeeShop, [{
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.game.global = {
        maxEnergy: 100,
        energy: 100.0,
        money: 100,
        damage: 0,
        timePassed: 6 * 60 * 60,
        timeToPass: 0.0
      };

      this.game.global.mS = this.game.add.audio('machineSound');
      this.game.global.sS = this.game.add.audio('sellSound');
      this.game.global.dS = this.game.add.audio('drinkSound');

      //  Being mp3 files these take time to decode, so we can't play them instantly
      //  Using setDecodedCallback we can be notified when they're ALL ready for use.
      //  The audio files could decode in ANY order, we can never be sure which it'll be.

      // this.game.sound.setDecodedCallback([mS, sS, dS], start, this);

      this.game.time.events.loop(Phaser.Timer.SECOND * 3, function () {
        return _this2.game.global.timeToPass += 60;
      }, this);

      var background = this.add.sprite(0, 0, 'shopBackground');
      this.machine = new _Machine2.default(this.game, 120, 0);

      this.game.global.coffeeCounter = this.game.add.group();
      this.game.global.customerQueue = this.game.add.group();
      this.game.global.player = new _Player2.default(this.game);

      this.customerFactory = new _CustomerFactory2.default();
      this.customerFactory.createCustomer(this.game);
      // let customer = new Customer(this.game, 20, 30, 'customer')

      // STATS
      this.panel = new _Stats2.default(this.game);
    }
  }, {
    key: 'update',
    value: function update() {
      this.passTime();

      this.game.global.customerQueue.sort('y', Phaser.Group.SORT_ASCENDING);
      this.game.global.coffeeCounter.sort('y', Phaser.Group.SORT_ASCENDING);

      // this.game.debug.text([this.game.input.x, this.game.input.y], 10, 20)

      // Win/Lose conditions
      if (this.game.global.energy < 0 || this.game.global.energy > 200 || this.game.global.money < 0 || this.game.global.timePassed > 86400) {
        this.machine.destroy();
        this.state.start('GameOver');
      }
    }
  }, {
    key: 'passTime',
    value: function passTime() {
      var CYCLE = 60; // seconds
      var minutesPassed = 0;
      while (this.game.global.timeToPass > 1) {
        // console.log(minutesPassed++)
        this.game.global.timeToPass -= CYCLE;
        this.game.global.timePassed += CYCLE;
        this.customerFactory.inviteCustomer(this.game, this.game.global.timePassed * Phaser.Timer.SECOND);
      }
    }
  }]);

  return CoffeeShop;
}(Phaser.State);

exports.default = CoffeeShop;

},{"objects/Coffee":3,"objects/CustomerFactory":5,"objects/Machine":6,"objects/Player":7,"objects/Stats":8}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import Object from 'objects/Object';

var GameOver = function (_Phaser$State) {
  _inherits(GameOver, _Phaser$State);

  function GameOver() {
    _classCallCheck(this, GameOver);

    return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).apply(this, arguments));
  }

  _createClass(GameOver, [{
    key: 'create',
    value: function create() {
      var title = this.game.add.bitmapText(20, 15, 'panelFont', 'GAME OVER!\n', 5);
      var massage = this.game.add.bitmapText(15, 40, 'panelFont', '', 5);
      var restart = this.game.add.bitmapText(15, 130, 'panelFont', 'New Game', 5);
      restart.inputEnabled = true;
      restart.input.useHandCursor = true;
      restart.events.onInputDown.add(this.newGame, this);

      if (this.game.global.energy < 0) {
        massage.text = 'You died from exhaustion\nBut you earned $' + (this.game.global.money - 100) + '... yay!\n' + this.game.global.damage + ' coffees drunk';
      } else if (this.game.global.energy > 200) {
        massage.text = 'You overdosed\nBut you earned $' + (this.game.global.money - 100) + '... yay!\nOnly ' + this.game.global.damage + ' coffees drunk';
      } else if (this.game.global.money < 100) {
        massage.text = 'You lost all money\nYou are fired!\n' + this.game.global.damage + ' coffees drunk\nYour live length expentancy\n after this day is ' + Math.floor(16 + 80 * 1 / Math.sqrt(this.game.global.damage)) + ' years!';
      } else {
        massage.text = 'You survived that day\nBut you only earned $' + (this.game.global.money - 100) + '!\n' + this.game.global.damage + ' coffees drunk\nYour live length expentancy\n after this day is ' + Math.floor(16 + 80 * 1 / Math.sqrt(this.game.global.damage)) + ' years!';
      }

      this.game.global.player.destroy();
    }
  }, {
    key: 'newGame',
    value: function newGame() {
      this.state.start('CoffeeShop');
    }
  }, {
    key: 'createButton',
    value: function createButton() {
      this.levelText = this.game.add.bitmapText(0, t_sb_y + 70, 'myfont', '', 18);
      this.add(this.levelText);
      this.levelText.setText(Globals['level'].toString());
      this.levelText.inputEnabled = true;
      this.levelText.events.onInputDown.add(listener, this);

      function listener() {
        console.log('clicked');
      }
    }
  }]);

  return GameOver;
}(Phaser.State);

exports.default = GameOver;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Preloader = function (_Phaser$State) {
  _inherits(Preloader, _Phaser$State);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: 'preload',
    value: function preload() {
      this.load.image('shopBackground', 'assets/images/shop.png');
      this.load.image('coffee', 'assets/images/coffee.png');
      this.load.image('machine', 'assets/images/machine1.png');
      this.load.image('player', 'assets/images/coffee-guy.png');
      this.load.image('cash', 'assets/images/cash.png');
      this.load.spritesheet('customer', 'assets/images/customers16x36.png', 16, 36);
      this.load.image('customers', 'assets/images/customers16x36.png');

      this.load.image('bottomPanel', 'assets/images/statpanel.png');
      this.load.image('energyBar', 'assets/images/energy-bar.png');
      this.load.bitmapFont('defaultFont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
      this.load.bitmapFont('panelFont', 'assets/fonts/panelFont.png', 'assets/fonts/font.fnt');

      this.load.audio('machineSound', 'assets/sounds/machine.mp3');
      this.load.audio('sellSound', 'assets/sounds/sell.mp3');
      this.load.audio('drinkSound', 'assets/sounds/drink.mp3');
    }
  }, {
    key: 'create',
    value: function create() {
      var bmd = this.game.make.bitmapData();
      bmd.load('customer');
      bmd.replaceRGB(0, 0, 0, 255, 255, 255, 255, 255);
      this.cache.addSpriteSheet('customer_w', 'null', bmd.canvas, 16, 36);

      this.state.start('CoffeeShop');
    }
  }]);

  return Preloader;
}(Phaser.State);

exports.default = Preloader;

},{}]},{},[2])
//# sourceMappingURL=game.js.map
