import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from "@tanstack/react-query"
import { SigninParams } from "../../../app/services/authService/signin"
import { authService } from "../../../app/services/authService"
import toast from "react-hot-toast"
import { useAuth } from "../../../app/hooks/useAuth"


interface ErrorResponse {
   response: {
       data: {
           message: string;
       };
   };
}

const schema = z.object({
    email: z.string()
        .min(1, 'E-mail é obrigatório')
        .email('Informe um e-mail válido'),
    password: z.string()
        .min(1, 'Senha é obrigatória')
        .min(8, 'Senha deve conter pelo menos 8 dígitos')
})

type FormData =  z.infer<typeof schema>

export function useLoginController(){
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: {errors }
 } = useForm<FormData>({
    resolver: zodResolver(schema)
 })


 const { isPending, mutateAsync } = useMutation({
    mutationKey:['signin'],
    mutationFn: async (data: SigninParams) => {
       return authService.signin(data)
    }
   })

   const { signin } = useAuth()

   const handleSubmit = hookFormHandleSubmit( async (data) => {

    try {
         const { acessToken } = await mutateAsync(data)
         signin(acessToken)
        // console.log(acessToken)

    } catch (error) {
        const typeError = error as ErrorResponse
        toast.error(typeError.response.data.message)
    }
 })





 return {
    handleSubmit,
    register,
    errors,
    isPending
 }
}
