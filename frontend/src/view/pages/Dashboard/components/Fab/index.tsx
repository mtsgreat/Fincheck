import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { Income } from "../../../../components/icons/categories/income/Income";
import { Expense } from "../../../../components/icons/categories/expense/Expense";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
    return (
     <div className="fixed right-4 bottom-4">
           <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <button className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center text-white">
                <PlusIcon className="w-6 h-6"/>
            </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
            <DropdownMenu.Item className="gap-2">
                <Income/>
                Nova Despesa
            </DropdownMenu.Item>

            <DropdownMenu.Item className="gap-2">
                <Expense/>
                Nova Receita
            </DropdownMenu.Item>

            <DropdownMenu.Item className="gap-2">
                <BankAccountIcon/>
                Nova Conta
            </DropdownMenu.Item>
        </DropdownMenu.Content>
       </DropdownMenu.Root>
   </div>
    )
}
