import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from "../../../../../app/config/contants";
import { SliderOptions } from "./SliderOprions";
import { SliderNavigation } from "./SliderNavigation";


export function Transactions(){
    return (
        <div className="bg-gray-100 rounded-xl w-full h-full p-10">
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

            {/* <div className="bg-red-500 mt-4">
                conteudo
            </div> */}
        </div>
    )
}
