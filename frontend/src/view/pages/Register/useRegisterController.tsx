import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query"
import { toast } from 'react-hot-toast'
import { authService } from "../../../app/services/authService";
import { SignupParams } from "../../../app/services/authService/signup";
import { useAuth } from "../../../app/hooks/useAuth";



const schema = z.object({
    name: z.string()
    .min(1, "Nome é obrigatório"),
    email: z.string()
        .min(1, 'E-mail é obrigatório')
        .email('Informe um e-mail válido'),
    password: z.string()
        .min(1, 'Senha é obrigatória')
        .min(8, 'Senha deve conter pelo menos 8 dígitos')
})


type FormData =  z.infer<typeof schema>

export function useRegisterController(){
   const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
   } = useForm<FormData>({
    resolver: zodResolver(schema)
   })

   const { isPending, mutateAsync } = useMutation({
    mutationKey:['signup'],
    mutationFn: async (data: SignupParams) => {
       return authService.signup(data)
    }
   })

   const { signin } = useAuth()

   const handleSubmit = hookFormHandleSubmit( async (data) => {

    try {
        const { acessToken } = await mutateAsync(data)
        signin(acessToken)
    } catch (error: any) {
        // console.log('erroteste', error.response.data.message)
        toast.error(error.response.data.message)
    }
 })

 return {
    handleSubmit,
    register,
    errors,
    isPending
 }
}
