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
exports.SignModel = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var SignModel = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'user',
            timestamps: false,
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _uname_decorators;
    var _uname_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _avatar_decorators;
    var _avatar_initializers = [];
    var _reg_time_decorators;
    var _reg_time_initializers = [];
    var _sex_decorators;
    var _sex_initializers = [];
    var _sex_tit_decorators;
    var _sex_tit_initializers = [];
    var _nation_decorators;
    var _nation_initializers = [];
    var SignModel = _classThis = /** @class */ (function (_super) {
        __extends(SignModel_1, _super);
        function SignModel_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.uname = __runInitializers(_this, _uname_initializers, void 0);
            _this.password = __runInitializers(_this, _password_initializers, void 0);
            _this.avatar = __runInitializers(_this, _avatar_initializers, void 0);
            _this.reg_time = __runInitializers(_this, _reg_time_initializers, void 0);
            _this.sex = __runInitializers(_this, _sex_initializers, void 0);
            _this.sex_tit = __runInitializers(_this, _sex_tit_initializers, void 0);
            _this.nation = __runInitializers(_this, _nation_initializers, void 0);
            return _this;
        }
        return SignModel_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SignModel");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.STRING })];
        _uname_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _password_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _avatar_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _reg_time_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })];
        _sex_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 })];
        _sex_tit_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        _nation_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _uname_decorators, { kind: "field", name: "uname", static: false, private: false, access: { has: function (obj) { return "uname" in obj; }, get: function (obj) { return obj.uname; }, set: function (obj, value) { obj.uname = value; } }, metadata: _metadata }, _uname_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _avatar_decorators, { kind: "field", name: "avatar", static: false, private: false, access: { has: function (obj) { return "avatar" in obj; }, get: function (obj) { return obj.avatar; }, set: function (obj, value) { obj.avatar = value; } }, metadata: _metadata }, _avatar_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reg_time_decorators, { kind: "field", name: "reg_time", static: false, private: false, access: { has: function (obj) { return "reg_time" in obj; }, get: function (obj) { return obj.reg_time; }, set: function (obj, value) { obj.reg_time = value; } }, metadata: _metadata }, _reg_time_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sex_decorators, { kind: "field", name: "sex", static: false, private: false, access: { has: function (obj) { return "sex" in obj; }, get: function (obj) { return obj.sex; }, set: function (obj, value) { obj.sex = value; } }, metadata: _metadata }, _sex_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _sex_tit_decorators, { kind: "field", name: "sex_tit", static: false, private: false, access: { has: function (obj) { return "sex_tit" in obj; }, get: function (obj) { return obj.sex_tit; }, set: function (obj, value) { obj.sex_tit = value; } }, metadata: _metadata }, _sex_tit_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _nation_decorators, { kind: "field", name: "nation", static: false, private: false, access: { has: function (obj) { return "nation" in obj; }, get: function (obj) { return obj.nation; }, set: function (obj, value) { obj.nation = value; } }, metadata: _metadata }, _nation_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SignModel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SignModel = _classThis;
}();
exports.SignModel = SignModel;
