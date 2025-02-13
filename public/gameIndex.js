/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elements */ \"./src/create-elements.ts\");\n\nvar Card = /** @class */ (function () {\n    function Card(cardImgSrc, idNumber) {\n        this._idNumber = idNumber;\n        this.cardImgSrc = cardImgSrc;\n        this._element = this.renderCardElement();\n    }\n    Object.defineProperty(Card.prototype, \"idNumber\", {\n        get: function () {\n            return this._idNumber;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Card.prototype, \"element\", {\n        get: function () {\n            return this._element;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Card.prototype.renderCardElement = function () {\n        var cardContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'card-container');\n        cardContainer.dataset.idNumber = this.idNumber;\n        var cardInner = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'card-inner');\n        var cardFront = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'card-front');\n        var imgFront = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newImg)('./assets/cardtest.jpg', 'card', 'Frente da Carta');\n        cardFront.appendChild(imgFront);\n        var cardBack = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'card-back');\n        var imgBack = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newImg)(this.cardImgSrc, 'card', 'Trás da Carta');\n        cardBack.appendChild(imgBack);\n        cardInner.append(cardFront, cardBack);\n        cardContainer.append(cardInner);\n        return cardContainer;\n    };\n    Card.prototype.append = function () {\n        document.querySelector('main').appendChild(this._element);\n    };\n    Card.prototype.flipCard = function () {\n        var cardInner = this.element.querySelector('.card-inner');\n        cardInner.classList.toggle('flip');\n    };\n    return Card;\n}());\n\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/Card.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\n/* harmony import */ var _PointsScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointsScreen */ \"./src/PointsScreen.ts\");\n/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-query */ \"./src/media-query.ts\");\n/* harmony import */ var _options_screens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-screens */ \"./src/options-screens.ts\");\n\n\n\n\n/* Classe responsável pelas ações do jogo. */\nvar Game = /** @class */ (function () {\n    function Game(difficulty) {\n        this.difficulty = difficulty;\n        this.restartGame();\n        this.flippedCards = [];\n    }\n    Game.prototype.restartGame = function () {\n        this.pointsScreen = new _PointsScreen__WEBPACK_IMPORTED_MODULE_1__.PointsScreen();\n        (0,_options_screens__WEBPACK_IMPORTED_MODULE_3__.renderFinishBtn)();\n        Game.cards = [];\n        if (this.difficulty === 'easy') {\n            this.createCards(9);\n            this.appendCards();\n            (0,_media_query__WEBPACK_IMPORTED_MODULE_2__.mediaQueryEasy)();\n            this.pointsScreen.left = 9;\n        }\n        else if (this.difficulty === 'medium') {\n            this.createCards(12);\n            this.appendCards();\n            (0,_media_query__WEBPACK_IMPORTED_MODULE_2__.mediaQueryMedium)();\n            this.pointsScreen.left = 12;\n        }\n        else if (this.difficulty === 'hard') {\n            this.createCards(18);\n            this.appendCards();\n            (0,_media_query__WEBPACK_IMPORTED_MODULE_2__.mediaQueryHard)();\n            this.pointsScreen.left = 18;\n        }\n    };\n    /* Embaralha o array e adiciona as cartas no main. */\n    Game.prototype.appendCards = function () {\n        Game.cards.sort(function () {\n            return Math.random() - 0.5;\n        });\n        Game.cards.forEach(function (card) { return card.append(); });\n    };\n    Game.prototype.getIdNumber = function () {\n        var id;\n        var alreadyExist;\n        do {\n            id = String(Math.random().toFixed(2));\n            alreadyExist = Game.cards.filter(function (card) {\n                return card.idNumber === id;\n            });\n        } while (alreadyExist.length > 0);\n        return id;\n    };\n    /* Cria a quantidade determinada de acordo com a dificuldade de instâncias de Card. */\n    Game.prototype.createCards = function (loopLength) {\n        var _this = this;\n        for (var i = 1; i <= loopLength; i++) {\n            var idNumber = this.getIdNumber();\n            var card1 = new _Card__WEBPACK_IMPORTED_MODULE_0__.Card(\"./assets/memory\".concat(i, \".jpg\"), idNumber);\n            var card2 = new _Card__WEBPACK_IMPORTED_MODULE_0__.Card(\"./assets/memory\".concat(i, \".jpg\"), idNumber);\n            Game.cards.push(card1, card2);\n        }\n        Game.cards.forEach(function (card) { return card.element.addEventListener('click', function () {\n            if (_this.flippedCards.length !== 2) {\n                _this.checkTurn(card);\n            }\n        }); });\n    };\n    /* Cuida da lógica das jogadas. */\n    Game.prototype.checkTurn = function (card) {\n        var cardInner = card.element.querySelector('.card-inner');\n        /* Condição para não  virar uma carta que já está virada. */\n        if (!cardInner.classList.contains('flip')) {\n            this.flippedCards.push(card);\n            card.flipCard();\n        }\n        if (this.flippedCards.length === 2) {\n            if (this.flippedCards[0].idNumber === this.flippedCards[1].idNumber) {\n                this.clearFlippedCards();\n                this.pointsScreen.matches++;\n                this.pointsScreen.left--;\n            }\n            else {\n                this.flipCardsBack();\n            }\n        }\n        if (this.pointsScreen.left === 0) {\n            this.finishGame();\n        }\n    };\n    /* Vira as cartas de volta. */\n    Game.prototype.flipCardsBack = function () {\n        var _this = this;\n        setTimeout(function () {\n            _this.flippedCards.forEach(function (card) { return card.flipCard(); });\n            _this.flippedCards = [];\n            _this.pointsScreen.turns++;\n        }, 700);\n    };\n    /* Limpa as cartas que estão viradas. */\n    Game.prototype.clearFlippedCards = function () {\n        var _this = this;\n        setTimeout(function () {\n            _this.flippedCards.forEach(function (card) { return card.element.style.opacity = '0'; });\n            _this.flippedCards = [];\n            _this.pointsScreen.turns++;\n        }, 700);\n    };\n    /* Finaliza o jogo. */\n    Game.prototype.finishGame = function () {\n        this.pointsScreen.removePoints();\n        (0,_options_screens__WEBPACK_IMPORTED_MODULE_3__.removeFinishBtn)();\n        (0,_options_screens__WEBPACK_IMPORTED_MODULE_3__.renderGameoverOptions)();\n        document.querySelector('main').innerHTML = '';\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/Game.ts?");

/***/ }),

/***/ "./src/PointsScreen.ts":
/*!*****************************!*\
  !*** ./src/PointsScreen.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PointsScreen: () => (/* binding */ PointsScreen)\n/* harmony export */ });\n/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elements */ \"./src/create-elements.ts\");\n\nvar PointsScreen = /** @class */ (function () {\n    function PointsScreen() {\n        this.element = this.renderPoints();\n        this.turns = 0;\n        this.matches = 0;\n        this.left = 0;\n    }\n    Object.defineProperty(PointsScreen.prototype, \"turns\", {\n        get: function () {\n            return this._turns;\n        },\n        set: function (n) {\n            this._turns = n;\n            var turnsSpan = this.element.querySelector('#turns');\n            turnsSpan.innerText = \"turns: \".concat(this.turns);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PointsScreen.prototype, \"matches\", {\n        get: function () {\n            return this._matches;\n        },\n        set: function (n) {\n            this._matches = n;\n            var matchesSpan = this.element.querySelector('#matches');\n            matchesSpan.innerText = \"matches: \".concat(this.matches);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(PointsScreen.prototype, \"left\", {\n        get: function () {\n            return this._left;\n        },\n        set: function (n) {\n            this._left = n;\n            var leftSpan = this.element.querySelector('#left');\n            leftSpan.innerText = \"left: \".concat(this.left);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    PointsScreen.prototype.renderPoints = function () {\n        var pointsSection = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', '', 'points-section');\n        var turnsSpan = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newTextElement)('span', 'turns: 0', 'turns');\n        var matchesSpan = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newTextElement)('span', 'matches: 0', 'matches');\n        var leftSpan = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newTextElement)('span', 'left: 0', 'left');\n        pointsSection.append(turnsSpan, matchesSpan, leftSpan);\n        document.body.appendChild(pointsSection);\n        return pointsSection;\n    };\n    PointsScreen.prototype.removePoints = function () {\n        document.querySelector('.points-section').remove();\n    };\n    return PointsScreen;\n}());\n\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/PointsScreen.ts?");

/***/ }),

/***/ "./src/create-elements.ts":
/*!********************************!*\
  !*** ./src/create-elements.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   createMidiaElement: () => (/* binding */ createMidiaElement),\n/* harmony export */   newAnchorElement: () => (/* binding */ newAnchorElement),\n/* harmony export */   newButton: () => (/* binding */ newButton),\n/* harmony export */   newImg: () => (/* binding */ newImg),\n/* harmony export */   newTextElement: () => (/* binding */ newTextElement)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nfunction createElement(tag, id) {\n    var _a;\n    var className = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        className[_i - 2] = arguments[_i];\n    }\n    var element = document.createElement(tag);\n    if (id)\n        element.id = id;\n    if (className) {\n        (_a = element.classList).add.apply(_a, className);\n    }\n    return element;\n}\nfunction createMidiaElement(tag, src) {\n    var attributes = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        attributes[_i - 2] = arguments[_i];\n    }\n    var element = createElement(tag);\n    attributes.forEach(function (pair) { return element.setAttribute(pair[0], pair[1]); });\n    if (tag === 'img') {\n        return element;\n    }\n    else {\n        return element;\n    }\n}\nfunction newImg(src, className, alt) {\n    var attributes = [];\n    for (var _i = 3; _i < arguments.length; _i++) {\n        attributes[_i - 3] = arguments[_i];\n    }\n    var img = document.createElement('img');\n    img.src = src;\n    img.className = className;\n    img.alt = alt;\n    attributes.forEach(function (pair) { return img.setAttribute(pair[0], pair[1]); });\n    return img;\n}\nfunction newTextElement(tag, text, id) {\n    var className = [];\n    for (var _i = 3; _i < arguments.length; _i++) {\n        className[_i - 3] = arguments[_i];\n    }\n    var element = createElement.apply(void 0, __spreadArray([tag, id], className, false));\n    element.innerText = text;\n    return element;\n}\nfunction newButton(text, id) {\n    var className = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        className[_i - 2] = arguments[_i];\n    }\n    var btn = createElement.apply(void 0, __spreadArray(['button', id], className, false));\n    btn.innerText = text;\n    return btn;\n}\nfunction newAnchorElement(href) {\n    var a = createElement('a');\n    a.href = href;\n    return a;\n}\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/create-elements.ts?");

/***/ }),

/***/ "./src/media-query.ts":
/*!****************************!*\
  !*** ./src/media-query.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mediaQueryEasy: () => (/* binding */ mediaQueryEasy),\n/* harmony export */   mediaQueryHard: () => (/* binding */ mediaQueryHard),\n/* harmony export */   mediaQueryMedium: () => (/* binding */ mediaQueryMedium)\n/* harmony export */ });\nvar main = document.querySelector('main');\nfunction mediaQueryEasy() {\n    main.className = '';\n    main.classList.add('easy-grid');\n}\nfunction mediaQueryMedium() {\n    main.className = '';\n    main.classList.add('medium-grid');\n}\nfunction mediaQueryHard() {\n    main.className = '';\n    changeCardsSize('5em', '8em');\n    main.classList.add('hard-grid');\n}\nfunction changeCardsSize(width, height) {\n    var cardContainers = document.querySelectorAll('.card-container');\n    var imgsCard = document.querySelectorAll('.card');\n    cardContainers.forEach(function (cardContainer) {\n        cardContainer.style.width = width;\n        cardContainer.style.height = height;\n    });\n    imgsCard.forEach(function (imgCard) {\n        imgCard.style.width = width;\n        imgCard.style.height = height;\n    });\n}\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/media-query.ts?");

/***/ }),

/***/ "./src/memoryGame.ts":
/*!***************************!*\
  !*** ./src/memoryGame.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _options_screens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-screens */ \"./src/options-screens.ts\");\n\n(0,_options_screens__WEBPACK_IMPORTED_MODULE_0__.renderGamemodeOptions)();\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/memoryGame.ts?");

/***/ }),

/***/ "./src/options-screens.ts":
/*!********************************!*\
  !*** ./src/options-screens.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeFinishBtn: () => (/* binding */ removeFinishBtn),\n/* harmony export */   renderFinishBtn: () => (/* binding */ renderFinishBtn),\n/* harmony export */   renderGamemodeOptions: () => (/* binding */ renderGamemodeOptions),\n/* harmony export */   renderGameoverOptions: () => (/* binding */ renderGameoverOptions)\n/* harmony export */ });\n/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elements */ \"./src/create-elements.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\n\nvar gameDifficulty;\nvar game;\n/* Renderiza a tela para escolher o modo de jogo. */\nfunction renderGamemodeOptions() {\n    var sectionOpt = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', '', 'game-options');\n    var p = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newTextElement)('p', 'Select the difficulty');\n    var btnContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'mode-btn-container');\n    var easyBtn = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Easy', '', 'easy-btn', 'mode-btn');\n    easyBtn.dataset.difficulty = 'easy';\n    var mediumBtn = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Medium', '', 'medium-btn', 'mode-btn');\n    mediumBtn.dataset.difficulty = 'medium';\n    var hardBtn = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Hard', '', 'hard-btn', 'mode-btn');\n    hardBtn.dataset.difficulty = 'hard';\n    btnContainer.append(easyBtn, mediumBtn, hardBtn);\n    sectionOpt.append(p, btnContainer);\n    /* Remover esse estilo depois */\n    sectionOpt.style.position = 'absolute';\n    sectionOpt.style.top = '300px';\n    document.body.appendChild(sectionOpt);\n    document.querySelectorAll('.mode-btn').forEach(function (btn) {\n        btn.addEventListener('click', function () {\n            gameDifficulty = btn.dataset.difficulty;\n            sectionOpt.remove();\n            game = new _Game__WEBPACK_IMPORTED_MODULE_1__.Game(gameDifficulty);\n        }, { once: true });\n    });\n}\n/* Renderiza a tela de fim de jogo. */\nfunction renderGameoverOptions() {\n    var sectionOpt = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', '', 'game-options');\n    var p = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newTextElement)('p', 'O que vai fazer agora?');\n    var btnContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'opt-btn-container');\n    var playAgainBtn = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Play again', '', 'play-again-btn', 'opt-btn');\n    var changeModeBtn = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Change mode', '', 'change-mode-btn', 'opt-btn');\n    var ExitBtn = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Exit', '', 'exit-btn', 'opt-btn');\n    btnContainer.append(playAgainBtn, changeModeBtn, ExitBtn);\n    sectionOpt.append(p, btnContainer);\n    /* Remover esse estilo depois */\n    sectionOpt.style.position = 'absolute';\n    sectionOpt.style.top = '300px';\n    document.body.appendChild(sectionOpt);\n    playAgainBtn.addEventListener('click', function () {\n        sectionOpt.remove();\n        game.restartGame();\n    }, { once: true });\n    changeModeBtn.addEventListener('click', function () {\n        sectionOpt.remove();\n        renderGamemodeOptions();\n    }, { once: true });\n    ExitBtn.addEventListener('click', function () {\n        var a = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newAnchorElement)('index.html');\n        a.click();\n    }, { once: true });\n}\n/* Renderiza o botão que finaliza o jogo caso seja clicado. */\nfunction renderFinishBtn() {\n    var finishButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Finish Game', '', 'finish-game-btn');\n    document.body.appendChild(finishButton);\n    finishButton.addEventListener('click', renderConfirmScreen);\n}\n/* Remderiza a tela de confirmação para finalizar o jogo. */\nfunction renderConfirmScreen() {\n    var confirmSection = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', '', 'confirm-container');\n    var p = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newTextElement)('p', 'Você tem certeza que finalizar o jogo?');\n    var btnContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '', 'opt-btn-container');\n    var yesButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Sim', '', 'opt-btn');\n    var noButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.newButton)('Não', '', 'opt-btn');\n    yesButton.addEventListener('click', function () {\n        confirmSection.remove();\n        game.finishGame();\n    });\n    noButton.addEventListener('click', function () {\n        confirmSection.remove();\n    });\n    btnContainer.append(yesButton, noButton);\n    confirmSection.append(p, btnContainer);\n    document.body.appendChild(confirmSection);\n}\nfunction removeFinishBtn() {\n    document.querySelector('.finish-game-btn').remove();\n}\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/options-screens.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/memoryGame.ts");
/******/ 	
/******/ })()
;