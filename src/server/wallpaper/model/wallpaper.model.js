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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WallpaperModel = void 0;
/*
* Author:dinglong
* DateTime:2024/1/7 下午 2:06
*/
var sequelize_typescript_1 = require("sequelize-typescript");
var WallpaperModel = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'wallpaper',
            timestamps: false,
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _type_id_decorators;
    var _type_id_initializers = [];
    var _type_name_decorators;
    var _type_name_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_type_decorators;
    var _url_type_initializers = [];
    var _is_like_decorators;
    var _is_like_initializers = [];
    var _create_time_decorators;
    var _create_time_initializers = [];
    var WallpaperModel = _classThis = /** @class */ (function (_super) {
        __extends(WallpaperModel_1, _super);
        function WallpaperModel_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.type_id = __runInitializers(_this, _type_id_initializers, void 0);
            _this.type_name = __runInitializers(_this, _type_name_initializers, void 0);
            _this.title = __runInitializers(_this, _title_initializers, void 0);
            _this.url = __runInitializers(_this, _url_initializers, void 0);
            _this.url_type = __runInitializers(_this, _url_type_initializers, void 0);
            _this.is_like = __runInitializers(_this, _is_like_initializers, void 0);
            _this.create_time = __runInitializers(_this, _create_time_initializers, void 0);
            return _this;
        }
        return WallpaperModel_1;
    }(_classSuper));
    __setFunctionName(_classThis, "WallpaperModel");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING })];
        _type_id_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _type_name_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _title_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _url_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _url_type_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })];
        _is_like_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })];
        _create_time_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_id_decorators, { kind: "field", name: "type_id", static: false, private: false, access: { has: function (obj) { return "type_id" in obj; }, get: function (obj) { return obj.type_id; }, set: function (obj, value) { obj.type_id = value; } }, metadata: _metadata }, _type_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_name_decorators, { kind: "field", name: "type_name", static: false, private: false, access: { has: function (obj) { return "type_name" in obj; }, get: function (obj) { return obj.type_name; }, set: function (obj, value) { obj.type_name = value; } }, metadata: _metadata }, _type_name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _url_type_decorators, { kind: "field", name: "url_type", static: false, private: false, access: { has: function (obj) { return "url_type" in obj; }, get: function (obj) { return obj.url_type; }, set: function (obj, value) { obj.url_type = value; } }, metadata: _metadata }, _url_type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _is_like_decorators, { kind: "field", name: "is_like", static: false, private: false, access: { has: function (obj) { return "is_like" in obj; }, get: function (obj) { return obj.is_like; }, set: function (obj, value) { obj.is_like = value; } }, metadata: _metadata }, _is_like_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _create_time_decorators, { kind: "field", name: "create_time", static: false, private: false, access: { has: function (obj) { return "create_time" in obj; }, get: function (obj) { return obj.create_time; }, set: function (obj, value) { obj.create_time = value; } }, metadata: _metadata }, _create_time_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WallpaperModel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WallpaperModel = _classThis;
}();
exports.WallpaperModel = WallpaperModel;
