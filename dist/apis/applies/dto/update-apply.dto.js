"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApplyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_apply_dto_1 = require("./create-apply.dto");
class UpdateApplyDto extends (0, mapped_types_1.PartialType)(create_apply_dto_1.CreateApplyDto) {
}
exports.UpdateApplyDto = UpdateApplyDto;
//# sourceMappingURL=update-apply.dto.js.map