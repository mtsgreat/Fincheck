import { Injectable } from '@nestjs/common';
import { validateBankAccountOwnershipService } from 'src/modules/bank-accounts/services/validate-bank-account-ownership.service';
import { validateCategoryOwnershipService } from 'src/modules/categories/services/validate-category-ownership.service';
import { validateTransactionOwnershipService } from './validate-transaction-ownership.service';

import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionType } from '../entities/Transaction';


@Injectable()
export class TransactionsService {
  
  constructor(
    private readonly transactionsRepo: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: validateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: validateCategoryOwnershipService,
    private readonly validateTransactionOwnershipService: validateTransactionOwnershipService
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

  findAllByUserId(
    userId: string, 
    filters: {
      month: number, 
      year: number, 
      bankAccountId: string, 
      type: TransactionType
    },
  ) {
    return this.transactionsRepo.findMany({
      where: { 
        userId,
        bankAccountId: filters.bankAccountId,
        type: filters.type,
        date: {
          gte: new Date(Date.UTC(filters.year, filters.month)),
          lte: new Date(Date.UTC(filters.year, filters.month + 1))
        }
       }
    })
  }

  async update(userId: string, transactionId: string,  updateTransactionDto: UpdateTransactionDto) {

    const {bankAccountId, categoryId, date, name, type, value} = updateTransactionDto

    await this.validadeEntitiesOwnership({
      userId,
      bankAccountId,
      categoryId,
      transactionId
    })

    return this.transactionsRepo.update({
      where: { id: transactionId },
      data: {
        date, 
        name,
        type,
        value
      }
    })
  }

  async remove(userId: string, transactionId: string) {

    await this.validadeEntitiesOwnership({
      userId, 
      transactionId
    })

    await this.transactionsRepo.delete({
      where: {id: transactionId }
    })

    return null
  }


  private async validadeEntitiesOwnership({
    userId, 
    bankAccountId, 
    categoryId,
    transactionId
  }: {
    userId: string, 
    bankAccountId?: string, 
    categoryId?: string,
    transactionId?: string
  } ){

    await Promise.all([
      transactionId && this.validateTransactionOwnershipService.validate(userId, transactionId),
      bankAccountId && this.validateBankAccountOwnershipService.validate(userId, bankAccountId ),
      categoryId && this.validateCategoryOwnershipService.validate(userId, categoryId )
    ])

  }
}
