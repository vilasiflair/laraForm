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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/metronic/js/pages/features/calendar/background-events.js":
/*!****************************************************************************!*\
  !*** ./resources/metronic/js/pages/features/calendar/background-events.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar KTCalendarBackgroundEvents = function () {\n  return {\n    //main function to initiate the module\n    init: function init() {\n      var todayDate = moment().startOf('day');\n      var YM = todayDate.format('YYYY-MM');\n      var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');\n      var TODAY = todayDate.format('YYYY-MM-DD');\n      var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');\n      var calendarEl = document.getElementById('kt_calendar');\n      var calendar = new FullCalendar.Calendar(calendarEl, {\n        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],\n        isRTL: KTUtil.isRTL(),\n        header: {\n          left: 'prev,next today',\n          center: 'title',\n          right: 'dayGridMonth,timeGridWeek,timeGridDay'\n        },\n        height: 800,\n        contentHeight: 780,\n        aspectRatio: 3,\n        // see: https://fullcalendar.io/docs/aspectRatio\n        nowIndicator: true,\n        now: TODAY + 'T09:25:00',\n        // just for demo\n        views: {\n          dayGridMonth: {\n            buttonText: 'month'\n          },\n          timeGridWeek: {\n            buttonText: 'week'\n          },\n          timeGridDay: {\n            buttonText: 'day'\n          }\n        },\n        defaultView: 'dayGridMonth',\n        defaultDate: TODAY,\n        editable: true,\n        eventLimit: true,\n        // allow \"more\" link when too many events\n        navLinks: true,\n        businessHours: true,\n        // display business hours\n        events: [{\n          title: 'All Day Event',\n          start: YM + '-01',\n          description: 'Toto lorem ipsum dolor sit incid idunt ut',\n          className: \"fc-event-danger fc-event-solid-warning\",\n          color: KTApp.getSettings()['colors']['theme']['base']['info'],\n          rendering: 'background'\n        }, {\n          title: 'Reporting',\n          start: YM + '-14T13:30:00',\n          description: 'Lorem ipsum dolor incid idunt ut labore',\n          end: YM + '-14',\n          className: \"fc-event-success\"\n        }, {\n          title: 'Company Trip',\n          start: YM + '-02',\n          description: 'Lorem ipsum dolor sit tempor incid',\n          end: YM + '-03',\n          className: \"fc-event-primary\"\n        }, {\n          title: 'ICT Expo 2017 - Product Release',\n          start: YM + '-03',\n          description: 'Lorem ipsum dolor sit tempor inci',\n          end: YM + '-05',\n          className: \"fc-event-light fc-event-solid-primary\"\n        }, {\n          title: 'Dinner',\n          start: YM + '-12',\n          description: 'Lorem ipsum dolor sit amet, conse ctetur',\n          end: YM + '-10',\n          color: KTApp.getSettings()['colors']['theme']['base']['info'],\n          rendering: 'background'\n        }, {\n          id: 999,\n          title: 'Repeating Event',\n          start: YM + '-09T16:00:00',\n          description: 'Lorem ipsum dolor sit ncididunt ut labore',\n          className: \"fc-event-danger\"\n        }, {\n          id: 1000,\n          title: 'Repeating Event',\n          description: 'Lorem ipsum dolor sit amet, labore',\n          start: YM + '-16T16:00:00',\n          color: KTApp.getSettings()['colors']['theme']['base']['warning'],\n          rendering: 'background'\n        }, {\n          title: 'Conference',\n          start: YESTERDAY,\n          end: TOMORROW,\n          description: 'Lorem ipsum dolor eius mod tempor labore',\n          className: \"fc-event-primary\"\n        }, {\n          title: 'Meeting',\n          start: TODAY + 'T10:30:00',\n          end: TODAY + 'T12:30:00',\n          description: 'Lorem ipsum dolor eiu idunt ut labore',\n          color: KTApp.getSettings()['colors']['theme']['base']['danger'],\n          rendering: 'background'\n        }, {\n          title: 'Lunch',\n          start: TODAY + 'T12:00:00',\n          className: \"fc-event-info\",\n          description: 'Lorem ipsum dolor sit amet, ut labore'\n        }, {\n          title: 'Meeting',\n          start: TODAY + 'T14:30:00',\n          className: \"fc-event-warning\",\n          description: 'Lorem ipsum conse ctetur adipi scing'\n        }, {\n          title: 'Happy Hour',\n          start: TODAY + 'T17:30:00',\n          className: \"fc-event-info\",\n          description: 'Lorem ipsum dolor sit amet, conse ctetur',\n          color: KTApp.getSettings()['colors']['theme']['base']['danger'],\n          rendering: 'background'\n        }, {\n          title: 'Dinner',\n          start: TOMORROW + 'T05:00:00',\n          className: \"fc-event-solid-danger fc-event-light\",\n          description: 'Lorem ipsum dolor sit ctetur adipi scing'\n        }, {\n          title: 'Birthday Party',\n          start: TOMORROW + 'T07:00:00',\n          className: \"fc-event-primary\",\n          description: 'Lorem ipsum dolor sit amet, scing',\n          color: KTApp.getSettings()['colors']['theme']['base']['danger'],\n          rendering: 'background'\n        }, {\n          title: 'Click for Google',\n          url: 'http://google.com/',\n          start: YM + '-28',\n          className: \"fc-event-solid-info fc-event-light\",\n          description: 'Lorem ipsum dolor sit amet, labore',\n          color: KTApp.getSettings()['colors']['theme']['base']['success'],\n          rendering: 'background'\n        }],\n        eventRender: function eventRender(info) {\n          var element = $(info.el);\n\n          if (info.event.extendedProps && info.event.extendedProps.description) {\n            if (element.hasClass('fc-day-grid-event')) {\n              element.data('content', info.event.extendedProps.description);\n              element.data('placement', 'top');\n              KTApp.initPopover(element);\n            } else if (element.hasClass('fc-time-grid-event')) {\n              element.find('.fc-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>');\n            } else if (element.find('.fc-list-item-title').lenght !== 0) {\n              element.find('.fc-list-item-title').append('<div class=\"fc-description\">' + info.event.extendedProps.description + '</div>');\n            }\n          }\n        }\n      });\n      calendar.render();\n    }\n  };\n}();\n\njQuery(document).ready(function () {\n  KTCalendarBackgroundEvents.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvY2FsZW5kYXIvYmFja2dyb3VuZC1ldmVudHMuanM/MmU0MyJdLCJuYW1lcyI6WyJLVENhbGVuZGFyQmFja2dyb3VuZEV2ZW50cyIsImluaXQiLCJ0b2RheURhdGUiLCJtb21lbnQiLCJzdGFydE9mIiwiWU0iLCJmb3JtYXQiLCJZRVNURVJEQVkiLCJjbG9uZSIsInN1YnRyYWN0IiwiVE9EQVkiLCJUT01PUlJPVyIsImFkZCIsImNhbGVuZGFyRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FsZW5kYXIiLCJGdWxsQ2FsZW5kYXIiLCJDYWxlbmRhciIsInBsdWdpbnMiLCJpc1JUTCIsIktUVXRpbCIsImhlYWRlciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJhc3BlY3RSYXRpbyIsIm5vd0luZGljYXRvciIsIm5vdyIsInZpZXdzIiwiZGF5R3JpZE1vbnRoIiwiYnV0dG9uVGV4dCIsInRpbWVHcmlkV2VlayIsInRpbWVHcmlkRGF5IiwiZGVmYXVsdFZpZXciLCJkZWZhdWx0RGF0ZSIsImVkaXRhYmxlIiwiZXZlbnRMaW1pdCIsIm5hdkxpbmtzIiwiYnVzaW5lc3NIb3VycyIsImV2ZW50cyIsInRpdGxlIiwic3RhcnQiLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZSIsImNvbG9yIiwiS1RBcHAiLCJnZXRTZXR0aW5ncyIsInJlbmRlcmluZyIsImVuZCIsImlkIiwidXJsIiwiZXZlbnRSZW5kZXIiLCJpbmZvIiwiZWxlbWVudCIsIiQiLCJlbCIsImV2ZW50IiwiZXh0ZW5kZWRQcm9wcyIsImhhc0NsYXNzIiwiZGF0YSIsImluaXRQb3BvdmVyIiwiZmluZCIsImFwcGVuZCIsImxlbmdodCIsInJlbmRlciIsImpRdWVyeSIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJQSwwQkFBMEIsR0FBRyxZ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LEVBQW9DRSxNQUFwQyxLQUErQyxDQUFuRCxFQUFzRDtBQUN6RFYscUJBQU8sQ0FBQ1EsSUFBUixDQUFhLHFCQUFiLEVBQW9DQyxNQUFwQyxDQUEyQyxpQ0FBaUNWLElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxhQUFYLENBQXlCZixXQUExRCxHQUF3RSxRQUFuSDtBQUNIO0FBQ0o7QUFDSjtBQTdKZ0QsT0FBdEMsQ0FBZjtBQWdLQTdCLGNBQVEsQ0FBQ21ELE1BQVQ7QUFDSDtBQTNLRSxHQUFQO0FBNktILENBL0tnQyxFQUFqQzs7QUFpTEFDLE1BQU0sQ0FBQ3RELFFBQUQsQ0FBTixDQUFpQnVELEtBQWpCLENBQXVCLFlBQVc7QUFDOUJyRSw0QkFBMEIsQ0FBQ0MsSUFBM0I7QUFDSCxDQUZEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2ZlYXR1cmVzL2NhbGVuZGFyL2JhY2tncm91bmQtZXZlbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLVENhbGVuZGFyQmFja2dyb3VuZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9tYWluIGZ1bmN0aW9uIHRvIGluaXRpYXRlIHRoZSBtb2R1bGVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdG9kYXlEYXRlID0gbW9tZW50KCkuc3RhcnRPZignZGF5Jyk7XG4gICAgICAgICAgICB2YXIgWU0gPSB0b2RheURhdGUuZm9ybWF0KCdZWVlZLU1NJyk7XG4gICAgICAgICAgICB2YXIgWUVTVEVSREFZID0gdG9kYXlEYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgdmFyIFRPREFZID0gdG9kYXlEYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgdmFyIFRPTU9SUk9XID0gdG9kYXlEYXRlLmNsb25lKCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcblxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2FsZW5kYXInKTtcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFsgJ2ludGVyYWN0aW9uJywgJ2RheUdyaWQnLCAndGltZUdyaWQnLCAnbGlzdCcgXSxcblxuICAgICAgICAgICAgICAgIGlzUlRMOiBLVFV0aWwuaXNSVEwoKSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwMCxcbiAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0OiA3ODAsXG4gICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDMsICAvLyBzZWU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RvY3MvYXNwZWN0UmF0aW9cblxuICAgICAgICAgICAgICAgIG5vd0luZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBub3c6IFRPREFZICsgJ1QwOToyNTowMCcsIC8vIGp1c3QgZm9yIGRlbW9cblxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRheUdyaWRNb250aDogeyBidXR0b25UZXh0OiAnbW9udGgnIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpbWVHcmlkV2VlazogeyBidXR0b25UZXh0OiAnd2VlaycgfSxcbiAgICAgICAgICAgICAgICAgICAgdGltZUdyaWREYXk6IHsgYnV0dG9uVGV4dDogJ2RheScgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmlldzogJ2RheUdyaWRNb250aCcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IFRPREFZLFxuXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZXZlbnRMaW1pdDogdHJ1ZSwgLy8gYWxsb3cgXCJtb3JlXCIgbGluayB3aGVuIHRvbyBtYW55IGV2ZW50c1xuICAgICAgICAgICAgICAgIG5hdkxpbmtzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJ1c2luZXNzSG91cnM6IHRydWUsIC8vIGRpc3BsYXkgYnVzaW5lc3MgaG91cnNcbiAgICAgICAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBbGwgRGF5IEV2ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUb3RvIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBpbmNpZCBpZHVudCB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtZGFuZ2VyIGZjLWV2ZW50LXNvbGlkLXdhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydpbmZvJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmc6ICdiYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcG9ydGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE0VDEzOjMwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgaW5jaWQgaWR1bnQgdXQgbGFib3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTE0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55IFRyaXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCB0ZW1wb3IgaW5jaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBZTSArICctMDMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0lDVCBFeHBvIDIwMTcgLSBQcm9kdWN0IFJlbGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wMycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCB0ZW1wb3IgaW5jaScsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0wNScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtbGlnaHQgZmMtZXZlbnQtc29saWQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMTInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2UgY3RldHVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTEwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWydpbmZvJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmc6ICdiYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogOTk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBlYXRpbmcgRXZlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wOVQxNjowMDowMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBuY2lkaWR1bnQgdXQgbGFib3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVwZWF0aW5nIEV2ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGxhYm9yZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE2VDE2OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBLVEFwcC5nZXRTZXR0aW5ncygpWydjb2xvcnMnXVsndGhlbWUnXVsnYmFzZSddWyd3YXJuaW5nJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmc6ICdiYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZlcmVuY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlFU1RFUkRBWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogVE9NT1JST1csXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIGVpdXMgbW9kIHRlbXBvciBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lZXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPREFZICsgJ1QxMDozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPREFZICsgJ1QxMjozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIGVpdSBpZHVudCB1dCBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEtUQXBwLmdldFNldHRpbmdzKClbJ2NvbG9ycyddWyd0aGVtZSddWydiYXNlJ11bJ2RhbmdlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyaW5nOiAnYmFja2dyb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMdW5jaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9EQVkgKyAnVDEyOjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCB1dCBsYWJvcmUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9EQVkgKyAnVDE0OjMwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC13YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGNvbnNlIGN0ZXR1ciBhZGlwaSBzY2luZydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIYXBweSBIb3VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTc6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlIGN0ZXR1cicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnZGFuZ2VyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmc6ICdiYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9NT1JST1cgKyAnVDA1OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1zb2xpZC1kYW5nZXIgZmMtZXZlbnQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGN0ZXR1ciBhZGlwaSBzY2luZydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCaXJ0aGRheSBQYXJ0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9NT1JST1cgKyAnVDA3OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBzY2luZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnZGFuZ2VyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmc6ICdiYWNrZ3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NsaWNrIGZvciBHb29nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2dvb2dsZS5jb20vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMjgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXNvbGlkLWluZm8gZmMtZXZlbnQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGxhYm9yZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogS1RBcHAuZ2V0U2V0dGluZ3MoKVsnY29sb3JzJ11bJ3RoZW1lJ11bJ2Jhc2UnXVsnc3VjY2VzcyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyaW5nOiAnYmFja2dyb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgICAgICBldmVudFJlbmRlcjogZnVuY3Rpb24oaW5mbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQoaW5mby5lbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcyAmJiBpbmZvLmV2ZW50LmV4dGVuZGVkUHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdmYy1kYXktZ3JpZC1ldmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhKCdjb250ZW50JywgaW5mby5ldmVudC5leHRlbmRlZFByb3BzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcsICd0b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLVEFwcC5pbml0UG9wb3ZlcihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcygnZmMtdGltZS1ncmlkLWV2ZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5mYy10aXRsZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZjLWRlc2NyaXB0aW9uXCI+JyArIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbiArICc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5maW5kKCcuZmMtbGlzdC1pdGVtLXRpdGxlJykubGVuZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZmMtbGlzdC1pdGVtLXRpdGxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZmMtZGVzY3JpcHRpb25cIj4nICsgaW5mby5ldmVudC5leHRlbmRlZFByb3BzLmRlc2NyaXB0aW9uICsgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhbGVuZGFyLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBLVENhbGVuZGFyQmFja2dyb3VuZEV2ZW50cy5pbml0KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/features/calendar/background-events.js\n");

/***/ }),

/***/ 129:
/*!**********************************************************************************!*\
  !*** multi ./resources/metronic/js/pages/features/calendar/background-events.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/vilas/6dfda1d3-f7da-49f0-b3e5-8e8ba6ae4354/metronic/resources/metronic/js/pages/features/calendar/background-events.js */"./resources/metronic/js/pages/features/calendar/background-events.js");


/***/ })

/******/ });