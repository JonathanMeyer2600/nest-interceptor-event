import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppMsController } from './app-ms.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalInterceptor } from './global.interceptor';

@Module({
  imports: [],
  controllers: [AppController, AppMsController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalInterceptor,
    },
  ],
})
export class AppModule {}
