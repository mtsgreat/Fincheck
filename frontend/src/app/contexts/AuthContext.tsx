import { createContext, useCallback,useEffect,useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";
import toast from "react-hot-toast";
import { PageLoader } from "../../view/components/PageLoader";



export interface AuthContextValue {
    signedIn: boolean,
    signin(acessToken: string): void,
    signout(): void

}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)


export default function AuthProvider({children}: {children: React.ReactNode}){

    const [signedIn, setSignedIn] = useState<boolean>(() => {

        const storedAcessToken = localStorage.getItem(localStorageKeys.ACESS_TOKEN)

        return Boolean(storedAcessToken)
    })


    const { isError, isFetching, isSuccess  } = useQuery({
        queryKey:['users','me'],
        queryFn: () => usersService.me(),
        enabled: signedIn,
        staleTime: Infinity
    })

    const signin = useCallback((acessToken: string) => {

        localStorage.setItem(localStorageKeys.ACESS_TOKEN, acessToken)

        setSignedIn(true)

    }, [])


    const signout = useCallback(() => {
        localStorage.removeItem(localStorageKeys.ACESS_TOKEN)
        setSignedIn(false)
    }, [])


    useEffect(() => {

        if(isError) {
            signout()
            toast.error('Sua sessão expirou!')
        }
    }, [isError, signout])


   if(isFetching){
     return <PageLoader/>
   }



    return (
        <AuthContext.Provider value={{
            signedIn: isSuccess && signedIn,
            signin,
            signout
        }}>


           {children}
        </AuthContext.Provider>
    )
}



