"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMiddleware = void 0;
var common_1 = require("@nestjs/common");
var status_1 = require("./status");
var SessionMiddleware = /** @class */ (function () {
    function SessionMiddleware(cacheManager) {
        this.cacheManager = cacheManager;
    }
    SessionMiddleware.prototype.use = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var value, w_k, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cacheManager.get('w_k')];
                    case 1:
                        value = _a.sent();
                        w_k = req.headers.w_k ? req.headers.w_k.toString() : '';
                        val = Buffer.from(w_k, 'base64').toString('utf-8');
                        console.log(value, val);
                        if (req.path === '/api/login/admin_login') {
                            next();
                        }
                        if (!(!value || !w_k)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.cacheManager.del('w_k')];
                    case 2:
                        _a.sent();
                        throw new common_1.HttpException({ code: status_1.Status.NOSIGN, msg: "令牌失效,重新登录" }, common_1.HttpStatus.OK);
                    case 3:
                        if (!(val != value)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.cacheManager.del('w_k')];
                    case 4:
                        _a.sent();
                        throw new common_1.HttpException({ code: status_1.Status.NOSIGN, msg: "令牌不正确" }, common_1.HttpStatus.OK);
                    case 5:
                        next();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SessionMiddleware;
}());
exports.SessionMiddleware = SessionMiddleware;