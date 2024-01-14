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
exports.IdDto = exports.ArticleListResponse = exports.UserDto = void 0;
/*
* Author:dinglong
* DateTime:2024/1/6 下午 10:54
*/
var swagger_1 = require("@nestjs/swagger");
var UserDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _avatar_decorators;
    var _avatar_initializers = [];
    var _uname_decorators;
    var _uname_initializers = [];
    var _sex_decorators;
    var _sex_initializers = [];
    return _a = /** @class */ (function () {
            function UserDto() {
                this.avatar = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _avatar_initializers, void 0));
                this.uname = __runInitializers(this, _uname_initializers, void 0);
                this.sex = __runInitializers(this, _sex_initializers, void 0);
            }
            return UserDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _avatar_decorators = [(0, swagger_1.ApiProperty)({
                    description: '头像',
                })];
            _uname_decorators = [(0, swagger_1.ApiProperty)({
                    description: '昵称',
                })];
            _sex_decorators = [(0, swagger_1.ApiProperty)({
                    description: '性别',
                })];
            __esDecorate(null, null, _avatar_decorators, { kind: "field", name: "avatar", static: false, private: false, access: { has: function (obj) { return "avatar" in obj; }, get: function (obj) { return obj.avatar; }, set: function (obj, value) { obj.avatar = value; } }, metadata: _metadata }, _avatar_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _uname_decorators, { kind: "field", name: "uname", static: false, private: false, access: { has: function (obj) { return "uname" in obj; }, get: function (obj) { return obj.uname; }, set: function (obj, value) { obj.uname = value; } }, metadata: _metadata }, _uname_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _sex_decorators, { kind: "field", name: "sex", static: false, private: false, access: { has: function (obj) { return "sex" in obj; }, get: function (obj) { return obj.sex; }, set: function (obj, value) { obj.sex = value; } }, metadata: _metadata }, _sex_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserDto = UserDto;
var ArticleListResponse = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    return _a = /** @class */ (function () {
            function ArticleListResponse() {
                this.code = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _code_initializers, void 0));
            }
            return ArticleListResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _code_decorators = [(0, swagger_1.ApiProperty)({ description: '状态码', example: 200, })];
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ArticleListResponse = ArticleListResponse;
var IdDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _wallpaper_id_decorators;
    var _wallpaper_id_initializers = [];
    return _a = /** @class */ (function () {
            function IdDto() {
                this.wallpaper_id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _wallpaper_id_initializers, void 0));
            }
            return IdDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _wallpaper_id_decorators = [(0, swagger_1.ApiProperty)({ description: '壁纸id' })];
            __esDecorate(null, null, _wallpaper_id_decorators, { kind: "field", name: "wallpaper_id", static: false, private: false, access: { has: function (obj) { return "wallpaper_id" in obj; }, get: function (obj) { return obj.wallpaper_id; }, set: function (obj, value) { obj.wallpaper_id = value; } }, metadata: _metadata }, _wallpaper_id_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.IdDto = IdDto;
