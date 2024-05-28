import {Injectable} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import {type Prisma} from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

@Injectable()
export class BankAccountsRepository {

    constructor(private readonly prismaService: PrismaService){}


    create(createDto: Prisma.BankAccountCreateArgs){
        return this.prismaService.bankAccount.create(createDto)
    }

}