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
exports.FilterReqDto = exports.FilterKwDto = exports.PageReqDto = void 0;
/*
* Author:dinglong
* DateTime:2024/1/7 上午 12:10
*/
var swagger_1 = require("@nestjs/swagger");
// 列表分页 dto
var PageReqDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _offset_decorators;
    var _offset_initializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    return _a = /** @class */ (function () {
            function PageReqDto() {
                this.offset = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _offset_initializers, void 0));
                this.limit = __runInitializers(this, _limit_initializers, void 0);
            }
            return PageReqDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _offset_decorators = [(0, swagger_1.ApiProperty)({
                    description: '页码',
                })];
            _limit_decorators = [(0, swagger_1.ApiProperty)({
                    description: '每页条数',
                })];
            __esDecorate(null, null, _offset_decorators, { kind: "field", name: "offset", static: false, private: false, access: { has: function (obj) { return "offset" in obj; }, get: function (obj) { return obj.offset; }, set: function (obj, value) { obj.offset = value; } }, metadata: _metadata }, _offset_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PageReqDto = PageReqDto;
var FilterKwDto = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _keyword_decorators;
    var _keyword_initializers = [];
    return _a = /** @class */ (function () {
            function FilterKwDto() {
                this.keyword = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _keyword_initializers, void 0));
            }
            return FilterKwDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _keyword_decorators = [(0, swagger_1.ApiProperty)({
                    description: '关键字',
                })];
            __esDecorate(null, null, _keyword_decorators, { kind: "field", name: "keyword", static: false, private: false, access: { has: function (obj) { return "keyword" in obj; }, get: function (obj) { return obj.keyword; }, set: function (obj, value) { obj.keyword = value; } }, metadata: _metadata }, _keyword_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FilterKwDto = FilterKwDto;
// 列表筛选 dto
var FilterReqDto = function () {
    var _a;
    var _classSuper = FilterKwDto;
    var _instanceExtraInitializers = [];
    var _sort_type_decorators;
    var _sort_type_initializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(FilterReqDto, _super);
            function FilterReqDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.sort_type = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _sort_type_initializers, void 0));
                return _this;
            }
            return FilterReqDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _sort_type_decorators = [(0, swagger_1.ApiProperty)({
                    description: '根据时间排序 asc 正序 desc 倒序',
                })];
            __esDecorate(null, null, _sort_type_decorators, { kind: "field", name: "sort_type", static: false, private: false, access: { has: function (obj) { return "sort_type" in obj; }, get: function (obj) { return obj.sort_type; }, set: function (obj, value) { obj.sort_type = value; } }, metadata: _metadata }, _sort_type_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FilterReqDto = FilterReqDto;
