import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";
import { currencyStringToNumber } from "../../../../../app/utils/currencyStringToNumber";
import toast from "react-hot-toast";


const schema = z.object({
    initialBalance: z.string().min(1, 'Saldo inicial é obrigatorio'),
    name: z.string().min(1, 'Nome da conta é obrigatorio'),
    type: z.enum(['CHECKING' , 'INVESTMENT' , 'CASH']),
    color: z.string().min(1, 'Cor é obrigatoria'),
})

type FormaData = z.infer<typeof schema>

export function useNewAccountModalController(){
    
    const {isNewAccountModalOpen, closeNewAccountModal} = useDashboard()


    const {
        register,
        handleSubmit: hookFormHandleSubmit,
        formState: {errors },
        control,
        resetField
     } = useForm<FormaData>({
        resolver: zodResolver(schema),
        // defaultValues: {
        //     name: 'Mateus',
            
        // }
     })


     const reset = () => {
        resetField("initialBalance")
        resetField("name")
        resetField("type")
        resetField("color")
     }


     const { isPending, mutateAsync } = useMutation({
        mutationKey:['createNewAccount'],
        mutationFn: async (data: FormaData) => {
           return bankAccountsService.create({...data, initialBalance: currencyStringToNumber(data.initialBalance)})
        }
       })



     const handleSubmit = hookFormHandleSubmit( async (data) => {

       try {
       
        await mutateAsync(data)
        toast.success('Conta foi cadastrada com sucesso!')

        closeNewAccountModal()
        reset()
        

       } catch (error) {
        toast.error('Erro ao cadastrar a conta!')
       }
     })
       
      

    return {
        isNewAccountModalOpen, 
        closeNewAccountModal,
        register,
        errors,
        handleSubmit,
        control,
        isPending
    }
}