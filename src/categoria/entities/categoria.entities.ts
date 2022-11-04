import { IsNotEmpty } from "class-validator";
import { TablaProducto } from "src/producto/entities/producto.entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categoria"})
export class TablaCategoria{
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length: 55, nullable: false})
    descripcion: string

    @OneToMany (() =>TablaProducto,(Tabla_Producto)=>Tabla_Producto.categoria)
    producto: TablaProducto[]

}