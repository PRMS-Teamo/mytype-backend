import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseConfigModule } from './database/mongoose/mongoose.module'
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config'

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
}

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), MongooseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
