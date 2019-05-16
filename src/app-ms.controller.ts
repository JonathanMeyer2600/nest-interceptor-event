import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { LocalInterceptor } from './local.interceptor';

@Controller()
@UseInterceptors(LocalInterceptor)
export class AppMsController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('cmd')
  msCmdHandler(): string {
    return this.appService.getHello();
  }

  @EventPattern('event')
  async msEventHandler(data: unknown) {
    // This doesn't get executed because of the interceptor
    console.log('Event: Hello ' + data);
  }
}
