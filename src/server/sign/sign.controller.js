"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var authen_guard_1 = require("../../authen/authen.guard");
var user_dto_1 = require("./dto/user.dto");
var SignController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("登录/注册/用户信息"), (0, common_1.Controller)('sign')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _loginReg_decorators;
    var _getUser_decorators;
    var _updateUser_decorators;
    var _setUerCollect_decorators;
    var _getUerCollect_decorators;
    var _setUerApply_decorators;
    var _getUerApply_decorators;
    var SignController = _classThis = /** @class */ (function () {
        function SignController_1(signService) {
            this.signService = (__runInitializers(this, _instanceExtraInitializers), signService);
        }
        SignController_1.prototype.loginReg = function (requestDto, req) {
            common_1.Logger.debug(req);
            return this.signService.loginReg(requestDto);
        };
        SignController_1.prototype.getUser = function (req) {
            return this.signService.getUser(req);
        };
        SignController_1.prototype.updateUser = function (userDto, request) {
            return this.signService.updateUser(userDto, request);
        };
        SignController_1.prototype.setUerCollect = function (idDto, req) {
            return this.signService.setUerWallpaper(idDto, req, 0);
        };
        SignController_1.prototype.getUerCollect = function (pageReqDto) {
            return this.signService.getUerWallpaper(pageReqDto, 0);
        };
        SignController_1.prototype.setUerApply = function (idDto, req) {
            return this.signService.setUerWallpaper(idDto, req, 1);
        };
        SignController_1.prototype.getUerApply = function (pageReqDto) {
            return this.signService.getUerWallpaper(pageReqDto, 1);
        };
        return SignController_1;
    }());
    __setFunctionName(_classThis, "SignController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _loginReg_decorators = [(0, swagger_1.ApiOperation)({ summary: '登录注册二合一' }), (0, common_1.Post)("reg_login")];
        _getUser_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(authen_guard_1.AuthenGuard), (0, swagger_1.ApiOperation)({ summary: '获取用户信息' }), (0, common_1.Get)("get_user")];
        _updateUser_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(authen_guard_1.AuthenGuard), (0, swagger_1.ApiOkResponse)({ description: '文章列表', type: user_dto_1.ArticleListResponse }), (0, swagger_1.ApiOperation)({ summary: '更新用户信息' }), (0, common_1.Post)("put_user")];
        _setUerCollect_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(authen_guard_1.AuthenGuard), (0, swagger_1.ApiOperation)({ summary: '收藏壁纸操作【App端】' }), (0, common_1.Post)("/app/collect_wallpaper")];
        _getUerCollect_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(authen_guard_1.AuthenGuard), (0, swagger_1.ApiOperation)({ summary: '个人收藏的壁纸【App端】' }), (0, common_1.Get)("/app/get_collect_wallpaper")];
        _setUerApply_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(authen_guard_1.AuthenGuard), (0, swagger_1.ApiOperation)({ summary: '应用壁纸操作【App端】' }), (0, common_1.Post)("/app/apply_wallpaper")];
        _getUerApply_decorators = [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(authen_guard_1.AuthenGuard), (0, swagger_1.ApiOperation)({ summary: '应用壁纸记录【App端】' }), (0, common_1.Get)("/app/get_apply_wallpaper")];
        __esDecorate(_classThis, null, _loginReg_decorators, { kind: "method", name: "loginReg", static: false, private: false, access: { has: function (obj) { return "loginReg" in obj; }, get: function (obj) { return obj.loginReg; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUser_decorators, { kind: "method", name: "getUser", static: false, private: false, access: { has: function (obj) { return "getUser" in obj; }, get: function (obj) { return obj.getUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: function (obj) { return "updateUser" in obj; }, get: function (obj) { return obj.updateUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _setUerCollect_decorators, { kind: "method", name: "setUerCollect", static: false, private: false, access: { has: function (obj) { return "setUerCollect" in obj; }, get: function (obj) { return obj.setUerCollect; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUerCollect_decorators, { kind: "method", name: "getUerCollect", static: false, private: false, access: { has: function (obj) { return "getUerCollect" in obj; }, get: function (obj) { return obj.getUerCollect; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _setUerApply_decorators, { kind: "method", name: "setUerApply", static: false, private: false, access: { has: function (obj) { return "setUerApply" in obj; }, get: function (obj) { return obj.setUerApply; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUerApply_decorators, { kind: "method", name: "getUerApply", static: false, private: false, access: { has: function (obj) { return "getUerApply" in obj; }, get: function (obj) { return obj.getUerApply; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SignController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SignController = _classThis;
}();
exports.SignController = SignController;
