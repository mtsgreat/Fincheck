import { useDashboard } from "../DashboardContext/useDashboard"

export function useTransactionsController(){

    const { areValuesVisible } = useDashboard()

    return {
        areValuesVisible,
        transactions: [],
        isInitialLoading:false,
        isLoading: false
    }
}
