import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";


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

    const signin = useCallback((acessToken: string) => {

        localStorage.setItem(localStorageKeys.ACESS_TOKEN, acessToken)

        setSignedIn(true)
    }, [])


    const signout = useCallback(() => {
        localStorage.removeItem(localStorageKeys.ACESS_TOKEN)
        setSignedIn(false)
    }, [])

    return (
        <AuthContext.Provider value={{ signedIn, signin, signout }}>
           {children}
        </AuthContext.Provider>
    )
}



