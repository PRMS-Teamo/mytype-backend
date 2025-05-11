"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsiderToOutsiderSchema = exports.InsiderToOutsider = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let InsiderToOutsider = class InsiderToOutsider {
    channel_id;
    insider_id;
    outsider_id;
};
exports.InsiderToOutsider = InsiderToOutsider;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InsiderToOutsider.prototype, "channel_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InsiderToOutsider.prototype, "insider_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InsiderToOutsider.prototype, "outsider_id", void 0);
exports.InsiderToOutsider = InsiderToOutsider = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], InsiderToOutsider);
exports.InsiderToOutsiderSchema = mongoose_1.SchemaFactory.createForClass(InsiderToOutsider);
//# sourceMappingURL=insider-to-outsider.schema.js.map