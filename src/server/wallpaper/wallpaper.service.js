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
exports.WallpaperService = void 0;
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var http_response_1 = require("../../utils/http.response");
var tool_1 = require("../../utils/tool");
var WallpaperService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var WallpaperService = _classThis = /** @class */ (function () {
        function WallpaperService_1(wallpaper_type_providers, wallpaper_providers) {
            this.wallpaper_type_providers = wallpaper_type_providers;
            this.wallpaper_providers = wallpaper_providers;
        }
        WallpaperService_1.prototype.setWallpaperType = function (wallpaperTypeResDto) {
            return __awaiter(this, void 0, void 0, function () {
                var arr, dto;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!wallpaperTypeResDto.title) {
                                throw new http_response_1.ResFail("分类标题不能为空");
                            }
                            if (wallpaperTypeResDto.title.length > 10 || wallpaperTypeResDto.title.length < 2) {
                                throw new http_response_1.ResFail("分类标题在2至10个字符之间");
                            }
                            if (!wallpaperTypeResDto.cover_url) {
                                throw new http_response_1.ResFail("封面不能为空");
                            }
                            arr = [0, 1];
                            if (!arr.includes(wallpaperTypeResDto.cover_type)) {
                                throw new http_response_1.ResFail("封面类型参数不合法");
                            }
                            dto = __assign({ id: (0, uuid_1.v4)(), create_time: new Date() }, wallpaperTypeResDto);
                            return [4 /*yield*/, this.wallpaper_type_providers.create(dto)];
                        case 1:
                            _a.sent();
                            throw new http_response_1.ResSuccess("操作成功");
                    }
                });
            });
        };
        WallpaperService_1.prototype.getWallpaperTypeDetail = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.wallpaper_type_providers.findOne({ where: { id: id }, raw: true })];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                throw new http_response_1.ResSuccess(result);
                            }
                            else {
                                throw new http_response_1.ResFail("未查找到该条目");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        WallpaperService_1.prototype.updateWallpaperType = function (wallpaperTypeExDto) {
            return __awaiter(this, void 0, void 0, function () {
                var id, result_one, dto;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = wallpaperTypeExDto.id;
                            return [4 /*yield*/, this.wallpaper_type_providers.findOne({ where: { id: id } })];
                        case 1:
                            result_one = _a.sent();
                            if (!result_one) {
                                throw new http_response_1.ResFail("更新条目失败");
                            }
                            dto = {
                                title: wallpaperTypeExDto.title,
                                cover_url: wallpaperTypeExDto.cover_url,
                                cover_type: wallpaperTypeExDto.cover_type,
                                create_time: new Date(),
                            };
                            return [4 /*yield*/, this.wallpaper_type_providers.update(dto, { where: { id: id } })];
                        case 2:
                            _a.sent();
                            throw new http_response_1.ResSuccess("更新条目成功");
                    }
                });
            });
        };
        WallpaperService_1.prototype.delWallpaperType = function (idArr) {
            return __awaiter(this, void 0, void 0, function () {
                var flag, for_id, i, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            flag = false;
                            for_id = '';
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < idArr.length)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.wallpaper_type_providers.destroy({ where: { id: idArr[i] } })];
                        case 2:
                            result = _a.sent();
                            if (result == 0) {
                                flag = true;
                                for_id = idArr[i];
                                return [3 /*break*/, 4];
                            }
                            else {
                                flag = false;
                            }
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (flag) {
                                throw new http_response_1.ResSuccess("\u5220\u9664id\u4E3A{" + for_id + "}\u7684\u6761\u76EE\u5931\u8D25");
                            }
                            throw new http_response_1.ResSuccess("删除条目成功");
                    }
                });
            });
        };
        WallpaperService_1.prototype.getWallpaperTypeList = function (pageReqDto, filterReqDto) {
            return __awaiter(this, void 0, void 0, function () {
                var kw, sort, offset, limit, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            kw = filterReqDto.keyword;
                            sort = filterReqDto.sort_type;
                            offset = Number(pageReqDto.offset);
                            limit = Number(pageReqDto.limit);
                            return [4 /*yield*/, this.wallpaper_type_providers.findAndCountAll(__assign(__assign({}, (0, tool_1.SeqScreen)(offset, limit, kw, 'title', sort)), { raw: true }))];
                        case 1:
                            result = _a.sent();
                            throw new http_response_1.ResSuccess(result);
                    }
                });
            });
        };
        WallpaperService_1.prototype.setWallpaper = function (wallpaperReqDto) {
            return __awaiter(this, void 0, void 0, function () {
                var result, arr, dto;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!wallpaperReqDto.title) {
                                throw new http_response_1.ResFail("壁纸标题不能为空");
                            }
                            if (wallpaperReqDto.title.length > 10 || wallpaperReqDto.title.length < 2) {
                                throw new http_response_1.ResFail("壁纸标题在2至10个字符之间");
                            }
                            return [4 /*yield*/, this.wallpaper_type_providers.findOne({ where: { id: wallpaperReqDto.type_id }, raw: true })];
                        case 1:
                            result = _a.sent();
                            if (!wallpaperReqDto.type_id) {
                                throw new http_response_1.ResFail("壁纸类型必传");
                            }
                            if (!result) {
                                throw new http_response_1.ResFail("未查到该壁纸类型");
                            }
                            if (!wallpaperReqDto.url) {
                                throw new http_response_1.ResFail("封面不能为空");
                            }
                            arr = [0, 1];
                            if (!arr.includes(wallpaperReqDto.url_type)) {
                                throw new http_response_1.ResFail("壁纸链接类型不合法");
                            }
                            dto = __assign({ id: (0, uuid_1.v4)(), create_time: new Date(), type_name: result.title }, wallpaperReqDto);
                            return [4 /*yield*/, this.wallpaper_providers.create(dto)];
                        case 2:
                            _a.sent();
                            throw new http_response_1.ResSuccess("操作成功");
                    }
                });
            });
        };
        WallpaperService_1.prototype.getWallpaperDetail = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.wallpaper_providers.findOne({ where: { id: id }, raw: true })];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                throw new http_response_1.ResSuccess(result);
                            }
                            else {
                                throw new http_response_1.ResFail("未查找到该条目");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        WallpaperService_1.prototype.updateWallpaper = function (wallpaperReqExDto) {
            return __awaiter(this, void 0, void 0, function () {
                var id, result_one, dto;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = wallpaperReqExDto.id;
                            return [4 /*yield*/, this.wallpaper_providers.findOne({ where: { id: id } })];
                        case 1:
                            result_one = _a.sent();
                            if (!result_one) {
                                throw new http_response_1.ResFail("更新条目失败");
                            }
                            dto = {
                                title: wallpaperReqExDto.title,
                                url: wallpaperReqExDto.url,
                                url_type: wallpaperReqExDto.url_type,
                                type_id: wallpaperReqExDto.type_id,
                                create_time: new Date(),
                                type_name: result_one.type_name,
                            };
                            return [4 /*yield*/, this.wallpaper_providers.update(dto, { where: { id: id } })];
                        case 2:
                            _a.sent();
                            throw new http_response_1.ResSuccess("更新条目成功");
                    }
                });
            });
        };
        WallpaperService_1.prototype.delWallpaper = function (idArr) {
            return __awaiter(this, void 0, void 0, function () {
                var flag, for_id, i, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            flag = false;
                            for_id = '';
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < idArr.length)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.wallpaper_providers.destroy({ where: { id: idArr[i] } })];
                        case 2:
                            result = _a.sent();
                            if (result == 0) {
                                flag = true;
                                for_id = idArr[i];
                                return [3 /*break*/, 4];
                            }
                            else {
                                flag = false;
                            }
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (flag) {
                                throw new http_response_1.ResSuccess("\u5220\u9664id\u4E3A{" + for_id + "}\u7684\u6761\u76EE\u5931\u8D25");
                            }
                            throw new http_response_1.ResSuccess("删除条目成功");
                    }
                });
            });
        };
        WallpaperService_1.prototype.getWallpaperList = function (pageReqDto, wallpaperSortExDto) {
            return __awaiter(this, void 0, void 0, function () {
                var kw, sort, url_type, offset, limit, order, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            kw = wallpaperSortExDto.keyword;
                            sort = wallpaperSortExDto.sort_type;
                            url_type = Number(wallpaperSortExDto.url_type);
                            offset = Number(pageReqDto.offset);
                            limit = Number(pageReqDto.limit);
                            order = [
                                url_type == 0 || url_type == 1 ? ['url_type', url_type] : []
                            ];
                            return [4 /*yield*/, this.wallpaper_providers.findAndCountAll(__assign(__assign({}, (0, tool_1.SeqScreen)(offset, limit, kw, 'title', sort, order)), { raw: true }))];
                        case 1:
                            result = _a.sent();
                            throw new http_response_1.ResSuccess(result);
                    }
                });
            });
        };
        WallpaperService_1.prototype.getWallpaperAppList = function (pageReqDto, filterKwDto) {
            return __awaiter(this, void 0, void 0, function () {
                var kw, offset, limit, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            kw = filterKwDto.keyword;
                            offset = Number(pageReqDto.offset);
                            limit = Number(pageReqDto.limit);
                            return [4 /*yield*/, this.wallpaper_providers.findAndCountAll(__assign(__assign({}, (0, tool_1.SeqScreen)(offset, limit, kw, 'title')), { raw: true }))];
                        case 1:
                            result = _a.sent();
                            throw new http_response_1.ResSuccess(result);
                    }
                });
            });
        };
        WallpaperService_1.prototype.getWallpaperAppDetail = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.wallpaper_providers.findOne({ where: { id: id }, raw: true })];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                throw new http_response_1.ResSuccess(result);
                            }
                            else {
                                throw new http_response_1.ResFail("该壁纸不存在");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return WallpaperService_1;
    }());
    __setFunctionName(_classThis, "WallpaperService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WallpaperService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WallpaperService = _classThis;
}();
exports.WallpaperService = WallpaperService;
