"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const app_service_1 = require("../app.service");
const typeorm_1 = require("@nestjs/typeorm");
const customer_controller_1 = require("./customer.controller");
const app_controller_1 = require("../app.controller");
const customer_entity_1 = require("./entity/customer.entity");
let CustomerModule = class CustomerModule {
};
exports.CustomerModule = CustomerModule;
exports.CustomerModule = CustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([customer_entity_1.Customer]),],
        exports: [typeorm_1.TypeOrmModule],
        providers: [app_service_1.AppService, customer_service_1.CustomerService],
        controllers: [app_controller_1.AppController, customer_controller_1.CustomerController]
    })
], CustomerModule);
//# sourceMappingURL=customer.module.js.map