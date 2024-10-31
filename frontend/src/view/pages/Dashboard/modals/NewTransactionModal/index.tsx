import { useState } from "react";
import { Button } from "../../../../components/Button";
//import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal(){
    const {closeNewTransactionModal, isNewTransactionModalOpen, newTransactionType } = useNewTransactionModalController()

    const isExpense = newTransactionType === 'EXPENSE'


    const [date, setDate] = useState('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedDate = event.target.value;
      setDate(selectedDate)
    };
   

    return (
        <Modal 
        title={ isExpense ? 'Nova Despesa' : 'Nova Receita'}
        open={isNewTransactionModalOpen}
        onClose={closeNewTransactionModal}
        >
         <form>
            <div>
            <span className="text-gray-600 tracking-[-0.5px] text-xs">
                Valor {isExpense ? 'da despesa' : 'da receita'}
            </span>
             <div className="flex items-center gap-2">
                <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
                <InputCurrency />
             </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
                <Input 
                    type="text" 
                    name="name"
                    placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
                />

                <Select
                    placeholder="Categoria" 
                    //error="asdads" 
                    options={[
                        {value: 'INVESTMENT', label: 'Investimentos'},
                        {value: 'CHECKING', label: 'Conta Corrente'},
                        {value: 'CASH', label: 'Dinheiro Físico'},
                    ]}
                />

                <Select
                    placeholder={isExpense ? 'Pagar com' : 'Receber com'} 
                    //error="asdads" 
                    options={[
                        {value: 'INVESTMENT', label: 'Investimentos'},
                        {value: 'CHECKING', label: 'Conta Corrente'},
                        {value: 'CASH', label: 'Dinheiro Físico'},
                    ]}
                />

                
                <input 
                    className="'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 placeholder-shown: peer  placeholder-shown:pt-0  placeholder-shown:border-gray-500 transition-all outline-none" 
                    type="date" 
                    value={date}
                    onChange={handleDateChange}
                />

                <Button type="submit" className="w-full">
                    Criar
                </Button>
            </div>
         </form>
        </Modal>
    )
}