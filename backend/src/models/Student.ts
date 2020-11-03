import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('students')
export default class Student{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    cpf:string;

    @Column()
    ra:string;

    @Column()
    email:string;
}