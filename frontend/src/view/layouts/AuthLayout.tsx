import illustration from "../../assets/illustration.png"
import logoGreen from "../../assets/logo-green.svg"
import logoGray from "../../assets/logo-gray.svg"
import { Outlet } from "react-router-dom"


export function AuthLayout(){
    return (
         <div className="flex w-full h-full">

            <div className="w-full h-full flex items-center justify-center flex-col lg:w-1/2">
              <img className="h-6" src={logoGray} alt="" />

              <div className="mt-16 w-full max-w-[504px] px-8">
                <Outlet/>
              </div>
            </div>

            <div className="w-1/2 h-full  justify-center items-center p-8 relative select-none hidden lg:flex">
                <img
                src={illustration}
                alt=""
                className="object-cover w-full h-full max-w-[656px] max-h-[960px] rounded-[32px]"
                />

                <div className="max-w-[656px] bottom-8 mx-8 bg-white p-10 absolute rounded-b-[32px]">
                    <img src={logoGreen} className="h-8" />
                    <p className="text-gray-700 font-medium text-xl mt-6">
                        Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
                    </p>
                </div>
            </div>

         </div>
    )
}
