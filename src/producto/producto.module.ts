import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductoController } from "./controller/producto.controller";
import { TablaProducto } from "./entities/producto.entities";
import { ProductoService } from "./services/producto.services";

@Module({
    imports:[TypeOrmModule.forFeature([TablaProducto])],
    providers:[ProductoService],
    controllers:[ProductoController],
    exports:[TypeOrmModule],
}) 
    export class ProductoModule{}