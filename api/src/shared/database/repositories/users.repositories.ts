import {Injectable} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import {type Prisma} from '@prisma/client'

@Injectable()
export class UsersRepositories {

    constructor(private readonly prismaService: PrismaService){}

    create(createDTO: Prisma.UserCreateArgs){
        return this.prismaService.user.create(createDTO)
    }

    findUnique(findUnique: Prisma.UserFindUniqueArgs){
        return this.prismaService.user.findUnique(findUnique)
    }

}