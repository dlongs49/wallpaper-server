"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
var file_dto_1 = require("./dto/file.dto");
var UploadController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("文件上传"), (0, common_1.Controller)('upload')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _uploadAvatar_decorators;
    var _uploadWallpaper_decorators;
    var UploadController = _classThis = /** @class */ (function () {
        function UploadController_1(uploadService) {
            this.uploadService = (__runInitializers(this, _instanceExtraInitializers), uploadService);
        }
        UploadController_1.prototype.uploadAvatar = function (files) {
            return this.uploadService.uploadAvatarSer(files);
        };
        UploadController_1.prototype.uploadWallpaper = function (files) {
            return this.uploadService.uploadWallpaperSer(files);
        };
        return UploadController_1;
    }());
    __setFunctionName(_classThis, "UploadController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _uploadAvatar_decorators = [(0, swagger_1.ApiOperation)({ summary: '头像上传 ' }), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
                description: '选取图片',
                type: file_dto_1.FileDto,
            }), (0, common_1.Post)("avatar"), (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('avatar'))];
        _uploadWallpaper_decorators = [(0, swagger_1.ApiOperation)({ summary: '壁纸上传' }), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
                description: '选取壁纸文件',
                type: file_dto_1.WallpaperFileDto,
            }), (0, common_1.Post)("wallpaper"), (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('wallpaper'))];
        __esDecorate(_classThis, null, _uploadAvatar_decorators, { kind: "method", name: "uploadAvatar", static: false, private: false, access: { has: function (obj) { return "uploadAvatar" in obj; }, get: function (obj) { return obj.uploadAvatar; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _uploadWallpaper_decorators, { kind: "method", name: "uploadWallpaper", static: false, private: false, access: { has: function (obj) { return "uploadWallpaper" in obj; }, get: function (obj) { return obj.uploadWallpaper; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UploadController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UploadController = _classThis;
}();
exports.UploadController = UploadController;
