import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from "../../../../../app/config/contants";
import { SliderOptions } from "./SliderOprions";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { cn } from "../../../../../app/utils/cn";

import { useTransactionsController } from "./useTransactionsController";
import { Spinner } from "../../../../components/Spinner";
import emptyStateImage from '../../../../../assets/empty-state.svg'


export function Transactions(){
   const { areValuesVisible, isInitialLoading, isLoading,  transactions } = useTransactionsController()

   const hasTransactions = transactions.length > 0

    return (
        <div className="bg-gray-100 rounded-xl w-full h-full p-10 flex flex-col">
        {isInitialLoading && (
            <div className="w-full h-full flex items-center justify-center">
                <Spinner className="w-12 h-12"/>
            </div>
          )}

         {!isInitialLoading && (
            <>
                 <header>
                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2">
                        <TransactionsIcon/>
                        <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
                        <ChevronDownIcon className="text-gray-900"/>
                    </button>

                    <button>
                        <FilterIcon/>
                    </button>
                </div>

                <div className="mt-6 relative">
                   <Swiper
                   slidesPerView={3}
                   centeredSlides
                   >
                    <SliderNavigation/>
                    {MONTHS.map((month, index) => (
                        <SwiperSlide key={month}>
                           {({ isActive }) => (
                              <SliderOptions isActive={isActive} month={month} index={index}/>
                           )}
                        </SwiperSlide>
                    ))}
                   </Swiper>
                </div>
            </header>

            <div className="mt-4 space-y-2 flex-1 overflow-y-auto">

               {isLoading && (
                <div className="h-full flex flex-col items-center justify-center">
                    <Spinner className="w-12 h-12"/>
                </div>
               )}

              {(!hasTransactions && !isLoading) && (
                <div className="h-full flex flex-col items-center justify-center">
                    <img src={emptyStateImage} alt="Empty State" />
                    <p className="text-gray-700">Não encontramos nenhuma transação!</p>
                </div>
              )}

              {(hasTransactions && !isLoading)  && (
                <>
                  <div className="bg-white  p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex-1 flex items-center gap-3">
                        <CategoryIcon type="expense"/>
                        <div>
                            <strong className="font-bold tracking-[-0.5px] block">Lanche</strong>
                            <span className="text-sm text-gray-600">13/10/2024</span>
                        </div>
                    </div>
                    <span
                    className={cn(
                        'text-red-600 tracking-[-0.5px] font-medium',
                        areValuesVisible && 'blur-sm'
                    )}
                    >
                        - {formatCurrency(122)}
                    </span>
                </div>

                <div className="bg-white  p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex-1 flex items-center gap-3">
                        <CategoryIcon type="income"/>
                        <div>
                            <strong className="font-bold tracking-[-0.5px] block">Lanche</strong>
                            <span className="text-sm text-gray-600">13/10/2024</span>
                        </div>
                    </div>
                    <span
                     className={cn(
                        'text-green-600 tracking-[-0.5px] font-medium',
                        areValuesVisible && 'blur-sm'
                     )}
                     >
                        {formatCurrency(122)}
                    </span>
                </div>
                </>
              )}
            </div>

            </>
         )}

        </div>
    )
}
