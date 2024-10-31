import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal(){
    const {
        isNewAccountModalOpen, 
        closeNewAccountModal,
        errors,
        handleSubmit,
        register,
        control,
        isPending
    } = useNewAccountModalController()
    return (
        <Modal 
        title="Criar Conta"
        open={isNewAccountModalOpen}
        onClose={closeNewAccountModal}
        >
         <form onSubmit={handleSubmit}>
            <div>
            <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo inicial</span>
             <div className="flex items-center gap-2">
                <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
                <Controller
                  control={control}
                  defaultValue="0"
                  name="initialBalance"
                  render={({field: { onChange, value }}) => (
                    <InputCurrency
                    error={errors.initialBalance?.message}
                    onChange={onChange}
                    value={value}
                  />
                  )}
                />
             </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
                <Input 
                    type="text" 
                    placeholder="Nome da Conta"
                    error={errors.name?.message}
                    {...register('name')}
                />

                 <Controller
                   control={control}
                   name="type"
                   defaultValue="CHECKING"
                    render={({field: { onChange, value }}) => (
                        <Select
                        placeholder="Tipo" 
                        error={errors.type?.message} 
                        onChange={onChange}
                        value={value}
                        options={[
                            {value: 'INVESTMENT', label: 'Investimentos'},
                            {value: 'CHECKING', label: 'Conta Corrente'},
                            {value: 'CASH', label: 'Dinheiro Físico'},
                            ]}
                        />
                   )}
                 />

                <Controller
                   control={control}
                   name="color"
                   defaultValue=""
                    render={({field: { onChange, value }}) => (
                        <ColorsDropdownInput
                        value={value}
                        onChange={onChange}
                        error={errors.color?.message}
                        />
                   )}
                 />
               

                <Button type="submit" className="w-full" isLoading={isPending}>
                    Criar
                </Button>
            </div>
         </form>
        </Modal>
    )
}