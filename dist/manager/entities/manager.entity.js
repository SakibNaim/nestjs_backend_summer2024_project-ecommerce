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
exports.Manager = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const customer_entity_1 = require("../../customer/entity/customer.entity");
const saltOrRounds = 10;
const password = 'random_password';
let Manager = class Manager {
    async hashPassword() {
        this.password = bcrypt.hashSync(password, 10);
    }
};
exports.Manager = Manager;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Manager.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Manager.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Manager.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Manager.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Manager.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.ManyToMany)(() => customer_entity_1.Customer, (customer) => customer.manger),
    __metadata("design:type", Array)
], Manager.prototype, "customer", void 0);
exports.Manager = Manager = __decorate([
    (0, typeorm_1.Entity)()
], Manager);
//# sourceMappingURL=manager.entity.js.map