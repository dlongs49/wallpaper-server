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
exports.WallpaperController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var WallpaperController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("壁纸管理"), (0, common_1.Controller)('wallpaper')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _setWallpaperType_decorators;
    var _getWallpaperTypeDetail_decorators;
    var _updateWallpaperType_decorators;
    var _delWallpaperType_decorators;
    var _getWallpaperTypeList_decorators;
    var _getWTAppList_decorators;
    var _setWallpaper_decorators;
    var _getWallpaperDetail_decorators;
    var _updateWallpaper_decorators;
    var _delWallpaper_decorators;
    var _getWallpaperList_decorators;
    var _getWPAppList_decorators;
    var _getWPADetail_decorators;
    var WallpaperController = _classThis = /** @class */ (function () {
        function WallpaperController_1(wallpaperService) {
            this.wallpaperService = (__runInitializers(this, _instanceExtraInitializers), wallpaperService);
        }
        WallpaperController_1.prototype.setWallpaperType = function (wallpaperTypeResDto) {
            return this.wallpaperService.setWallpaperType(wallpaperTypeResDto);
        };
        WallpaperController_1.prototype.getWallpaperTypeDetail = function (id) {
            return this.wallpaperService.getWallpaperTypeDetail(id);
        };
        WallpaperController_1.prototype.updateWallpaperType = function (wallpaperTypeExDto) {
            return this.wallpaperService.updateWallpaperType(wallpaperTypeExDto);
        };
        WallpaperController_1.prototype.delWallpaperType = function (idArr) {
            console.log(idArr);
            return this.wallpaperService.delWallpaperType(idArr);
        };
        WallpaperController_1.prototype.getWallpaperTypeList = function (pageReqDto, filterReqDto) {
            return this.wallpaperService.getWallpaperTypeList(pageReqDto, filterReqDto);
        };
        WallpaperController_1.prototype.getWTAppList = function (pageReqDto, filterReqDto) {
            return this.wallpaperService.getWallpaperTypeList(pageReqDto, filterReqDto);
        };
        /**
         * 壁纸列表
         */
        WallpaperController_1.prototype.setWallpaper = function (wallpaperReqDto) {
            return this.wallpaperService.setWallpaper(wallpaperReqDto);
        };
        WallpaperController_1.prototype.getWallpaperDetail = function (id) {
            return this.wallpaperService.getWallpaperDetail(id);
        };
        WallpaperController_1.prototype.updateWallpaper = function (wallpaperReqExDto) {
            return this.wallpaperService.updateWallpaper(wallpaperReqExDto);
        };
        WallpaperController_1.prototype.delWallpaper = function (idArr) {
            return this.wallpaperService.delWallpaper(idArr);
        };
        WallpaperController_1.prototype.getWallpaperList = function (pageReqDto, wallpaperSortExDto) {
            return this.wallpaperService.getWallpaperList(pageReqDto, wallpaperSortExDto);
        };
        WallpaperController_1.prototype.getWPAppList = function (pageReqDto, filterKwDto) {
            return this.wallpaperService.getWallpaperAppList(pageReqDto, filterKwDto);
        };
        WallpaperController_1.prototype.getWPADetail = function (id) {
            return this.wallpaperService.getWallpaperAppDetail(id);
        };
        return WallpaperController_1;
    }());
    __setFunctionName(_classThis, "WallpaperController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _setWallpaperType_decorators = [(0, swagger_1.ApiOperation)({ summary: '新增壁纸类型' }), (0, common_1.Post)("set_wallpaper_type")];
        _getWallpaperTypeDetail_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸类型详情' }), (0, swagger_1.ApiParam)({ name: 'id' }), (0, common_1.Get)("detail_wallpaper_type/:id")];
        _updateWallpaperType_decorators = [(0, swagger_1.ApiOperation)({ summary: '更新壁纸类型' }), (0, common_1.Post)("update_wallpaper_type")];
        _delWallpaperType_decorators = [(0, swagger_1.ApiOperation)({ summary: '删除壁纸类型' }), (0, common_1.Post)("del_wallpaper_type")];
        _getWallpaperTypeList_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸类型列表' }), (0, common_1.Post)("get_wallpaper_type")];
        _getWTAppList_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸类型【App端】' }), (0, common_1.Post)("/app/get_wallpaper_type")];
        _setWallpaper_decorators = [(0, swagger_1.ApiOperation)({ summary: '新增壁纸' }), (0, common_1.Post)("set_wallpaper")];
        _getWallpaperDetail_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸详情' }), (0, swagger_1.ApiParam)({ name: 'id' }), (0, common_1.Get)("detail_wallpaper/:id")];
        _updateWallpaper_decorators = [(0, swagger_1.ApiOperation)({ summary: '更新壁纸' }), (0, common_1.Post)("update_wallpaper")];
        _delWallpaper_decorators = [(0, swagger_1.ApiOperation)({ summary: '删除壁纸' }), (0, common_1.Post)("del_wallpaper")];
        _getWallpaperList_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸列表' }), (0, common_1.Post)("get_wallpaper")];
        _getWPAppList_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸列表【App端】' }), (0, common_1.Post)("/app/get_wallpaper")];
        _getWPADetail_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸详情【App端】' }), (0, swagger_1.ApiParam)({ name: 'id' }), (0, common_1.Get)("/app/detail_wallpaper/:id")];
        __esDecorate(_classThis, null, _setWallpaperType_decorators, { kind: "method", name: "setWallpaperType", static: false, private: false, access: { has: function (obj) { return "setWallpaperType" in obj; }, get: function (obj) { return obj.setWallpaperType; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWallpaperTypeDetail_decorators, { kind: "method", name: "getWallpaperTypeDetail", static: false, private: false, access: { has: function (obj) { return "getWallpaperTypeDetail" in obj; }, get: function (obj) { return obj.getWallpaperTypeDetail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateWallpaperType_decorators, { kind: "method", name: "updateWallpaperType", static: false, private: false, access: { has: function (obj) { return "updateWallpaperType" in obj; }, get: function (obj) { return obj.updateWallpaperType; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _delWallpaperType_decorators, { kind: "method", name: "delWallpaperType", static: false, private: false, access: { has: function (obj) { return "delWallpaperType" in obj; }, get: function (obj) { return obj.delWallpaperType; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWallpaperTypeList_decorators, { kind: "method", name: "getWallpaperTypeList", static: false, private: false, access: { has: function (obj) { return "getWallpaperTypeList" in obj; }, get: function (obj) { return obj.getWallpaperTypeList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWTAppList_decorators, { kind: "method", name: "getWTAppList", static: false, private: false, access: { has: function (obj) { return "getWTAppList" in obj; }, get: function (obj) { return obj.getWTAppList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _setWallpaper_decorators, { kind: "method", name: "setWallpaper", static: false, private: false, access: { has: function (obj) { return "setWallpaper" in obj; }, get: function (obj) { return obj.setWallpaper; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWallpaperDetail_decorators, { kind: "method", name: "getWallpaperDetail", static: false, private: false, access: { has: function (obj) { return "getWallpaperDetail" in obj; }, get: function (obj) { return obj.getWallpaperDetail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateWallpaper_decorators, { kind: "method", name: "updateWallpaper", static: false, private: false, access: { has: function (obj) { return "updateWallpaper" in obj; }, get: function (obj) { return obj.updateWallpaper; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _delWallpaper_decorators, { kind: "method", name: "delWallpaper", static: false, private: false, access: { has: function (obj) { return "delWallpaper" in obj; }, get: function (obj) { return obj.delWallpaper; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWallpaperList_decorators, { kind: "method", name: "getWallpaperList", static: false, private: false, access: { has: function (obj) { return "getWallpaperList" in obj; }, get: function (obj) { return obj.getWallpaperList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWPAppList_decorators, { kind: "method", name: "getWPAppList", static: false, private: false, access: { has: function (obj) { return "getWPAppList" in obj; }, get: function (obj) { return obj.getWPAppList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWPADetail_decorators, { kind: "method", name: "getWPADetail", static: false, private: false, access: { has: function (obj) { return "getWPADetail" in obj; }, get: function (obj) { return obj.getWPADetail; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WallpaperController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WallpaperController = _classThis;
}();
exports.WallpaperController = WallpaperController;
