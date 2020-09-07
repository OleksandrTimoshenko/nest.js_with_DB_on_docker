import { BaseEntity } from 'typeorm';
export declare class Article extends BaseEntity {
    id: number;
    title: string;
    content: string;
}
