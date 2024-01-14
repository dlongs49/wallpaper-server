"use strict";
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
exports.WallpaperFileDto = exports.FileDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var FileDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _avatar_decorators;
    var _avatar_initializers = [];
    return _a = /** @class */ (function () {
            function FileDto() {
                this.avatar = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _avatar_initializers, void 0));
            }
            return FileDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _avatar_decorators = [(0, swagger_1.ApiProperty)({ type: 'file', format: 'binary' })];
            __esDecorate(null, null, _avatar_decorators, { kind: "field", name: "avatar", static: false, private: false, access: { has: function (obj) { return "avatar" in obj; }, get: function (obj) { return obj.avatar; }, set: function (obj, value) { obj.avatar = value; } }, metadata: _metadata }, _avatar_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FileDto = FileDto;
var WallpaperFileDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _wallpaper_decorators;
    var _wallpaper_initializers = [];
    return _a = /** @class */ (function () {
            function WallpaperFileDto() {
                this.wallpaper = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _wallpaper_initializers, void 0));
            }
            return WallpaperFileDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _wallpaper_decorators = [(0, swagger_1.ApiProperty)({ type: 'file', format: 'binary' })];
            __esDecorate(null, null, _wallpaper_decorators, { kind: "field", name: "wallpaper", static: false, private: false, access: { has: function (obj) { return "wallpaper" in obj; }, get: function (obj) { return obj.wallpaper; }, set: function (obj, value) { obj.wallpaper = value; } }, metadata: _metadata }, _wallpaper_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WallpaperFileDto = WallpaperFileDto;
