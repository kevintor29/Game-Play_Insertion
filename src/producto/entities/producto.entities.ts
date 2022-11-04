import { IsNotEmpty } from "class-validator";
import { TablaCategoria } from "src/categoria/entities/categoria.entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_producto"})
export class TablaProducto{
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length: 45,nullable:false})
    marca: string

    @IsNotEmpty()
    @Column({nullable:false})
    precio: number

    @ManyToOne (() =>TablaCategoria,(categoria)=>categoria.producto)
    categoria:TablaCategoria[]

}