import { createContext, useCallback, useState } from "react";

export interface DashboardContextValue {
    areValuesVisible: boolean
    isNewAccountModalOpen: boolean
    isNewTransactionModalOpen: boolean
    newTransactionType: 'INCOME' | 'EXPENSE' | null,
    toggleValuesVisibility(): void
    openNewAccountModal(): void
    closeNewAccountModal(): void
    openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void
    closeNewTransactionModal(): void
}

export const DashboardContext = createContext({} as DashboardContextValue)


export function DashboardProvider({children}: { children: React.ReactNode}) {

    const [areValuesVisible, setAreValuesVisible] = useState(false)
    const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false)
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false)
    const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null)

    const toggleValuesVisibility = useCallback(() => {

        setAreValuesVisible(prevState => !prevState)

    }, [])

    const openNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(true)
    }, [])

    const closeNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(false)
    }, [])


    const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
        setNewTransactionType(type)
        setisNewTransactionModalOpen(true)

    }, [])

    const closeNewTransactionModal = useCallback(() => {
        setNewTransactionType(null)
        setisNewTransactionModalOpen(false)
    }, [])

    return (
        <DashboardContext.Provider value={{ 
            areValuesVisible, 
            toggleValuesVisibility, 
            isNewAccountModalOpen, 
            openNewAccountModal, 
            closeNewAccountModal,
            isNewTransactionModalOpen,  
            openNewTransactionModal, 
            closeNewTransactionModal,
            newTransactionType
            }}>
          {children}
        </DashboardContext.Provider>
    )
}
