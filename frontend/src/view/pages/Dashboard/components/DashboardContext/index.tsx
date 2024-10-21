import { createContext, useCallback, useState } from "react";

export interface DashboardContextValue {
    areValuesVisible: boolean
    isNewAccountModalOpen: boolean
    toggleValuesVisibility(): void
    openNewAccountModal(): void
    closeNewAccountModal(): void
}

export const DashboardContext = createContext({} as DashboardContextValue)


export function DashboardProvider({children}: { children: React.ReactNode}) {

    const [areValuesVisible, setAreValuesVisible] = useState(false)
    const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true)

    const toggleValuesVisibility = useCallback(() => {

        setAreValuesVisible(prevState => !prevState)

    }, [])

    const openNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(true)
    }, [])

    const closeNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(false)
    }, [])

    return (
        <DashboardContext.Provider value={{ areValuesVisible, toggleValuesVisibility, isNewAccountModalOpen, openNewAccountModal, closeNewAccountModal   }}>
          {children}
        </DashboardContext.Provider>
    )
}
