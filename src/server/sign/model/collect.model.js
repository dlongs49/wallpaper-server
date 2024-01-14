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
exports.CollectModel = void 0;
/*
* Author:dinglong
* DateTime:2024/1/7 下午 3:52
*/
var sequelize_typescript_1 = require("sequelize-typescript");
var CollectModel = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'collect_apply',
            timestamps: false,
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _wallpaper_title_decorators;
    var _wallpaper_title_initializers = [];
    var _wallpaper_id_decorators;
    var _wallpaper_id_initializers = [];
    var _wallpaper_url_decorators;
    var _wallpaper_url_initializers = [];
    var _wallpaper_type_decorators;
    var _wallpaper_type_initializers = [];
    var _opear_type_decorators;
    var _opear_type_initializers = [];
    var _create_time_decorators;
    var _create_time_initializers = [];
    var CollectModel = _classThis = /** @class */ (function (_super) {
        __extends(CollectModel_1, _super);
        function CollectModel_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.user_id = __runInitializers(_this, _user_id_initializers, void 0);
            _this.wallpaper_title = __runInitializers(_this, _wallpaper_title_initializers, void 0);
            _this.wallpaper_id = __runInitializers(_this, _wallpaper_id_initializers, void 0);
            _this.wallpaper_url = __runInitializers(_this, _wallpaper_url_initializers, void 0);
            _this.wallpaper_type = __runInitializers(_this, _wallpaper_type_initializers, void 0);
            _this.opear_type = __runInitializers(_this, _opear_type_initializers, void 0);
            _this.create_time = __runInitializers(_this, _create_time_initializers, void 0);
            return _this;
        }
        return CollectModel_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CollectModel");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING })];
        _user_id_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _wallpaper_title_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _wallpaper_id_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _wallpaper_url_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _wallpaper_type_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })];
        _opear_type_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })];
        _create_time_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _wallpaper_title_decorators, { kind: "field", name: "wallpaper_title", static: false, private: false, access: { has: function (obj) { return "wallpaper_title" in obj; }, get: function (obj) { return obj.wallpaper_title; }, set: function (obj, value) { obj.wallpaper_title = value; } }, metadata: _metadata }, _wallpaper_title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _wallpaper_id_decorators, { kind: "field", name: "wallpaper_id", static: false, private: false, access: { has: function (obj) { return "wallpaper_id" in obj; }, get: function (obj) { return obj.wallpaper_id; }, set: function (obj, value) { obj.wallpaper_id = value; } }, metadata: _metadata }, _wallpaper_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _wallpaper_url_decorators, { kind: "field", name: "wallpaper_url", static: false, private: false, access: { has: function (obj) { return "wallpaper_url" in obj; }, get: function (obj) { return obj.wallpaper_url; }, set: function (obj, value) { obj.wallpaper_url = value; } }, metadata: _metadata }, _wallpaper_url_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _wallpaper_type_decorators, { kind: "field", name: "wallpaper_type", static: false, private: false, access: { has: function (obj) { return "wallpaper_type" in obj; }, get: function (obj) { return obj.wallpaper_type; }, set: function (obj, value) { obj.wallpaper_type = value; } }, metadata: _metadata }, _wallpaper_type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _opear_type_decorators, { kind: "field", name: "opear_type", static: false, private: false, access: { has: function (obj) { return "opear_type" in obj; }, get: function (obj) { return obj.opear_type; }, set: function (obj, value) { obj.opear_type = value; } }, metadata: _metadata }, _opear_type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _create_time_decorators, { kind: "field", name: "create_time", static: false, private: false, access: { has: function (obj) { return "create_time" in obj; }, get: function (obj) { return obj.create_time; }, set: function (obj, value) { obj.create_time = value; } }, metadata: _metadata }, _create_time_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CollectModel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CollectModel = _classThis;
}();
exports.CollectModel = CollectModel;
