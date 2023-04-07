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
exports.News = void 0;
const core_entity_1 = require("../../common/entities/core.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let News = class News extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], News.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], News.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], News.prototype, "modifier", void 0);
__decorate([
    (0, typeorm_1.RelationId)((news) => news.creator),
    __metadata("design:type", Number)
], News.prototype, "creatorId", void 0);
News = __decorate([
    (0, typeorm_1.Entity)()
], News);
exports.News = News;
//# sourceMappingURL=news.entity.js.map