import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TablaProducto } from "../entities/producto.entities";
import { ProductoService } from "../services/producto.services";




@Controller()
export class ProductoController{
    constructor(private readonly ProductoService: ProductoService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise< TablaProducto[] > {
        return this.ProductoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe)id: number): Promise<TablaProducto>{
    return this.ProductoService.findById(id)
    }
    @Get('/marca/:marca')
    @HttpCode(HttpStatus.OK)
    findByMarca(@Param('marca')marca: string):Promise<TablaProducto[]>{
        return this.ProductoService.findByMarca(marca)
    }
    @Get('/precio/:precio')
    @HttpCode(HttpStatus.OK)
    findByPrecio(@Param('precio')precio: number):Promise<TablaProducto[]>{
        return this.ProductoService.findByPrecio(precio)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() marca: TablaProducto):Promise<TablaProducto>{
        return this.ProductoService.create(marca)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() marca:TablaProducto):Promise<TablaProducto>{
        return this.ProductoService.update(marca)
    }

    @Delete(`/:id`)
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param(`id`,ParseIntPipe) id:number ){
        return this.ProductoService.delete(id)
    }
}