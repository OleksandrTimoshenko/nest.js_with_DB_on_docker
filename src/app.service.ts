import { Injectable } from '@nestjs/common';
import {Article} from "./article.entity";

@Injectable()
export class AppService {
  getHello(): Promise<Article[]> {
    return Article.find()
  }
}
