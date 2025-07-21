import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import { corsConfig } from "./infrastructure/config/cors.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsConfig());

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle("MyType API")
    .setDescription("MyType API 입니다.")
    .setVersion("1.0")
    .addTag("my-type")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
