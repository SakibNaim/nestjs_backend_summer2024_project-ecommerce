"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createCustomer_dto_1 = require("./createCustomer.dto");
class UpdateCustomerDto extends (0, mapped_types_1.PartialType)(createCustomer_dto_1.CreateCustomerDto) {
}
exports.UpdateCustomerDto = UpdateCustomerDto;
//# sourceMappingURL=updateAdmin.dto.js.map