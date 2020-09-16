import {Module} from "@nestjs/common";
import {ApiModule} from "./api/api.module";
import {RouterModule, Routes} from "nest-router";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";

const routes: Routes = [
    {
        path: '/api',
        module: ApiModule
    }
]

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: process.env.ENV_PATH || '.env',
            isGlobal: true
        }),
        MongooseModule.forRoot(process.env.MONGO_CONNECTION),
        RouterModule.forRoutes(routes),
        ApiModule
    ]
})
export class AppModule {}