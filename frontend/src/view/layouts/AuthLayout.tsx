import illustration from "../../assets/illustration.png"
import logoGreen from "../../assets/logo-green.svg"


export function AuthLayout(){
    return (
         <div className="flex w-full h-full">

            <div className="w-1/2 h-full"></div>

            <div className="w-1/2 h-full flex justify-center items-center p-8 relative select-none">
                <img
                src={illustration}
                alt=""
                className="object-cover w-full h-full max-w-[656px] max-h-[960px] rounded-[32px]"
                />

                <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-[32px]">
                    <img src={logoGreen} className="h-8" />
                    <p className="text-gray-700 font-medium text-xl mt-6">
                        Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
                    </p>
                </div>
            </div>

         </div>
    )
}
