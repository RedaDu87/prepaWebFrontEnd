function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guard/authentication.guard */
    "./src/app/guard/authentication.guard.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'user/management',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
      canActivate: [_guard_authentication_guard__WEBPACK_IMPORTED_MODULE_5__["AuthenticationGuard"]]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "notifier-container");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/authentication.service */
    "./src/app/service/authentication.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./interceptor/auth.interceptor */
    "./src/app/interceptor/auth.interceptor.ts");
    /* harmony import */


    var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guard/authentication.guard */
    "./src/app/guard/authentication.guard.ts");
    /* harmony import */


    var _notification_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./notification.module */
    "./src/app/notification.module.ts");
    /* harmony import */


    var _service_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./service/notification.service */
    "./src/app/service/notification.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_service_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"], _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_9__["AuthenticationGuard"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _notification_module__WEBPACK_IMPORTED_MODULE_10__["NotificationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _notification_module__WEBPACK_IMPORTED_MODULE_10__["NotificationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _notification_module__WEBPACK_IMPORTED_MODULE_10__["NotificationModule"]],
          providers: [_service_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"], _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_9__["AuthenticationGuard"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/enum/header-type.enum.ts":
  /*!******************************************!*\
    !*** ./src/app/enum/header-type.enum.ts ***!
    \******************************************/

  /*! exports provided: HeaderType */

  /***/
  function srcAppEnumHeaderTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderType", function () {
      return HeaderType;
    });

    var HeaderType;

    (function (HeaderType) {
      HeaderType["AUTHORIZATION"] = "Authorization";
      HeaderType["JWT_TOKEN"] = "Jwt-Token";
    })(HeaderType || (HeaderType = {}));
    /***/

  },

  /***/
  "./src/app/enum/notification-type.enum.ts":
  /*!************************************************!*\
    !*** ./src/app/enum/notification-type.enum.ts ***!
    \************************************************/

  /*! exports provided: NotificationType */

  /***/
  function srcAppEnumNotificationTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationType", function () {
      return NotificationType;
    });

    var NotificationType;

    (function (NotificationType) {
      NotificationType["DEFAULT"] = "default";
      NotificationType["SUCCESS"] = "success";
      NotificationType["ERROR"] = "error";
      NotificationType["INFO"] = "info";
      NotificationType["WARNING"] = "warning";
    })(NotificationType || (NotificationType = {}));
    /***/

  },

  /***/
  "./src/app/enum/role.enum.ts":
  /*!***********************************!*\
    !*** ./src/app/enum/role.enum.ts ***!
    \***********************************/

  /*! exports provided: Role */

  /***/
  function srcAppEnumRoleEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });

    var Role;

    (function (Role) {
      Role["SUPER_ADMIN"] = "ROLE_SUPER_ADMIN";
      Role["ADMIN"] = "ROLE_ADMIN";
      Role["MANAGER"] = "ROLE_MANAGER";
      Role["USER"] = "ROLE_USER";
      Role["HR"] = "ROLE_HR";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "./src/app/guard/authentication.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/guard/authentication.guard.ts ***!
    \***********************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppGuardAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enum/notification-type.enum */
    "./src/app/enum/notification-type.enum.ts");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/service/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/notification.service */
    "./src/app/service/notification.service.ts");

    var AuthenticationGuard = /*#__PURE__*/function () {
      function AuthenticationGuard(authenticationService, router, notificationService) {
        _classCallCheck(this, AuthenticationGuard);

        this.authenticationService = authenticationService;
        this.router = router;
        this.notificationService = notificationService;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return this.isUserLoggedIn();
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          if (this.authenticationService.isUserLoggedIn()) {
            return true;
          }

          this.router.navigate(['/login']);
          this.notificationService.notify(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].ERROR, "You need to log in to access this page");
          return false;
        }
      }]);

      return AuthenticationGuard;
    }();

    AuthenticationGuard.??fac = function AuthenticationGuard_Factory(t) {
      return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
    };

    AuthenticationGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthenticationGuard,
      factory: AuthenticationGuard.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/auth.interceptor.ts":
  /*!*************************************************!*\
    !*** ./src/app/interceptor/auth.interceptor.ts ***!
    \*************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/service/authentication.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(authenticationService) {
        _classCallCheck(this, AuthInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(httpRequest, httpHandler) {
          if (httpRequest.url.includes("".concat(this.authenticationService.host, "/user/login"))) {
            return httpHandler.handle(httpRequest);
          }

          if (httpRequest.url.includes("".concat(this.authenticationService.host, "/user/register"))) {
            return httpHandler.handle(httpRequest);
          }

          this.authenticationService.loadToken();
          var token = this.authenticationService.getToken();
          var request = httpRequest.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(token)
            }
          });
          return httpHandler.handle(request);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.??fac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    AuthInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enum/notification-type.enum */
    "./src/app/enum/notification-type.enum.ts");
    /* harmony import */


    var _enum_header_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../enum/header-type.enum */
    "./src/app/enum/header-type.enum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/service/authentication.service.ts");
    /* harmony import */


    var _service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/notification.service */
    "./src/app/service/notification.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a password.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_i_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 27);
      }
    }

    function LoginComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function LoginComponent_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authenticationService, notificationService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
        this.subscriptions = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authenticationService.isUserLoggedIn()) {
            this.router.navigateByUrl('/user/management');
          } else {
            this.router.navigateByUrl('/login');
          }
        }
      }, {
        key: "onLogin",
        value: function onLogin(user) {
          var _this = this;

          this.showLoading = true;
          this.subscriptions.push(this.authenticationService.login(user).subscribe(function (response) {
            var token = response.headers.get(_enum_header_type_enum__WEBPACK_IMPORTED_MODULE_2__["HeaderType"].JWT_TOKEN);

            _this.authenticationService.saveToken(token);

            _this.authenticationService.addUserToLocalCache(response.body);

            _this.router.navigateByUrl('/user/management');

            _this.showLoading = false;
          }, function (errorResponse) {
            _this.sendErrorNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].ERROR, errorResponse.error.message);

            _this.showLoading = false;
          }));
        }
      }, {
        key: "sendErrorNotification",
        value: function sendErrorNotification(notificationType, message) {
          if (message) {
            this.notificationService.notify(notificationType, message);
          } else {
            this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 35,
      vars: 6,
      consts: [[1, "container", 2, "margin-top", "100px"], [1, "d-flex", "justify-content-center", "h-50"], [1, "user_card"], [1, "d-flex", "justify-content-center"], [2, "margin-top", "10px", "margin-bottom", "-90px"], [1, "d-flex", "justify-content-center", "form_container"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "input-group", "mb-3"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "name", "username", "placeholder", "Username", "ngModel", "", "required", "", 1, "form-control"], ["usernameInput", "ngModel"], ["class", "help-block", "style", "color:red;", 4, "ngIf"], [1, "input-group", "mb-2"], [1, "fas", "fa-key"], ["type", "password", "name", "password", "placeholder", "Password", "ngModel", "", "required", "", 1, "form-control"], ["passwordInput", "ngModel"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["type", "submit", "name", "button", 1, "btn", "login_btn", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/register", 1, "ml-2", 2, "color", "#2C3E50"], [1, "help-block", 2, "color", "red"], [1, "fas", "fa-spinner", "fa-spin"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "User Management Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

            return ctx.onLogin(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, LoginComponent_span_16_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, LoginComponent_span_23_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, LoginComponent_i_26_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, LoginComponent_span_28_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, LoginComponent_span_29_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.invalid || ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.showLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["Coded[_ngcontent-%COMP%]   with[_ngcontent-%COMP%]   love[_ngcontent-%COMP%]   by[_ngcontent-%COMP%]   Mutiullah[_ngcontent-%COMP%]   Samim\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    background: #60a3bc !important;\r\n}\r\n.user_card[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    width: 600px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    background: #afbfd8;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0a, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-radius: 5px;\r\n\r\n}\r\n.brand_logo_container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 170px;\r\n    width: 170px;\r\n    top: -75px;\r\n    border-radius: 50%;\r\n    background: #60a3bc;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.brand_logo[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    width: 150px;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.form_container[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n}\r\n.login_btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #1B4F72!important;\r\n    color: white !important;\r\n}\r\n.login_btn[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    outline: 0px !important;\r\n}\r\n.login_container[_ngcontent-%COMP%] {\r\n    padding: 0 2rem;\r\n}\r\n.input-group-text[_ngcontent-%COMP%] {\r\n    background: #1B4F72!important;\r\n    color: white !important;\r\n    border: 0 !important;\r\n    border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    outline: 0px !important;\r\n}\r\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\r\n    background-color: #1B4F72!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLHFGQUFxRjtJQUNyRixpRkFBaUY7SUFDakYsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7QUFDakQ7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQ29kZWQgd2l0aCBsb3ZlIGJ5IE11dGl1bGxhaCBTYW1pbVxyXG5ib2R5LFxyXG5odG1sIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjBhM2JjICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXJfY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWZiZmQ4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDBhLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICB0b3A6IC03NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzYwYTNiYztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJyYW5kX2xvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubG9naW5fYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzFCNEY3MiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5fYnRuOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dpbl9jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG59XHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICMxQjRGNzIhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfdXNlcixcclxuLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI0RjcyIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/file-upload.status.ts":
  /*!*********************************************!*\
    !*** ./src/app/model/file-upload.status.ts ***!
    \*********************************************/

  /*! exports provided: FileUploadStatus */

  /***/
  function srcAppModelFileUploadStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadStatus", function () {
      return FileUploadStatus;
    });

    var FileUploadStatus = function FileUploadStatus() {
      _classCallCheck(this, FileUploadStatus);

      this.status = '';
      this.percentage = 0;
    };
    /***/

  },

  /***/
  "./src/app/model/user.ts":
  /*!*******************************!*\
    !*** ./src/app/model/user.ts ***!
    \*******************************/

  /*! exports provided: User */

  /***/
  function srcAppModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);

      this.userId = '';
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.email = '';
      this.lastLoginDate = null;
      this.lastLoginDateDisplay = null;
      this.joinDate = null;
      this.profileImageUrl = '';
      this.active = false;
      this.notLocked = false;
      this.role = '';
      this.authorities = [];
    };
    /***/

  },

  /***/
  "./src/app/notification.module.ts":
  /*!****************************************!*\
    !*** ./src/app/notification.module.ts ***!
    \****************************************/

  /*! exports provided: NotificationModule */

  /***/
  function srcAppNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationModule", function () {
      return NotificationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var customNotifierOptions = {
      position: {
        horizontal: {
          position: 'left',
          distance: 150
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        },
        overlap: 150
      }
    };

    var NotificationModule = function NotificationModule() {
      _classCallCheck(this, NotificationModule);
    };

    NotificationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: NotificationModule
    });
    NotificationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function NotificationModule_Factory(t) {
        return new (t || NotificationModule)();
      },
      imports: [[angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"].withConfig(customNotifierOptions)], angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NotificationModule, {
        imports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]],
        exports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"].withConfig(customNotifierOptions)],
          exports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enum/notification-type.enum */
    "./src/app/enum/notification-type.enum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/service/authentication.service.ts");
    /* harmony import */


    var _service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/notification.service */
    "./src/app/service/notification.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a first name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a last name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter an email.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_i_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 32);
      }
    }

    function RegisterComponent_span_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_span_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, authenticationService, notificationService) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
        this.subscriptions = [];
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authenticationService.isUserLoggedIn()) {
            this.router.navigateByUrl('/user/management');
          }
        }
      }, {
        key: "onRegister",
        value: function onRegister(user) {
          var _this2 = this;

          this.showLoading = true;
          this.subscriptions.push(this.authenticationService.register(user).subscribe(function (response) {
            _this2.showLoading = false;

            _this2.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].SUCCESS, "A new account was created for ".concat(response.firstName, ".\n          Please check your email for password to log in."));
          }, function (errorResponse) {
            _this2.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].ERROR, errorResponse.error.message);

            _this2.showLoading = false;
          }));
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(notificationType, message) {
          if (message) {
            this.notificationService.notify(notificationType, message);
          } else {
            this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.??fac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]));
    };

    RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 49,
      vars: 8,
      consts: [[1, "container", 2, "margin-top", "100px"], [1, "d-flex", "justify-content-center", "h-50"], [1, "user_card"], [1, "d-flex", "justify-content-center"], [2, "margin-top", "10px", "margin-bottom", "-90px"], [1, "d-flex", "justify-content-center", "form_container"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "input-group", "mb-3"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "name", "firstName", "placeholder", "First name", "required", "", "ngModel", "", 1, "form-control"], ["firstNameInput", "ngModel"], ["class", "help-block", "style", "color:red;", 4, "ngIf"], ["type", "text", "name", "lastName", "placeholder", "Last name", "required", "", "ngModel", "", 1, "form-control"], ["lastNameInput", "ngModel"], [1, "fas", "fa-id-card"], ["type", "text", "name", "username", "placeholder", "Username", "required", "", "ngModel", "", 1, "form-control"], ["usernameInput", "ngModel"], [1, "input-group", "mb-2"], [1, "fas", "fa-envelope"], ["type", "text", "name", "email", "placeholder", "Email", "required", "", "ngModel", "", 1, "form-control"], ["emailInput", "ngModel"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["type", "submit", "name", "button", 1, "btn", "login_btn", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "mt-4"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/login", 1, "ml-2", 2, "color", "#2C3E50"], [1, "help-block", 2, "color", "red"], [1, "fas", "fa-spinner", "fa-spin"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "User Management Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

            return ctx.onRegister(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, RegisterComponent_span_16_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, RegisterComponent_span_23_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, RegisterComponent_span_30_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, RegisterComponent_span_37_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, RegisterComponent_i_40_Template, 1, 0, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, RegisterComponent_span_42_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, RegisterComponent_span_43_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.invalid && _r7.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r0.invalid || ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.showLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["Coded[_ngcontent-%COMP%]   with[_ngcontent-%COMP%]   love[_ngcontent-%COMP%]   by[_ngcontent-%COMP%]   Mutiullah[_ngcontent-%COMP%]   Samim\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    background: #60a3bc !important;\r\n}\r\n.user_card[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    width: 600px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    background: #afbfd8;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0a, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-radius: 5px;\r\n\r\n}\r\n.brand_logo_container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 170px;\r\n    width: 170px;\r\n    top: -75px;\r\n    border-radius: 50%;\r\n    background: #60a3bc;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.brand_logo[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    width: 150px;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.form_container[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n}\r\n.login_btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #1B4F72!important;\r\n    color: white !important;\r\n}\r\n.login_btn[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    outline: 0px !important;\r\n}\r\n.login_container[_ngcontent-%COMP%] {\r\n    padding: 0 2rem;\r\n}\r\n.input-group-text[_ngcontent-%COMP%] {\r\n    background: #1B4F72!important;\r\n    color: white !important;\r\n    border: 0 !important;\r\n    border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none !important;\r\n    outline: 0px !important;\r\n}\r\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\r\n    background-color: #1B4F72!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLHFGQUFxRjtJQUNyRixpRkFBaUY7SUFDakYsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7QUFDakQ7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQ29kZWQgd2l0aCBsb3ZlIGJ5IE11dGl1bGxhaCBTYW1pbVxyXG5ib2R5LFxyXG5odG1sIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjBhM2JjICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXJfY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWZiZmQ4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDBhLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICB0b3A6IC03NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzYwYTNiYztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJyYW5kX2xvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubG9naW5fYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzFCNEY3MiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5fYnRuOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dpbl9jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG59XHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICMxQjRGNzIhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfdXNlcixcclxuLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI0RjcyIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/authentication.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/authentication.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServiceAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(user) {
          return this.http.post("".concat(this.host, "/user/login"), user, {
            observe: 'response'
          });
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post("".concat(this.host, "/user/register"), user);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.token = null;
          this.loggedInUsername = null;
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('users');
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          this.token = token;
          localStorage.setItem('token', token);
        }
      }, {
        key: "addUserToLocalCache",
        value: function addUserToLocalCache(user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      }, {
        key: "getUserFromLocalCache",
        value: function getUserFromLocalCache() {
          return JSON.parse(localStorage.getItem('user'));
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          this.token = localStorage.getItem('token');
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          this.loadToken();

          if (this.token != null && this.token !== '') {
            if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
              if (!this.jwtHelper.isTokenExpired(this.token)) {
                this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
                return true;
              }
            }
          } else {
            this.logOut();
            return false;
          }
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.??fac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthenticationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/notification.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/notification.service.ts ***!
    \*************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServiceNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(notifier) {
        _classCallCheck(this, NotificationService);

        this.notifier = notifier;
      }

      _createClass(NotificationService, [{
        key: "notify",
        value: function notify(type, message) {
          this.notifier.notify(type, message);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.??fac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]));
    };

    NotificationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: NotificationService,
      factory: NotificationService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/user.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/user.service.ts ***!
    \*****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.host = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get("".concat(this.host, "/user/list"));
        }
      }, {
        key: "addUser",
        value: function addUser(formData) {
          return this.http.post("".concat(this.host, "/user/add"), formData);
        }
      }, {
        key: "updateUser",
        value: function updateUser(formData) {
          return this.http.post("".concat(this.host, "/user/update"), formData);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          return this.http.get("".concat(this.host, "/user/resetpassword/").concat(email));
        }
      }, {
        key: "updateProfileImage",
        value: function updateProfileImage(formData) {
          return this.http.post("".concat(this.host, "/user/updateProfileImage"), formData, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(username) {
          return this.http["delete"]("".concat(this.host, "/user/delete/").concat(username));
        }
      }, {
        key: "addUsersToLocalCache",
        value: function addUsersToLocalCache(users) {
          localStorage.setItem('users', JSON.stringify(users));
        }
      }, {
        key: "getUsersFromLocalCache",
        value: function getUsersFromLocalCache() {
          if (localStorage.getItem('users')) {
            return JSON.parse(localStorage.getItem('users'));
          }

          return null;
        }
      }, {
        key: "createUserFormDate",
        value: function createUserFormDate(loggedInUsername, user, profileImage) {
          var formData = new FormData();
          formData.append('currentUsername', loggedInUsername);
          formData.append('firstName', user.firstName);
          formData.append('lastName', user.lastName);
          formData.append('username', user.username);
          formData.append('email', user.email);
          formData.append('role', user.role);
          formData.append('profileImage', profileImage);
          formData.append('isActive', JSON.stringify(user.active));
          formData.append('isNonLocked', JSON.stringify(user.notLocked));
          return formData;
        }
      }]);

      return UserService;
    }();

    UserService.??fac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UserService,
      factory: UserService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/user */
    "./src/app/model/user.ts");
    /* harmony import */


    var _enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enum/notification-type.enum */
    "./src/app/enum/notification-type.enum.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _model_file_upload_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/file-upload.status */
    "./src/app/model/file-upload.status.ts");
    /* harmony import */


    var _enum_role_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../enum/role.enum */
    "./src/app/enum/role.enum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../service/authentication.service */
    "./src/app/service/authentication.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../service/notification.service */
    "./src/app/service/notification.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function UserComponent_small_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var title_r23 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](title_r23);
      }
    }

    function UserComponent_i_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 168);
      }
    }

    function UserComponent_i_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 169);
      }
    }

    function UserComponent_tbody_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r25.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 171);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r27.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r28.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r29.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r30.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r31.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_td_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r32.onSelectUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 172);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r33.onEditUser(appUser_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 173);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_tbody_54_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var appUser_r24 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r34.onDeleteUder(appUser_r24 == null ? null : appUser_r24.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var appUser_r24 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", appUser_r24 == null ? null : appUser_r24.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](appUser_r24 == null ? null : appUser_r24.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](appUser_r24 == null ? null : appUser_r24.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](appUser_r24 == null ? null : appUser_r24.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](appUser_r24 == null ? null : appUser_r24.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](appUser_r24 == null ? null : appUser_r24.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !(appUser_r24 == null ? null : appUser_r24.active));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", appUser_r24 == null ? null : appUser_r24.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r4.isAdmin);
      }
    }

    function UserComponent_i_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 176);
      }
    }

    function UserComponent_span_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UserComponent_span_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Reset Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UserComponent_div_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 177);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 178);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx_r9.fileStatus == null ? null : ctx_r9.fileStatus.percentage, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r9.fileStatus == null ? null : ctx_r9.fileStatus.percentage, "%");
      }
    }

    function UserComponent_div_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Last login: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](3, 1, ctx_r10.user == null ? null : ctx_r10.user.lastLoginDateDisplay, "medium"), "");
      }
    }

    function UserComponent_i_172_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 176);
      }
    }

    function UserComponent_span_174_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UserComponent_span_175_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Save Changes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UserComponent_h6_188_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h6", 179);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var authority_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](authority_r35);
      }
    }

    function UserComponent_div_219_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Last Login: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](3, 1, ctx_r16.selectedUser == null ? null : ctx_r16.selectedUser.lastLoginDateDisplay, "medium"), "");
      }
    }

    function UserComponent_li_236_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 180);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](3, 1, ctx_r17.selectedUser == null ? null : ctx_r17.selectedUser.lastLoginDateDisplay, "medium"), " ");
      }
    }

    function UserComponent_div_276_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "select", 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "option", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "USER");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "option", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "HR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "MANAGER");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "option", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "SUPER ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UserComponent_div_277_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 182);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(router, authenticationService, userService, notificationService) {
        _classCallCheck(this, UserComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.titleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Users');
        this.titleAction$ = this.titleSubject.asObservable();
        this.subscriptions = [];
        this.editUser = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.fileStatus = new _model_file_upload_status__WEBPACK_IMPORTED_MODULE_5__["FileUploadStatus"]();
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authenticationService.getUserFromLocalCache();
          this.getUsers(true);
        }
      }, {
        key: "changeTitle",
        value: function changeTitle(title) {
          this.titleSubject.next(title);
        }
      }, {
        key: "getUsers",
        value: function getUsers(showNotification) {
          var _this3 = this;

          this.refreshing = true;
          this.subscriptions.push(this.userService.getUsers().subscribe(function (response) {
            _this3.userService.addUsersToLocalCache(response);

            _this3.users = response;
            _this3.refreshing = false;

            if (showNotification) {
              _this3.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, "".concat(response.length, " user(s) loaded successfully."));
            }
          }, function (errorResponse) {
            _this3.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, errorResponse.error.message);

            _this3.refreshing = false;
          }));
        }
      }, {
        key: "onSelectUser",
        value: function onSelectUser(selectedUser) {
          this.selectedUser = selectedUser;
          this.clickButton('openUserInfo');
        }
      }, {
        key: "onProfileImageChange",
        value: function onProfileImageChange(fileName, profileImage) {
          this.fileName = fileName;
          this.profileImage = profileImage;
        }
      }, {
        key: "saveNewUser",
        value: function saveNewUser() {
          this.clickButton('new-user-save');
        }
      }, {
        key: "onAddNewUser",
        value: function onAddNewUser(userForm) {
          var _this4 = this;

          var formData = this.userService.createUserFormDate(null, userForm.value, this.profileImage);
          this.subscriptions.push(this.userService.addUser(formData).subscribe(function (response) {
            _this4.clickButton('new-user-close');

            _this4.getUsers(false);

            _this4.fileName = null;
            _this4.profileImage = null;
            userForm.reset();

            _this4.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, "".concat(response.firstName, " ").concat(response.lastName, " added successfully"));
          }, function (errorResponse) {
            _this4.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, errorResponse.error.message);

            _this4.profileImage = null;
          }));
        }
      }, {
        key: "onUpdateUser",
        value: function onUpdateUser() {
          var _this5 = this;

          var formData = this.userService.createUserFormDate(this.currentUsername, this.editUser, this.profileImage);
          this.subscriptions.push(this.userService.updateUser(formData).subscribe(function (response) {
            _this5.clickButton('closeEditUserModalButton');

            _this5.getUsers(false);

            _this5.fileName = null;
            _this5.profileImage = null;

            _this5.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, "".concat(response.firstName, " ").concat(response.lastName, " updated successfully"));
          }, function (errorResponse) {
            _this5.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, errorResponse.error.message);

            _this5.profileImage = null;
          }));
        }
      }, {
        key: "onUpdateCurrentUser",
        value: function onUpdateCurrentUser(user) {
          var _this6 = this;

          this.refreshing = true;
          this.currentUsername = this.authenticationService.getUserFromLocalCache().username;
          var formData = this.userService.createUserFormDate(this.currentUsername, user, this.profileImage);
          this.subscriptions.push(this.userService.updateUser(formData).subscribe(function (response) {
            _this6.authenticationService.addUserToLocalCache(response);

            _this6.getUsers(false);

            _this6.fileName = null;
            _this6.profileImage = null;

            _this6.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, "".concat(response.firstName, " ").concat(response.lastName, " updated successfully"));
          }, function (errorResponse) {
            _this6.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, errorResponse.error.message);

            _this6.refreshing = false;
            _this6.profileImage = null;
          }));
        }
      }, {
        key: "onUpdateProfileImage",
        value: function onUpdateProfileImage() {
          var _this7 = this;

          var formData = new FormData();
          formData.append('username', this.user.username);
          formData.append('profileImage', this.profileImage);
          this.subscriptions.push(this.userService.updateProfileImage(formData).subscribe(function (event) {
            _this7.reportUploadProgress(event);
          }, function (errorResponse) {
            _this7.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, errorResponse.error.message);

            _this7.fileStatus.status = 'done';
          }));
        }
      }, {
        key: "reportUploadProgress",
        value: function reportUploadProgress(event) {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
              this.fileStatus.percentage = Math.round(100 * event.loaded / event.total);
              this.fileStatus.status = 'progress';
              break;

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
              if (event.status === 200) {
                this.user.profileImageUrl = "".concat(event.body.profileImageUrl, "?time=").concat(new Date().getTime());
                this.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, "".concat(event.body.firstName, "'s profile image updated successfully"));
                this.fileStatus.status = 'done';
                break;
              } else {
                this.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, "Unable to upload image. Please try again");
                break;
              }

            default:
              "Finished all processes";
          }
        }
      }, {
        key: "updateProfileImage",
        value: function updateProfileImage() {
          this.clickButton('profile-image-input');
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.authenticationService.logOut();
          this.router.navigate(['/login']);
          this.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, "You've been successfully logged out");
        }
      }, {
        key: "onResetPassword",
        value: function onResetPassword(emailForm) {
          var _this8 = this;

          this.refreshing = true;
          var emailAddress = emailForm.value['reset-password-email'];
          this.subscriptions.push(this.userService.resetPassword(emailAddress).subscribe(function (response) {
            _this8.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, response.message);

            _this8.refreshing = false;
          }, function (error) {
            _this8.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].WARNING, error.error.message);

            _this8.refreshing = false;
          }, function () {
            return emailForm.reset();
          }));
        }
      }, {
        key: "onDeleteUder",
        value: function onDeleteUder(username) {
          var _this9 = this;

          this.subscriptions.push(this.userService.deleteUser(username).subscribe(function (response) {
            _this9.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].SUCCESS, response.message);

            _this9.getUsers(false);
          }, function (error) {
            _this9.sendNotification(_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__["NotificationType"].ERROR, error.error.message);
          }));
        }
      }, {
        key: "onEditUser",
        value: function onEditUser(editUser) {
          this.editUser = editUser;
          this.currentUsername = editUser.username;
          this.clickButton('openUserEdit');
        }
      }, {
        key: "searchUsers",
        value: function searchUsers(searchTerm) {
          var results = [];

          var _iterator = _createForOfIteratorHelper(this.userService.getUsersFromLocalCache()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var user = _step.value;

              if (user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || user.userId.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                results.push(user);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.users = results;

          if (results.length === 0 || !searchTerm) {
            this.users = this.userService.getUsersFromLocalCache();
          }
        }
      }, {
        key: "getUserRole",
        value: function getUserRole() {
          return this.authenticationService.getUserFromLocalCache().role;
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(notificationType, message) {
          if (message) {
            this.notificationService.notify(notificationType, message);
          } else {
            this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
          }
        }
      }, {
        key: "clickButton",
        value: function clickButton(buttonId) {
          document.getElementById(buttonId).click();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return this.getUserRole() === _enum_role_enum__WEBPACK_IMPORTED_MODULE_6__["Role"].ADMIN || this.getUserRole() === _enum_role_enum__WEBPACK_IMPORTED_MODULE_6__["Role"].SUPER_ADMIN;
        }
      }, {
        key: "isManager",
        get: function get() {
          return this.isAdmin || this.getUserRole() === _enum_role_enum__WEBPACK_IMPORTED_MODULE_6__["Role"].MANAGER;
        }
      }, {
        key: "isAdminOrManager",
        get: function get() {
          return this.isAdmin || this.isManager;
        }
      }]);

      return UserComponent;
    }();

    UserComponent.??fac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]));
    };

    UserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 450,
      vars: 108,
      consts: [[1, "container"], [1, "row", "mb-2", "mt-2", "text-center"], [1, "col-md-4"], [4, "ngIf"], [1, "navbar", "navbar-expand-md", "breadcrumb"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "nav", "nav-pills"], ["data-toggle", "tab", "href", "#users", 1, "nav-item", "nav-link", "active", "ml-1", 3, "click"], [1, "fa", "fa-users"], ["data-toggle", "tab", "href", "#reset-password", 1, "nav-item", "nav-link", "ml-3", 3, "hidden", "click"], [1, "fa", "fa-cogs"], ["data-toggle", "tab", "href", "#profile", 1, "nav-item", "nav-link", "move-right", "mr-3", 3, "click"], [1, "fa", "fa-user"], ["id", "myTabContent", 1, "tab-content", "mt-3"], ["id", "users", 1, "tab-pane", "fade", "show", "active"], [1, "mb-3", "float-right"], [1, "btn-group", "mr-2"], [1, "form-inline", "my-2", "my-lg-0", "justify-content-center"], ["name", "searchTerm", "ngModel", "", "type", "search", "placeholder", "Search users...", 1, "form-control", "mr-sm-2", 3, "ngModelChange"], ["searchInput", "ngModel"], ["type", "button", "data-toggle", "modal", "data-target", "#addUserModal", 1, "btn", "btn-info", 3, "hidden"], [1, "fa", "fa-plus"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["class", "fas fa-sync fa-spin", 4, "ngIf"], ["class", "fas fa-sync", 4, "ngIf"], [1, "table", "table-hover"], [1, "table-borderless"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "openUserInfo", "data-toggle", "modal", "data-target", "#viewUserModal", 3, "hidden"], ["type", "button", "id", "openUserEdit", "data-toggle", "modal", "data-target", "#editUserModal", 3, "hidden"], ["id", "reset-password", 1, "tab-pane", "fade", 3, "hidden"], [3, "ngSubmit"], ["resetPasswordForm", "ngForm"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "name", "reset-password-email", "required", "", "ngModel", "", "placeholder", "Enter email (example@email.com)", 1, "form-control"], [1, "form-text", "text-muted"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["id", "profile", 1, "tab-pane", "fade"], [1, "row", "flex-lg-nowrap"], [1, "col"], [1, "row"], [1, "col", "mb-3"], [1, "card"], [1, "card-body"], [1, "e-profile"], [1, "col-12", "col-sm-auto"], [1, "mx-auto", 2, "width", "120px"], [1, "d-flex", "justify-content-center", "align-items-center", "rounded"], ["height", "135", "width", "135", "alt", "", 1, "rounded", 3, "src"], ["class", "progress mt-1", 4, "ngIf"], [1, "col", "d-flex", "flex-column", "flex-sm-row", "justify-content-between", "mb-3"], [1, "text-center", "text-sm-left", "mb-2", "mb-sm-0"], [1, "pt-sm-2", "pb-1", "mb-0", "text-nowrap"], [1, "mb-0"], ["class", "text-muted", 4, "ngIf"], [1, "mt-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-fw", "fa-camera"], [1, "text-center", "text-sm-right"], [1, "text-muted"], [1, "tab-content", "pt-3"], [1, "tab-pane", "active"], ["novalidate", "", 1, "form", 3, "ngSubmit"], ["profileUserForm", "ngForm"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "hidden"], ["name", "role", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "ROLE_USER", 3, "hidden"], ["value", "ROLE_HR", 3, "hidden"], ["value", "ROLE_MANAGER", 3, "hidden"], ["value", "ROLE_ADMIN", 3, "hidden"], ["value", "ROLE_SUPER_ADMIN", 3, "hidden"], [1, "col-12", "col-sm-5", "offset-sm-1", "mb-3"], [1, "mb-2"], [1, "custom-controls-stacked", "px-2"], [1, "custom-control", "custom-checkbox"], ["name", "active", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], [1, "custom-control-label"], ["name", "notLocked", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], [1, "col", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-12", "col-md-3", "mb-3"], [1, "card", "mb-3"], [1, "px-xl-3"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "fas", "fa-sign-in-alt", "ml-1"], [1, "card-title", "font-weight-bold"], ["class", "card-text", 4, "ngFor", "ngForOf"], ["id", "viewUserModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title", "text-center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "120", "width", "120", 1, "rounded", 3, "src", "alt"], [1, "col", "d-flex", "flex-column", "flex-sm-row", "justify-content-between"], [1, "text-center", "text-sm-left", "mb-sm-0"], [1, "mb-1"], [1, ""], [1, "badge", "badge-success", 3, "hidden"], [1, "badge", "badge-danger", 3, "hidden"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "fa", "fa-id-badge", "float-right"], [1, "fa", "fa-envelope", "float-right"], [1, "fas", "fa-shield-alt", "float-right"], ["class", "list-group-item", 4, "ngIf"], [1, "fa", "fa-lock", "float-right", 2, "color", "red"], [1, "fa", "fa-unlock", "float-right", 2, "color", "green"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "addUserModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "draggable", "fade", "bd-example-modal-lg", 3, "hidden"], [1, "modal-title", "text-center"], ["newUserForm", "ngForm"], ["for", "firstName"], ["type", "text", "name", "firstName", "required", "", "ngModel", "", 1, "form-control"], ["for", "lastName"], ["type", "text", "name", "lastName", "required", "", "ngModel", "", 1, "form-control"], ["for", "username"], ["type", "text", "name", "username", "required", "", "ngModel", "", 1, "form-control"], ["for", "email"], ["type", "email", "name", "email", "required", "", "ngModel", "", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "custom-file"], ["type", "file", "accept", "image/*", "name", "profileImage", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "name", "active", "ngModel", "", 1, "form-check-input"], [1, "form-check", "disabled"], ["type", "checkbox", "name", "notLocked", "ngModel", "", 1, "form-check-input"], ["type", "submit", "id", "new-user-save", 2, "display", "none"], ["type", "button", "data-dismiss", "modal", "id", "new-user-close", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "editUserModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "draggable", "fade", "bd-example-modal-lg"], ["editUserForm", "ngForm"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["for", "authority"], ["name", "role", "required", "", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["value", "ROLE_USER"], ["value", "ROLE_HR"], ["value", "ROLE_MANAGER"], ["value", "ROLE_ADMIN"], ["value", "ROLE_SUPER_ADMIN"], ["type", "file", "accept", "image/*", "name", "profileImage", 1, "custom-file-input", 3, "disabled", "change"], ["name", "active", "type", "checkbox", 1, "form-check-input", 3, "disabled", "ngModel", "ngModelChange"], ["name", "locked", "type", "checkbox", 1, "form-check-input", 3, "disabled", "ngModel", "ngModelChange"], ["type", "button", "data-dismiss", "modal", "id", "closeEditUserModalButton", 1, "btn", "btn-secondary"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "active", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["name", "locked", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["enctype", "multipart/form-data", 2, "display", "none"], ["type", "file", "name", "profile-image-input", "id", "profile-image-input", "placeholder", "file", "accept", "image/*", 3, "change"], [1, "fas", "fa-sync", "fa-spin"], [1, "fas", "fa-sync"], [3, "click"], ["height", "40", "width", "40", "alt", "", 1, "rounded-circle", "img-fluid", "img-thumbnail", 3, "src"], [1, "btn", "btn-outline-info", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-outline-danger", 3, "hidden", "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-spinner", "fa-spin"], [1, "progress", "mt-1"], ["role", "progressbar", "aria-valuenow", "0", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info"], [1, "card-text"], [1, "fas", "fa-sign-in-alt", "float-right"], ["name", "role", "required", "", "ngModel", "ROLE_USER", 1, "form-control"], ["type", "text", "name", "role", "required", "", "ngModel", "USER", "readonly", "", 1, "form-control"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "User Management Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserComponent_small_6_Template, 2, 1, "small", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_a_click_12_listener() {
            return ctx.changeTitle("Users");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_a_click_15_listener() {
            return ctx.changeTitle("Settings");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_a_click_18_listener() {
            return ctx.changeTitle("Profile");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](27);

            return ctx.searchUsers(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "New User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_32_listener() {
            return ctx.getUsers(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, UserComponent_i_33_Template, 1, 0, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, UserComponent_i_34_Template, 1, 0, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "table", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "thead", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, UserComponent_tbody_54_Template, 25, 9, "tbody", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "form", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](59);

            return ctx.onResetPassword(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "User Password Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, UserComponent_i_70_Template, 1, 0, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, UserComponent_span_72_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, UserComponent_span_73_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, UserComponent_div_88_Template, 3, 3, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h4", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](95, UserComponent_div_95_Template, 4, 4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_97_listener() {
            return ctx.updateProfileImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Change Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](105, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "form", 66, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_108_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](109);

            return ctx.onUpdateCurrentUser(_r11.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_117_listener($event) {
            return ctx.user.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_122_listener($event) {
            return ctx.user.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_128_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_134_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "small", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "(read only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_select_ngModelChange_142_listener($event) {
            return ctx.user.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "USER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "HR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "MANAGER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "option", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "SUPER ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Account Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_162_listener($event) {
            return ctx.user.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_166_listener($event) {
            return ctx.user.notLocked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Unlocked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](172, UserComponent_i_172_Template, 1, 0, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](174, UserComponent_span_174_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](175, UserComponent_span_175_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_180_listener() {
            return ctx.onLogOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h6", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Permissions From Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](188, UserComponent_h6_188_Template, 2, 1, "h6", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "h5", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "span", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "img", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h6", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "span", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "span", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](219, UserComponent_div_219_Template, 4, 4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](224, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "ul", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](226, "li", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "li", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "li", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "li", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](234, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](236, UserComponent_li_236_Template, 4, 4, "li", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "li", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](239, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " Account Locked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "i", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " Account Unlocked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "button", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "h5", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "New User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "span", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "form", 33, 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_258_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](259);

            return ctx.onAddNewUser(_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "label", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](267, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "label", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "label", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "input", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](276, UserComponent_div_276_Template, 14, 0, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](277, UserComponent_div_277_Template, 4, 0, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "span", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "Profile Picture ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "input", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserComponent_Template_input_change_283_listener($event) {
            return ctx.onProfileImageChange($event.target.files[0].name, $event.target.files[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "label", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Choose File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "fieldset", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](292, "input", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, " Acitve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "input", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, " Unlocked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "button", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "button", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "button", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_302_listener() {
            return ctx.saveNewUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "h5", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "small", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, " (read only) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "span", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "form", null, 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "input", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_322_listener($event) {
            return ctx.editUser.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "label", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "input", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_326_listener($event) {
            return ctx.editUser.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "label", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "input", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_330_listener($event) {
            return ctx.editUser.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "label", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "input", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_334_listener($event) {
            return ctx.editUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "label", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "small", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "(read only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "select", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_select_ngModelChange_340_listener($event) {
            return ctx.editUser.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "USER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "option", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "HR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "option", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "MANAGER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "option", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "option", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "SUPER ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "span", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Profile Picture ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "input", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserComponent_Template_input_change_356_listener($event) {
            return ctx.onProfileImageChange($event.target.files[0].name, $event.target.files[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "label", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Choose File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "fieldset", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "input", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_365_listener($event) {
            return ctx.editUser.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, " Acitve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "small", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "(read only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "input", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_371_listener($event) {
            return ctx.editUser.notLocked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, " Unlocked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "small", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "(read only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "button", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "button", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_378_listener() {
            return ctx.onUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "h5", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "span", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "form", null, 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_396_listener($event) {
            return ctx.editUser.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "label", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_400_listener($event) {
            return ctx.editUser.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "label", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_404_listener($event) {
            return ctx.editUser.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "label", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "input", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_408_listener($event) {
            return ctx.editUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "label", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_select_ngModelChange_412_listener($event) {
            return ctx.editUser.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "USER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "option", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "HR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "option", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "MANAGER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "option", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "option", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "SUPER ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "span", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "Profile Picture ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "input", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserComponent_Template_input_change_428_listener($event) {
            return ctx.onProfileImageChange($event.target.files[0].name, $event.target.files[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "label", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "span", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "Choose File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "fieldset", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "input", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_437_listener($event) {
            return ctx.editUser.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, " Acitve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "input", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_441_listener($event) {
            return ctx.editUser.notLocked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, " Unlocked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "button", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "button", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserComponent_Template_button_click_446_listener() {
            return ctx.onUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "form", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "input", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserComponent_Template_input_change_449_listener($event) {
            ctx.onProfileImageChange($event.target.files[0].name, $event.target.files[0]);
            return ctx.onUpdateProfileImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](59);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](259);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](318);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 100, ctx.titleAction$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Welcome, ", ctx.user == null ? null : ctx.user.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r5.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.user == null ? null : ctx.user.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.fileStatus == null ? null : ctx.fileStatus.status) === "progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user == null ? null : ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.user == null ? null : ctx.user.lastLoginDateDisplay) !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](105, 102, ctx.user == null ? null : ctx.user.joinDate, "mediumDate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.notLocked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.refreshing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.user == null ? null : ctx.user.authorities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.selectedUser == null ? null : ctx.selectedUser.firstName, " ", ctx.selectedUser == null ? null : ctx.selectedUser.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.selectedUser == null ? null : ctx.selectedUser.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx.selectedUser == null ? null : ctx.selectedUser.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.selectedUser == null ? null : ctx.selectedUser.firstName, " ", ctx.selectedUser == null ? null : ctx.selectedUser.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedUser == null ? null : ctx.selectedUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !(ctx.selectedUser == null ? null : ctx.selectedUser.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.selectedUser == null ? null : ctx.selectedUser.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectedUser == null ? null : ctx.selectedUser.lastLoginDateDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](224, 105, ctx.selectedUser == null ? null : ctx.selectedUser.joinDate, "mediumDate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.selectedUser == null ? null : ctx.selectedUser.userId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.selectedUser == null ? null : ctx.selectedUser.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.selectedUser == null ? null : ctx.selectedUser.role.substring(5), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectedUser == null ? null : ctx.selectedUser.lastLoginDateDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.selectedUser == null ? null : ctx.selectedUser.notLocked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !(ctx.selectedUser == null ? null : ctx.selectedUser.notLocked));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r18.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("Edit ", ctx.editUser == null ? null : ctx.editUser.firstName, " ", ctx.editUser == null ? null : ctx.editUser.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isAdminOrManager);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isAdminOrManager)("ngModel", ctx.editUser.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isAdminOrManager)("ngModel", ctx.editUser.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isAdminOrManager)("ngModel", ctx.editUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isAdminOrManager)("ngModel", ctx.editUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isAdmin)("ngModel", ctx.editUser.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isAdminOrManager);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isManager)("ngModel", ctx.editUser.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isManager);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.isManager)("ngModel", ctx.editUser.notLocked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isManager);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r21.invalid || !ctx.isAdminOrManager);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("Edit ", ctx.editUser == null ? null : ctx.editUser.firstName, " ", ctx.editUser == null ? null : ctx.editUser.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.editUser.notLocked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r21.invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["CheckboxControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _service_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8081'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\user\Desktop\prepaWeb\prepaWebFrontEnd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map