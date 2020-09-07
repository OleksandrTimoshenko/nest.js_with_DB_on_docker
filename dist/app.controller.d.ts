import { AppService } from './app.service';
import { Article } from "./article.entity";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<Article[]>;
}
