"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgConfig = void 0;
exports.pgConfig = {
    url: "postgresql://adminUserDB_owner:QERyZY1CAm7M@ep-fragrant-cake-a5je92gs.us-east-2.aws.neon.tech/adminUserDB?sslmode=require",
    type: "postgres",
    port: 3306,
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true,
};
//# sourceMappingURL=dbConfig.js.map