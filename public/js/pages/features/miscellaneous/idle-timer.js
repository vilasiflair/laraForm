/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 151);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/features/miscellaneous/idle-timer.js":
/*!**************************************************************************!*\
  !*** ./resources/metronic/js/pages/features/miscellaneous/idle-timer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTIdleTimerDemo = function () {\n  var _initDemo1 = function _initDemo1() {\n    //Define default\n    var docTimeout = 5000;\n    /*\n    Handle raised idle/active events\n    */\n\n    $(document).on(\"idle.idleTimer\", function (event, elem, obj) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    });\n    $(document).on(\"active.idleTimer\", function (event, elem, obj, e) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Active [\" + e.type + \"] [\" + e.target.nodeName + \"] @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    });\n    /*\n    Handle button events\n    */\n\n    $(\"#btPause\").click(function () {\n      $(document).idleTimer(\"pause\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Paused @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btResume\").click(function () {\n      $(document).idleTimer(\"resume\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Resumed @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btElapsed\").click(function () {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Elapsed (since becoming active): \" + $(document).idleTimer(\"getElapsedTime\") + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btDestroy\").click(function () {\n      $(document).idleTimer(\"destroy\");\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Destroyed: @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btInit\").click(function () {\n      // for demo purposes show init with just object\n      $(document).idleTimer({\n        timeout: docTimeout\n      });\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Init: @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#docStatus\")[0].scrollHeight); //Apply classes for default state\n\n      if ($(document).idleTimer(\"isIdle\")) {\n        $(\"#docStatus\").removeClass(\"alert-success\").addClass(\"alert-warning\");\n      } else {\n        $(\"#docStatus\").addClass(\"alert-success\").removeClass(\"alert-warning\");\n      }\n\n      $(this).blur();\n      return false;\n    }); //Clear old statuses\n\n    $(\"#docStatus\").val(\"\"); //Start timeout, passing no options\n    //Same as $.idleTimer(docTimeout, docOptions);\n\n    $(document).idleTimer(docTimeout); //For demo purposes, style based on initial state\n\n    if ($(document).idleTimer(\"isIdle\")) {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Initial Idle State @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    } else {\n      $(\"#docStatus\").val(function (i, v) {\n        return v + \"Initial Active State @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#docStatus\")[0].scrollHeight);\n    } //For demo purposes, display the actual timeout on the page\n\n\n    $(\"#docTimeout\").text(docTimeout / 1000);\n  };\n\n  var _initDemo2 = function _initDemo2() {\n    //Define textarea settings\n    var taTimeout = 3000;\n    /*\n    Handle raised idle/active events\n    */\n\n    $(\"#elStatus\").on(\"idle.idleTimer\", function (event, elem, obj) {\n      //If you dont stop propagation it will bubble up to document event handler\n      event.stopPropagation();\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    });\n    $(\"#elStatus\").on(\"active.idleTimer\", function (event) {\n      //If you dont stop propagation it will bubble up to document event handler\n      event.stopPropagation();\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Active @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    });\n    /*\n    Handle button events\n    */\n\n    $(\"#btReset\").click(function () {\n      $(\"#elStatus\").idleTimer(\"reset\").val(function (i, v) {\n        return v + \"Reset @ \" + moment().format() + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight); //Apply classes for default state\n\n      if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n        $(\"#elStatus\").removeClass(\"alert-success\").addClass(\"alert-warning\");\n      } else {\n        $(\"#elStatus\").addClass(\"alert-success\").removeClass(\"alert-warning\");\n      }\n\n      $(this).blur();\n      return false;\n    });\n    $(\"#btRemaining\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Remaining: \" + $(\"#elStatus\").idleTimer(\"getRemainingTime\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btLastActive\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"LastActive: \" + $(\"#elStatus\").idleTimer(\"getLastActiveTime\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    });\n    $(\"#btState\").click(function () {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"State: \" + ($(\"#elStatus\").idleTimer(\"isIdle\") ? \"idle\" : \"active\") + \" \\n\";\n      }).scrollTop($(\"#elStatus\")[0].scrollHeight);\n      $(this).blur();\n      return false;\n    }); //Clear value if there was one cached & start time\n\n    $(\"#elStatus\").val(\"\").idleTimer(taTimeout); //For demo purposes, show initial state\n\n    if ($(\"#elStatus\").idleTimer(\"isIdle\")) {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Initial Idle @ \" + moment().format() + \" \\n\";\n      }).removeClass(\"alert-success\").addClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    } else {\n      $(\"#elStatus\").val(function (i, v) {\n        return v + \"Initial Active @ \" + moment().format() + \" \\n\";\n      }).addClass(\"alert-success\").removeClass(\"alert-warning\").scrollTop($(\"#elStatus\")[0].scrollHeight);\n    } // Display the actual timeout on the page\n\n\n    $(\"#elTimeout\").text(taTimeout / 1000);\n  };\n\n  return {\n    //main function to initiate the module\n    init: function init() {\n      _initDemo1();\n\n      _initDemo2();\n    }\n  };\n}();\n\njQuery(document).ready(function () {\n  KTIdleTimerDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvbWlzY2VsbGFuZW91cy9pZGxlLXRpbWVyLmpzPzFjMTMiXSwibmFtZXMiOlsiS1RJZGxlVGltZXJEZW1vIiwiX2luaXREZW1vMSIsImRvY1RpbWVvdXQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwiZWxlbSIsIm9iaiIsInZhbCIsImkiLCJ2IiwibW9tZW50IiwiZm9ybWF0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImUiLCJ0eXBlIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJjbGljayIsImlkbGVUaW1lciIsImJsdXIiLCJ0aW1lb3V0IiwidGV4dCIsIl9pbml0RGVtbzIiLCJ0YVRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJpbml0IiwialF1ZXJ5IiwicmVhZHkiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLGVBQWUsR0FBRyxZQUFXO0FBQzdCLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDeEI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsSUFBakI7QUFFQTtBQUNSO0FBQ0E7O0FBQ1FDLEtBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxnQkFBZixFQUFpQyxVQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeERMLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyxTQUFKLEdBQWdCQyxNQUFNLEdBQUdDLE1BQVQsRUFBaEIsR0FBb0MsS0FBM0M7QUFDSCxPQUhMLEVBSUtDLFdBSkwsQ0FJaUIsZUFKakIsRUFLS0MsUUFMTCxDQUtjLGVBTGQsRUFNS0MsU0FOTCxDQU1lYixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLENBQWhCLEVBQW1CYyxZQU5sQztBQU9ILEtBUkQ7QUFTQWQsS0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLGtCQUFmLEVBQW1DLFVBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxHQUF0QixFQUEyQlUsQ0FBM0IsRUFBOEI7QUFDN0RmLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyxVQUFKLEdBQWlCTyxDQUFDLENBQUNDLElBQW5CLEdBQTBCLEtBQTFCLEdBQWtDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsUUFBM0MsR0FBc0QsTUFBdEQsR0FBK0RULE1BQU0sR0FBR0MsTUFBVCxFQUEvRCxHQUFtRixLQUExRjtBQUNILE9BSEwsRUFJS0UsUUFKTCxDQUljLGVBSmQsRUFLS0QsV0FMTCxDQUtpQixlQUxqQixFQU1LRSxTQU5MLENBTWViLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsQ0FBaEIsRUFBbUJjLFlBTmxDO0FBT0gsS0FSRDtBQVVBO0FBQ1I7QUFDQTs7QUFDUWQsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjbUIsS0FBZCxDQUFvQixZQUFXO0FBQzNCbkIsT0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWW1CLFNBQVosQ0FBc0IsT0FBdEI7QUFDQXBCLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyxXQUFKLEdBQWtCQyxNQUFNLEdBQUdDLE1BQVQsRUFBbEIsR0FBc0MsS0FBN0M7QUFDSCxPQUhMLEVBSUtHLFNBSkwsQ0FJZWIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixDQUFoQixFQUFtQmMsWUFKbEM7QUFLQWQsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUIsSUFBUjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBVEQ7QUFVQXJCLEtBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZW1CLEtBQWYsQ0FBcUIsWUFBVztBQUM1Qm5CLE9BQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVltQixTQUFaLENBQXNCLFFBQXRCO0FBQ0FwQixPQUFDLENBQUMsWUFBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsWUFBSixHQUFtQkMsTUFBTSxHQUFHQyxNQUFULEVBQW5CLEdBQXVDLEtBQTlDO0FBQ0gsT0FITCxFQUlLRyxTQUpMLENBSWViLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsQ0FBaEIsRUFBbUJjLFlBSmxDO0FBS0FkLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQVREO0FBVUFyQixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCbUIsS0FBaEIsQ0FBc0IsWUFBVztBQUM3Qm5CLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyxtQ0FBSixHQUEwQ1IsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWW1CLFNBQVosQ0FBc0IsZ0JBQXRCLENBQTFDLEdBQW9GLEtBQTNGO0FBQ0gsT0FITCxFQUlLUCxTQUpMLENBSWViLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsQ0FBaEIsRUFBbUJjLFlBSmxDO0FBS0FkLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQVJEO0FBU0FyQixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCbUIsS0FBaEIsQ0FBc0IsWUFBVztBQUM3Qm5CLE9BQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVltQixTQUFaLENBQXNCLFNBQXRCO0FBQ0FwQixPQUFDLENBQUMsWUFBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsZUFBSixHQUFzQkMsTUFBTSxHQUFHQyxNQUFULEVBQXRCLEdBQTBDLEtBQWpEO0FBQ0gsT0FITCxFQUlLQyxXQUpMLENBSWlCLGVBSmpCLEVBS0tBLFdBTEwsQ0FLaUIsZUFMakIsRUFNS0UsU0FOTCxDQU1lYixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLENBQWhCLEVBQW1CYyxZQU5sQztBQU9BZCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixJQUFSO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FYRDtBQVlBckIsS0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhbUIsS0FBYixDQUFtQixZQUFXO0FBQzFCO0FBQ0FuQixPQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZbUIsU0FBWixDQUFzQjtBQUNsQkUsZUFBTyxFQUFFdkI7QUFEUyxPQUF0QjtBQUdBQyxPQUFDLENBQUMsWUFBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsVUFBSixHQUFpQkMsTUFBTSxHQUFHQyxNQUFULEVBQWpCLEdBQXFDLEtBQTVDO0FBQ0gsT0FITCxFQUlLRyxTQUpMLENBSWViLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsQ0FBaEIsRUFBbUJjLFlBSmxDLEVBTDBCLENBVzFCOztBQUNBLFVBQUlkLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVltQixTQUFaLENBQXNCLFFBQXRCLENBQUosRUFBcUM7QUFDakNwQixTQUFDLENBQUMsWUFBRCxDQUFELENBQ0tXLFdBREwsQ0FDaUIsZUFEakIsRUFFS0MsUUFGTCxDQUVjLGVBRmQ7QUFHSCxPQUpELE1BSU87QUFDSFosU0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUNLWSxRQURMLENBQ2MsZUFEZCxFQUVLRCxXQUZMLENBRWlCLGVBRmpCO0FBR0g7O0FBQ0RYLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXZCRCxFQXRFd0IsQ0ErRnhCOztBQUNBckIsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sR0FBaEIsQ0FBb0IsRUFBcEIsRUFoR3dCLENBa0d4QjtBQUNBOztBQUNBTixLQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZbUIsU0FBWixDQUFzQnJCLFVBQXRCLEVBcEd3QixDQXNHeEI7O0FBQ0EsUUFBSUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWW1CLFNBQVosQ0FBc0IsUUFBdEIsQ0FBSixFQUFxQztBQUNqQ3BCLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyx1QkFBSixHQUE4QkMsTUFBTSxHQUFHQyxNQUFULEVBQTlCLEdBQWtELEtBQXpEO0FBQ0gsT0FITCxFQUlLQyxXQUpMLENBSWlCLGVBSmpCLEVBS0tDLFFBTEwsQ0FLYyxlQUxkLEVBTUtDLFNBTkwsQ0FNZWIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixDQUFoQixFQUFtQmMsWUFObEM7QUFPSCxLQVJELE1BUU87QUFDSGQsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUNLTSxHQURMLENBQ1MsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDaEIsZUFBT0EsQ0FBQyxHQUFHLHlCQUFKLEdBQWdDQyxNQUFNLEdBQUdDLE1BQVQsRUFBaEMsR0FBb0QsS0FBM0Q7QUFDSCxPQUhMLEVBSUtFLFFBSkwsQ0FJYyxlQUpkLEVBS0tELFdBTEwsQ0FLaUIsZUFMakIsRUFNS0UsU0FOTCxDQU1lYixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLENBQWhCLEVBQW1CYyxZQU5sQztBQU9ILEtBdkh1QixDQTBIeEI7OztBQUNBZCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCdUIsSUFBakIsQ0FBc0J4QixVQUFVLEdBQUcsSUFBbkM7QUFDSCxHQTVIRDs7QUE4SEEsTUFBSXlCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDeEI7QUFDQSxRQUNJQyxTQUFTLEdBQUcsSUFEaEI7QUFHQTtBQUNSO0FBQ0E7O0FBQ1F6QixLQUFDLENBQUMsV0FBRCxDQUFELENBQWVFLEVBQWYsQ0FBa0IsZ0JBQWxCLEVBQW9DLFVBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUMzRDtBQUNBRixXQUFLLENBQUN1QixlQUFOO0FBRUExQixPQUFDLENBQUMsV0FBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsU0FBSixHQUFnQkMsTUFBTSxHQUFHQyxNQUFULEVBQWhCLEdBQW9DLEtBQTNDO0FBQ0gsT0FITCxFQUlLQyxXQUpMLENBSWlCLGVBSmpCLEVBS0tDLFFBTEwsQ0FLYyxlQUxkLEVBTUtDLFNBTkwsQ0FNZWIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlLENBQWYsRUFBa0JjLFlBTmpDO0FBUUgsS0FaRDtBQWFBZCxLQUFDLENBQUMsV0FBRCxDQUFELENBQWVFLEVBQWYsQ0FBa0Isa0JBQWxCLEVBQXNDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEQ7QUFDQUEsV0FBSyxDQUFDdUIsZUFBTjtBQUVBMUIsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUNLTSxHQURMLENBQ1MsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDaEIsZUFBT0EsQ0FBQyxHQUFHLFdBQUosR0FBa0JDLE1BQU0sR0FBR0MsTUFBVCxFQUFsQixHQUFzQyxLQUE3QztBQUNILE9BSEwsRUFJS0UsUUFKTCxDQUljLGVBSmQsRUFLS0QsV0FMTCxDQUtpQixlQUxqQixFQU1LRSxTQU5MLENBTWViLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxDQUFmLEVBQWtCYyxZQU5qQztBQU9ILEtBWEQ7QUFhQTtBQUNSO0FBQ0E7O0FBQ1FkLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY21CLEtBQWQsQ0FBb0IsWUFBVztBQUMzQm5CLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FDS29CLFNBREwsQ0FDZSxPQURmLEVBRUtkLEdBRkwsQ0FFUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsVUFBSixHQUFpQkMsTUFBTSxHQUFHQyxNQUFULEVBQWpCLEdBQXFDLEtBQTVDO0FBQ0gsT0FKTCxFQUtLRyxTQUxMLENBS2ViLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxDQUFmLEVBQWtCYyxZQUxqQyxFQUQyQixDQVEzQjs7QUFDQSxVQUFJZCxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVvQixTQUFmLENBQXlCLFFBQXpCLENBQUosRUFBd0M7QUFDcENwQixTQUFDLENBQUMsV0FBRCxDQUFELENBQ0tXLFdBREwsQ0FDaUIsZUFEakIsRUFFS0MsUUFGTCxDQUVjLGVBRmQ7QUFHSCxPQUpELE1BSU87QUFDSFosU0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUNLWSxRQURMLENBQ2MsZUFEZCxFQUVLRCxXQUZMLENBRWlCLGVBRmpCO0FBR0g7O0FBQ0RYLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXBCRDtBQXFCQXJCLEtBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JtQixLQUFsQixDQUF3QixZQUFXO0FBQy9CbkIsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUNLTSxHQURMLENBQ1MsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDaEIsZUFBT0EsQ0FBQyxHQUFHLGFBQUosR0FBb0JSLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZW9CLFNBQWYsQ0FBeUIsa0JBQXpCLENBQXBCLEdBQW1FLEtBQTFFO0FBQ0gsT0FITCxFQUlLUCxTQUpMLENBSWViLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxDQUFmLEVBQWtCYyxZQUpqQztBQUtBZCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixJQUFSO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FSRDtBQVNBckIsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm1CLEtBQW5CLENBQXlCLFlBQVc7QUFDaENuQixPQUFDLENBQUMsV0FBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsY0FBSixHQUFxQlIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlb0IsU0FBZixDQUF5QixtQkFBekIsQ0FBckIsR0FBcUUsS0FBNUU7QUFDSCxPQUhMLEVBSUtQLFNBSkwsQ0FJZWIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlLENBQWYsRUFBa0JjLFlBSmpDO0FBS0FkLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLElBQVI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQVJEO0FBU0FyQixLQUFDLENBQUMsVUFBRCxDQUFELENBQWNtQixLQUFkLENBQW9CLFlBQVc7QUFDM0JuQixPQUFDLENBQUMsV0FBRCxDQUFELENBQ0tNLEdBREwsQ0FDUyxVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNoQixlQUFPQSxDQUFDLEdBQUcsU0FBSixJQUFpQlIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlb0IsU0FBZixDQUF5QixRQUF6QixJQUFxQyxNQUFyQyxHQUE4QyxRQUEvRCxJQUEyRSxLQUFsRjtBQUNILE9BSEwsRUFJS1AsU0FKTCxDQUllYixDQUFDLENBQUMsV0FBRCxDQUFELENBQWUsQ0FBZixFQUFrQmMsWUFKakM7QUFLQWQsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUIsSUFBUjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBUkQsRUE1RXdCLENBc0Z4Qjs7QUFDQXJCLEtBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZU0sR0FBZixDQUFtQixFQUFuQixFQUF1QmMsU0FBdkIsQ0FBaUNLLFNBQWpDLEVBdkZ3QixDQXlGeEI7O0FBQ0EsUUFBSXpCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZW9CLFNBQWYsQ0FBeUIsUUFBekIsQ0FBSixFQUF3QztBQUNwQ3BCLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyxpQkFBSixHQUF3QkMsTUFBTSxHQUFHQyxNQUFULEVBQXhCLEdBQTRDLEtBQW5EO0FBQ0gsT0FITCxFQUlLQyxXQUpMLENBSWlCLGVBSmpCLEVBS0tDLFFBTEwsQ0FLYyxlQUxkLEVBTUtDLFNBTkwsQ0FNZWIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlLENBQWYsRUFBa0JjLFlBTmpDO0FBT0gsS0FSRCxNQVFPO0FBQ0hkLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FDS00sR0FETCxDQUNTLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hCLGVBQU9BLENBQUMsR0FBRyxtQkFBSixHQUEwQkMsTUFBTSxHQUFHQyxNQUFULEVBQTFCLEdBQThDLEtBQXJEO0FBQ0gsT0FITCxFQUlLRSxRQUpMLENBSWMsZUFKZCxFQUtLRCxXQUxMLENBS2lCLGVBTGpCLEVBTUtFLFNBTkwsQ0FNZWIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlLENBQWYsRUFBa0JjLFlBTmpDO0FBT0gsS0ExR3VCLENBNEd4Qjs7O0FBQ0FkLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1QixJQUFoQixDQUFxQkUsU0FBUyxHQUFHLElBQWpDO0FBRUgsR0EvR0Q7O0FBaUhBLFNBQU87QUFDSDtBQUNBRSxRQUFJLEVBQUUsZ0JBQVc7QUFDYjdCLGdCQUFVOztBQUNWMEIsZ0JBQVU7QUFDYjtBQUxFLEdBQVA7QUFPSCxDQXZQcUIsRUFBdEI7O0FBeVBBSSxNQUFNLENBQUMzQixRQUFELENBQU4sQ0FBaUI0QixLQUFqQixDQUF1QixZQUFXO0FBQzlCaEMsaUJBQWUsQ0FBQzhCLElBQWhCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3Jlc291cmNlcy9tZXRyb25pYy9qcy9wYWdlcy9mZWF0dXJlcy9taXNjZWxsYW5lb3VzL2lkbGUtdGltZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIEtUSWRsZVRpbWVyRGVtbyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfaW5pdERlbW8xID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vRGVmaW5lIGRlZmF1bHRcbiAgICAgICAgdmFyIGRvY1RpbWVvdXQgPSA1MDAwO1xuXG4gICAgICAgIC8qXG4gICAgICAgIEhhbmRsZSByYWlzZWQgaWRsZS9hY3RpdmUgZXZlbnRzXG4gICAgICAgICovXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiaWRsZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oZXZlbnQsIGVsZW0sIG9iaikge1xuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIklkbGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwiYWN0aXZlLmlkbGVUaW1lclwiLCBmdW5jdGlvbihldmVudCwgZWxlbSwgb2JqLCBlKSB7XG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiQWN0aXZlIFtcIiArIGUudHlwZSArIFwiXSBbXCIgKyBlLnRhcmdldC5ub2RlTmFtZSArIFwiXSBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICBIYW5kbGUgYnV0dG9uIGV2ZW50c1xuICAgICAgICAqL1xuICAgICAgICAkKFwiI2J0UGF1c2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJwYXVzZVwiKTtcbiAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJQYXVzZWQgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZG9jU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIjYnRSZXN1bWVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJyZXN1bWVcIik7XG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiUmVzdW1lZCBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIiNidEVsYXBzZWRcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiRWxhcHNlZCAoc2luY2UgYmVjb21pbmcgYWN0aXZlKTogXCIgKyAkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJnZXRFbGFwc2VkVGltZVwiKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiI2J0RGVzdHJveVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmlkbGVUaW1lcihcImRlc3Ryb3lcIik7XG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiRGVzdHJveWVkOiBAIFwiICsgbW9tZW50KCkuZm9ybWF0KCkgKyBcIiBcXG5cIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC13YXJuaW5nXCIpXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiI2J0SW5pdFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGZvciBkZW1vIHB1cnBvc2VzIHNob3cgaW5pdCB3aXRoIGp1c3Qgb2JqZWN0XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoe1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGRvY1RpbWVvdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChcIiNkb2NTdGF0dXNcIilcbiAgICAgICAgICAgICAgICAudmFsKGZ1bmN0aW9uKGksIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgKyBcIkluaXQ6IEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcCgkKFwiI2RvY1N0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuXG4gICAgICAgICAgICAvL0FwcGx5IGNsYXNzZXMgZm9yIGRlZmF1bHQgc3RhdGVcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5pZGxlVGltZXIoXCJpc0lkbGVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoXCIjZG9jU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtd2FybmluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0NsZWFyIG9sZCBzdGF0dXNlc1xuICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKS52YWwoXCJcIik7XG5cbiAgICAgICAgLy9TdGFydCB0aW1lb3V0LCBwYXNzaW5nIG5vIG9wdGlvbnNcbiAgICAgICAgLy9TYW1lIGFzICQuaWRsZVRpbWVyKGRvY1RpbWVvdXQsIGRvY09wdGlvbnMpO1xuICAgICAgICAkKGRvY3VtZW50KS5pZGxlVGltZXIoZG9jVGltZW91dCk7XG5cbiAgICAgICAgLy9Gb3IgZGVtbyBwdXJwb3Nlcywgc3R5bGUgYmFzZWQgb24gaW5pdGlhbCBzdGF0ZVxuICAgICAgICBpZiAoJChkb2N1bWVudCkuaWRsZVRpbWVyKFwiaXNJZGxlXCIpKSB7XG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdGlhbCBJZGxlIFN0YXRlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZG9jU3RhdHVzXCIpWzBdLnNjcm9sbEhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RvY1N0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdGlhbCBBY3RpdmUgU3RhdGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNkb2NTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9Gb3IgZGVtbyBwdXJwb3NlcywgZGlzcGxheSB0aGUgYWN0dWFsIHRpbWVvdXQgb24gdGhlIHBhZ2VcbiAgICAgICAgJChcIiNkb2NUaW1lb3V0XCIpLnRleHQoZG9jVGltZW91dCAvIDEwMDApO1xuICAgIH1cblxuICAgIHZhciBfaW5pdERlbW8yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vRGVmaW5lIHRleHRhcmVhIHNldHRpbmdzXG4gICAgICAgIHZhclxuICAgICAgICAgICAgdGFUaW1lb3V0ID0gMzAwMDtcblxuICAgICAgICAvKlxuICAgICAgICBIYW5kbGUgcmFpc2VkIGlkbGUvYWN0aXZlIGV2ZW50c1xuICAgICAgICAqL1xuICAgICAgICAkKFwiI2VsU3RhdHVzXCIpLm9uKFwiaWRsZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oZXZlbnQsIGVsZW0sIG9iaikge1xuICAgICAgICAgICAgLy9JZiB5b3UgZG9udCBzdG9wIHByb3BhZ2F0aW9uIGl0IHdpbGwgYnViYmxlIHVwIHRvIGRvY3VtZW50IGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJJZGxlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcblxuICAgICAgICB9KTtcbiAgICAgICAgJChcIiNlbFN0YXR1c1wiKS5vbihcImFjdGl2ZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIC8vSWYgeW91IGRvbnQgc3RvcCBwcm9wYWdhdGlvbiBpdCB3aWxsIGJ1YmJsZSB1cCB0byBkb2N1bWVudCBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiQWN0aXZlIEAgXCIgKyBtb21lbnQoKS5mb3JtYXQoKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIilcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgSGFuZGxlIGJ1dHRvbiBldmVudHNcbiAgICAgICAgKi9cbiAgICAgICAgJChcIiNidFJlc2V0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC5pZGxlVGltZXIoXCJyZXNldFwiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiUmVzZXQgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcblxuICAgICAgICAgICAgLy9BcHBseSBjbGFzc2VzIGZvciBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICBpZiAoJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJpc0lkbGVcIikpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXdhcm5pbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLmJsdXIoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIjYnRSZW1haW5pbmdcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJSZW1haW5pbmc6IFwiICsgJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJnZXRSZW1haW5pbmdUaW1lXCIpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIiNidExhc3RBY3RpdmVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJMYXN0QWN0aXZlOiBcIiArICQoXCIjZWxTdGF0dXNcIikuaWRsZVRpbWVyKFwiZ2V0TGFzdEFjdGl2ZVRpbWVcIikgKyBcIiBcXG5cIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiI2J0U3RhdGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJTdGF0ZTogXCIgKyAoJChcIiNlbFN0YXR1c1wiKS5pZGxlVGltZXIoXCJpc0lkbGVcIikgPyBcImlkbGVcIiA6IFwiYWN0aXZlXCIpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2Nyb2xsVG9wKCQoXCIjZWxTdGF0dXNcIilbMF0uc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgICQodGhpcykuYmx1cigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0NsZWFyIHZhbHVlIGlmIHRoZXJlIHdhcyBvbmUgY2FjaGVkICYgc3RhcnQgdGltZVxuICAgICAgICAkKFwiI2VsU3RhdHVzXCIpLnZhbChcIlwiKS5pZGxlVGltZXIodGFUaW1lb3V0KTtcblxuICAgICAgICAvL0ZvciBkZW1vIHB1cnBvc2VzLCBzaG93IGluaXRpYWwgc3RhdGVcbiAgICAgICAgaWYgKCQoXCIjZWxTdGF0dXNcIikuaWRsZVRpbWVyKFwiaXNJZGxlXCIpKSB7XG4gICAgICAgICAgICAkKFwiI2VsU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgLnZhbChmdW5jdGlvbihpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ICsgXCJJbml0aWFsIElkbGUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNlbFN0YXR1c1wiKVxuICAgICAgICAgICAgICAgIC52YWwoZnVuY3Rpb24oaSwgdikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArIFwiSW5pdGlhbCBBY3RpdmUgQCBcIiArIG1vbWVudCgpLmZvcm1hdCgpICsgXCIgXFxuXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtd2FybmluZ1wiKVxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3AoJChcIiNlbFN0YXR1c1wiKVswXS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzcGxheSB0aGUgYWN0dWFsIHRpbWVvdXQgb24gdGhlIHBhZ2VcbiAgICAgICAgJChcIiNlbFRpbWVvdXRcIikudGV4dCh0YVRpbWVvdXQgLyAxMDAwKTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vbWFpbiBmdW5jdGlvbiB0byBpbml0aWF0ZSB0aGUgbW9kdWxlXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX2luaXREZW1vMSgpO1xuICAgICAgICAgICAgX2luaXREZW1vMigpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBLVElkbGVUaW1lckRlbW8uaW5pdCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/features/miscellaneous/idle-timer.js\n");

/***/ }),

/***/ 151:
/*!********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/features/miscellaneous/idle-timer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/vilas/6dfda1d3-f7da-49f0-b3e5-8e8ba6ae4354/metronic/resources/metronic/js/pages/features/miscellaneous/idle-timer.js */"./resources/metronic/js/pages/features/miscellaneous/idle-timer.js");


/***/ })

/******/ });