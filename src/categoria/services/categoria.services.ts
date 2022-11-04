import { Injectable} from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";
import { HttpException} from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { TablaCategoria } from "../entities/categoria.entities";


@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(TablaCategoria)
        private CategoriaRepository: Repository<TablaCategoria>
    ) { }

    async findAll(): Promise<TablaCategoria[]> {
        return await this.CategoriaRepository.find({
            relations: {
                producto: true
            }
        })
    }


    async findById(id: number): Promise<TablaCategoria> {

        let categoria = await this.CategoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                producto: true
            }
        })

        if (!categoria)
            throw new HttpException('TablaCategoria não existe', HttpStatus.NOT_FOUND)

        return categoria
    }

    async findByDescripcion(descripcion: string): Promise<TablaCategoria[]> {
        return await this.CategoriaRepository.find({
            where: {
                descripcion: ILike(`%${descripcion}%`)
            },
            relations: {
                producto: true
            }
        })
    }

    async create(categoria: TablaCategoria): Promise<TablaCategoria>{
        return await this.CategoriaRepository.save(categoria)
    }

    async update(categoria: TablaCategoria): Promise<TablaCategoria> {
        let buscarCategoria = await this.findById(categoria.id)

        if(!buscarCategoria || !categoria.id)
            throw new HttpException('TablaCategoria Não Existe', HttpStatus.NOT_FOUND)

            return await this.CategoriaRepository.save(categoria)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarCategoria = await this.findById(id)

        if(!buscarCategoria)
            throw new HttpException('TablaCategoria não encontrada', HttpStatus.NOT_FOUND)

        return await this.CategoriaRepository.delete(id)
    }
    


}