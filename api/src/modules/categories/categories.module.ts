import { Module } from '@nestjs/common';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './services/categories.service';
import { validateCategoryOwnershipService } from './services/validate-category-ownership.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, validateCategoryOwnershipService],
  exports: [validateCategoryOwnershipService]
})
export class CategoriesModule {}
