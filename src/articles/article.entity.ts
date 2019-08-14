import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column('text')
    description: string;

    @Column()
    fileName: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;

    @Column('date')
    createDate: Date;

    @Column('date')
    updateDate: Date;

}
