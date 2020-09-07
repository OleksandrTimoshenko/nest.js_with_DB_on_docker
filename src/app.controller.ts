import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Article} from "./article.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Article[]> {
    return this.appService.getHello();
  }
}
