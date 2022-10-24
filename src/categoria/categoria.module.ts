import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from "./controller/categoria.controller";
import { TablaCategoria } from "./entities/categoria.entities";
import { CategoriaService } from "./services/categoria.services";



@Module({ 
    imports:[TypeOrmModule.forFeature([TablaCategoria])],
    providers: [CategoriaService],
        controllers: [CategoriaController],
        exports: [TypeOrmModule]
})
export class CategoriaModule {}