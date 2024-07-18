import logoGray from "../../assets/logo-white.svg"
import { Spinner } from "./Spinner"



export function PageLoader(){
    return (
        <div className="bg-teal-900 fixed top-0 left-0 w-full h-full grid place-items-center">
             <div className="flex flex-col items-center gap-4">
               <img className="h-10"  src={logoGray} alt="" />
               <Spinner/>
             </div>
        </div>


    )
}
