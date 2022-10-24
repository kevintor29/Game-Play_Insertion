import { Injectable} from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { HttpException} from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNumber } from "class-validator";
import { DeleteResult, ILike, Repository } from "typeorm";
import { TablaProducto } from "../entities/producto.entities";



@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(TablaProducto)
        private ProductoRepository: Repository<TablaProducto>
    ) { }

    async findAll(): Promise<TablaProducto[]> {
        return await this.ProductoRepository.find({
            relations: {
                categoria: true
            }
        })
    }


    async findById(id: number): Promise<TablaProducto> {

        let producto = await this.ProductoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        })

        if (!producto)
            throw new HttpException('TablaProducto não existe', HttpStatus.NOT_FOUND)

        return producto
    }

    async findByMarca(marca: string): Promise<TablaProducto[]> {
        return await this.ProductoRepository.find({
            where: {
                marca: ILike(`%${marca}%`)
            },
            relations: {
                categoria: true
            }
        })
    }
    async findByPrecio(precio: number): Promise<TablaProducto[]> {
        return await this.ProductoRepository.find({
            where: {
                precio: precio
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(producto: TablaProducto): Promise<TablaProducto>{
        return await this.ProductoRepository.save(producto)
    }

    async update(producto: TablaProducto): Promise<TablaProducto> {
        let buscarproducto = await this.findById(producto.id)

        if(!buscarproducto || !producto.id)
            throw new HttpException('TablaProducto Não Existe', HttpStatus.NOT_FOUND)

            return await this.ProductoRepository.save(producto)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarproducto = await this.findById(id)

        if(!buscarproducto)
            throw new HttpException('TablaProducto não encontrada', HttpStatus.NOT_FOUND)

        return await this.ProductoRepository.delete(id)
    }
    


}