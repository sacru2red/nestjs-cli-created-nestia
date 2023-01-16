import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import core from '@nestia/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Get an article with detailed info.
   *
   * @param section Target section
   * @param id Target articles id
   * @returns Detailed article info
   */
  @core.TypedRoute.Get(':id')
  async test(@core.TypedParam('id', 'uuid') id: string) {
    console.log('id', id);
  }
}
