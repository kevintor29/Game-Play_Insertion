import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.services";
import { TablaCategoria } from "../entities/categoria.entities";



@Controller('categoria')
export class CategoriaController{
    constructor(private readonly CategoriaService: CategoriaService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise< TablaCategoria[] > {
        return this.CategoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe)id: number): Promise<TablaCategoria>{
    return this.CategoriaService.findById(id)
    }
    @Get('/categoria/:categoria')
    @HttpCode(HttpStatus.OK)
    findByDescripcion(@Param('categoria')categoria: string):Promise<TablaCategoria[]>{
        return this.CategoriaService.findByDescripcion(categoria)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: TablaCategoria):Promise<TablaCategoria>{
        return this.CategoriaService.create(categoria)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria:TablaCategoria):Promise<TablaCategoria>{
        return this.CategoriaService.update(categoria)
    }

    @Delete(`/:id`)
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param(`id`,ParseIntPipe) id:number ){
        return this.CategoriaService.delete(id)
    }
}