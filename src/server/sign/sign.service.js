"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignService = void 0;
var common_1 = require("@nestjs/common");
var http_response_1 = require("../../utils/http.response");
var tool_1 = require("../../utils/tool");
var uuid_1 = require("uuid");
var sequelize_1 = require("sequelize");
var SignService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SignService = _classThis = /** @class */ (function () {
        function SignService_1(authenService, jwtService, signProviders, collectProviders, wallpaper_providers) {
            this.authenService = authenService;
            this.jwtService = jwtService;
            this.signProviders = signProviders;
            this.collectProviders = collectProviders;
            this.wallpaper_providers = wallpaper_providers;
        }
        SignService_1.prototype.loginReg = function (requestDto) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authenService.validateSign(requestDto.uname, requestDto.password)];
                        case 1:
                            token = _a.sent();
                            throw new http_response_1.ResSuccess(token);
                    }
                });
            });
        };
        SignService_1.prototype.getUser = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                var id, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = req["uid"];
                            return [4 /*yield*/, this.signProviders.findOne({ where: { id: id }, raw: true })];
                        case 1:
                            result = _a.sent();
                            delete result.password;
                            delete result.id;
                            throw new http_response_1.ResSuccess(result);
                    }
                });
            });
        };
        SignService_1.prototype.updateUser = function (userDto, request) {
            return __awaiter(this, void 0, void 0, function () {
                var id, avatar, uname, sex, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = request['uid'];
                            avatar = userDto.avatar;
                            uname = userDto.uname;
                            sex = userDto.sex;
                            data = "";
                            if (!avatar) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.signProviders.update({ avatar: avatar }, { where: { id: id } })];
                        case 1:
                            _a.sent();
                            data = "头像更新成功";
                            _a.label = 2;
                        case 2:
                            if (!uname) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.signProviders.update({ uname: uname }, { where: { id: id } })];
                        case 3:
                            _a.sent();
                            data = "用户名更新成功";
                            _a.label = 4;
                        case 4:
                            if (!sex) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.signProviders.update({
                                    sex: sex,
                                    sex_tit: sex == '1' ? '男' : sex == '0' ? '女' : '保密'
                                }, { where: { id: id } })];
                        case 5:
                            _a.sent();
                            data = "性别更新成功";
                            _a.label = 6;
                        case 6:
                            if (avatar && uname && sex) {
                                throw new http_response_1.ResSuccess("个人信息更新成功");
                            }
                            throw new http_response_1.ResSuccess(data);
                    }
                });
            });
        };
        SignService_1.prototype.setUerWallpaper = function (idDto, req, type) {
            return __awaiter(this, void 0, void 0, function () {
                var result, isOn;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.wallpaper_providers.findOne({ where: { id: idDto.wallpaper_id }, raw: true })];
                        case 1:
                            result = _b.sent();
                            if (!result) {
                                throw new http_response_1.ResFail("该壁纸不存在");
                            }
                            return [4 /*yield*/, this.collectProviders.findOne({
                                    where: (_a = {},
                                        _a[sequelize_1.Op.and] = [{
                                                user_id: req["uid"],
                                                wallpaper_id: idDto.wallpaper_id,
                                                opear_type: type, // 0 壁纸收藏  1 应用壁纸记录
                                            }],
                                        _a),
                                    raw: true
                                })];
                        case 2:
                            isOn = _b.sent();
                            if (!isOn) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.collectProviders.destroy({ where: { id: isOn.id } })];
                        case 3:
                            _b.sent();
                            throw new http_response_1.ResSuccess(type == 0 ? "取消收藏成功" : "已取消应用壁纸");
                        case 4: return [4 /*yield*/, this.collectProviders.create({
                                id: (0, uuid_1.v4)(),
                                user_id: req["uid"],
                                wallpaper_id: idDto.wallpaper_id,
                                wallpaper_title: result.title,
                                wallpaper_url: result.url,
                                wallpaper_type: result.url_type,
                                opear_type: type,
                                create_time: new Date()
                            })];
                        case 5:
                            _b.sent();
                            throw new http_response_1.ResSuccess(type == 0 ? "收藏成功" : "应用壁纸成功");
                    }
                });
            });
        };
        SignService_1.prototype.getUerWallpaper = function (pageReqDto, type) {
            return __awaiter(this, void 0, void 0, function () {
                var offset, limit, order, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            offset = Number(pageReqDto.offset);
                            limit = Number(pageReqDto.limit);
                            order = [['opear_type', type]];
                            return [4 /*yield*/, this.collectProviders.findAndCountAll(__assign(__assign({}, (0, tool_1.SeqScreen)(offset, limit, '', '', '', order)), { raw: true }))];
                        case 1:
                            result = _a.sent();
                            throw new http_response_1.ResSuccess(result);
                    }
                });
            });
        };
        return SignService_1;
    }());
    __setFunctionName(_classThis, "SignService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SignService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SignService = _classThis;
}();
exports.SignService = SignService;
