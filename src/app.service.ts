import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP })
  private readonly client: ClientProxy;

  getHello(): string {
    return 'Hello World!';
  }

  async sayHello() {
    await this.client.connect();
    const result = await this.client.send('cmd', 'something').toPromise();
    console.log('CMD result: ' + result);
    await this.client.emit('event', 'World!').toPromise();
  }
}
