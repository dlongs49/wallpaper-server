"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WallpaperSortExDto = exports.WallpaperReqExDto = exports.WallpaperReqDto = void 0;
/*
* Author:dinglong
* DateTime:2024/1/7 下午 1:47
*/
var swagger_1 = require("@nestjs/swagger");
var global_dto_1 = require("../../../utils/global.dto");
var WallpaperReqDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _type_id_decorators;
    var _type_id_initializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_type_decorators;
    var _url_type_initializers = [];
    return _a = /** @class */ (function () {
            function WallpaperReqDto() {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.type_id = __runInitializers(this, _type_id_initializers, void 0);
                this.url = __runInitializers(this, _url_initializers, void 0);
                this.url_type = __runInitializers(this, _url_type_initializers, void 0);
            }
            return WallpaperReqDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [(0, swagger_1.ApiProperty)({
                    description: '壁纸标题',
                })];
            _type_id_decorators = [(0, swagger_1.ApiProperty)({
                    description: '壁纸类型',
                })];
            _url_decorators = [(0, swagger_1.ApiProperty)({
                    description: '壁纸图片url',
                })];
            _url_type_decorators = [(0, swagger_1.ApiProperty)({
                    description: '壁纸图片类型 0 上传 1 链接',
                })];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _type_id_decorators, { kind: "field", name: "type_id", static: false, private: false, access: { has: function (obj) { return "type_id" in obj; }, get: function (obj) { return obj.type_id; }, set: function (obj, value) { obj.type_id = value; } }, metadata: _metadata }, _type_id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _url_type_decorators, { kind: "field", name: "url_type", static: false, private: false, access: { has: function (obj) { return "url_type" in obj; }, get: function (obj) { return obj.url_type; }, set: function (obj, value) { obj.url_type = value; } }, metadata: _metadata }, _url_type_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WallpaperReqDto = WallpaperReqDto;
var WallpaperReqExDto = function () {
    var _a;
    var _classSuper = WallpaperReqDto;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(WallpaperReqExDto, _super);
            function WallpaperReqExDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
                return _this;
            }
            return WallpaperReqExDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'id',
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WallpaperReqExDto = WallpaperReqExDto;
var WallpaperSortExDto = function () {
    var _a;
    var _classSuper = global_dto_1.FilterReqDto;
    var _instanceExtraInitializers = [];
    var _url_type_decorators;
    var _url_type_initializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(WallpaperSortExDto, _super);
            function WallpaperSortExDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.url_type = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _url_type_initializers, void 0));
                return _this;
            }
            return WallpaperSortExDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _url_type_decorators = [(0, swagger_1.ApiProperty)({
                    description: '壁纸链接类型 0 上传 1 链接',
                })];
            __esDecorate(null, null, _url_type_decorators, { kind: "field", name: "url_type", static: false, private: false, access: { has: function (obj) { return "url_type" in obj; }, get: function (obj) { return obj.url_type; }, set: function (obj, value) { obj.url_type = value; } }, metadata: _metadata }, _url_type_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WallpaperSortExDto = WallpaperSortExDto;
