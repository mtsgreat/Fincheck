import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';
import { validateBankAccountOwnershipService } from '../bank-accounts/services/validate-bank-account-ownership.service';
import { validateCategoryOwnershipService } from '../categories/services/validate-category-ownership.service';

@Injectable()
export class TransactionsService {
  
  constructor(
    private readonly transactionsRepo: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: validateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: validateCategoryOwnershipService
  ){}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {

    const { bankAccountId, categoryId, date, name, type, value } = createTransactionDto

    await this.validadeEntitiesOwnership({
      userId,
      bankAccountId, 
      categoryId
    })

    return this.transactionsRepo.create({
      data: {
        userId,
        bankAccountId,
        categoryId, 
        date,
        name,
        type, 
        value
      }
    })
  }

  findAllByUserId(userId: string) {
    return this.transactionsRepo.findMany({
      where: { userId }
    })
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }


  private async validadeEntitiesOwnership({
    userId, 
    bankAccountId, 
    categoryId
  }: {
    userId: string, 
    bankAccountId: string, 
    categoryId: string 
  } ){

    await Promise.all([
      this.validateBankAccountOwnershipService.validate(userId, bankAccountId ),
      this.validateCategoryOwnershipService.validate(userId, categoryId )
    ])

  }
}
