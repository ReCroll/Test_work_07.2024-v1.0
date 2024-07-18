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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n\r\n//======================= MENU and NAVIGATION ==========================\r\nconst numberOfPage = \"40\";\r\nfunction clickButton(button) {\r\n  if (button.classList.contains(\"_active\")) {\r\n    return button;\r\n  }\r\n  if (button.classList.contains(\"menu__item\") ) {\r\n    let menuItemsActive = document.querySelectorAll(\".menu__item._active\");\r\n    if (menuItemsActive.length > 0) {\r\n      menuItemsActive.forEach(menuItemActive => {\r\n          menuItemActive.classList.remove(\"_active\");\r\n      });\r\n    }\r\n    button.classList.add(\"_active\");\r\n  }\r\n  if (button.classList.contains(\"navigation__link\")) {\r\n    let navigationLinksActive = document.querySelectorAll(\".navigation__link._active\");\r\n    if (navigationLinksActive.length > 0) {\r\n      navigationLinksActive.forEach(navigationLinkActive => {\r\n        navigationLinkActive.classList.remove(\"_active\");\r\n      });\r\n    }\r\n    button.classList.add(\"_active\")\r\n  }\r\n  if (button.classList.contains(\"_button-next\")) {\r\n    let navigationLinksActive = document.querySelectorAll(\".navigation__link._active\");\r\n    if (navigationLinksActive.length > 0) {\r\n      navigationLinksActive.forEach(navigationLinkActive => {\r\n        if (navigationLinkActive.nextElementSibling.classList.contains(\"navigation__link\")) {\r\n          navigationLinkActive.nextElementSibling.classList.add(\"_active\");\r\n          navigationLinkActive.classList.remove(\"_active\");\r\n        } else {\r\n          let buttonsContent = document.querySelectorAll(\"._el-link\");\r\n          increaseButtonContent(buttonsContent);\r\n        }\r\n      });\r\n    }\r\n  }\r\n  if (button.classList.contains(\"_button-prev\")) {\r\n    let navigationLinksActive = document.querySelectorAll(\".navigation__link._active\");\r\n    if (navigationLinksActive.length > 0) {\r\n      navigationLinksActive.forEach(navigationLinkActive => {\r\n        if (navigationLinkActive.previousElementSibling.classList.contains(\"navigation__link\")) {\r\n          navigationLinkActive.previousElementSibling.classList.add(\"_active\");\r\n          navigationLinkActive.classList.remove(\"_active\");\r\n        } else {\r\n          let buttonsContent = document.querySelectorAll(\"._el-link\");\r\n          reduceButtonContent(buttonsContent);\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\nfunction reduceButtonContent(el) {\r\n  const firstEl = el[0].innerHTML;\r\n  if (firstEl === \"1\") {\r\n    return;\r\n  } else if (firstEl !== \" 1\") {\r\n    for (let i = 0; i < 4; i++) {\r\n      const buttonContent = el[i];\r\n      const content = buttonContent.innerHTML;\r\n      let num = Number(content);\r\n      num--;\r\n      buttonContent.innerHTML = num;\r\n    }\r\n  }\r\n\r\n};\r\nfunction increaseButtonContent(el) {\r\n  const lastEl = el[3].innerHTML;\r\n  if (lastEl === numberOfPage) {\r\n    return;\r\n  } else if (lastEl !== numberOfPage) {\r\n    for (let i = 0; i < 4; i++) {\r\n      const buttonContent = el[i];\r\n      const content = buttonContent.innerHTML;\r\n      let num = Number(content);\r\n      num++;\r\n      buttonContent.innerHTML = num;\r\n    }\r\n  }\r\n\r\n};\r\n\r\n\r\nconst menuItems = document.querySelectorAll(\".menu__item\");\r\nmenuItems.forEach(menuItem => {\r\n  menuItem.addEventListener(\"click\", () => {\r\n    clickButton(menuItem);\r\n  })\r\n});\r\nconst navigationLinks = document.querySelectorAll(\".navigation__link\");\r\nnavigationLinks.forEach(navigationLink => {\r\n  navigationLink.addEventListener(\"click\", () => {\r\n    clickButton(navigationLink);\r\n  })\r\n})\r\n//===================== navigation next/prew ==================\r\nconst navButtons = document.querySelectorAll(\".navigation__arrow\");\r\nnavButtons.forEach(navButton => {\r\n  navButton.addEventListener(\"click\", () => {\r\n    clickButton(navButton);\r\n  })\r\n})\r\n//==============================================================\r\n\n\n//# sourceURL=webpack://Test_work/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;