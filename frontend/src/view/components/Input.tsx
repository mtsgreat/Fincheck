import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from '@radix-ui/react-icons'
import { cn } from "../../app/utils/cn";
interface InputProps extends ComponentProps<'input'>{
    name: string
    error?: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>( ( {name,  placeholder, id, error , className, ...props} , ref) => {
    const inputId = id ?? name


    console.log(inputId)

    return (
        <div className="relative">
            <input
            {...props}
            ref={ref}
            name={name}
            id={inputId}
            className={cn(
                'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 placeholder-shown: peer  placeholder-shown:pt-0  placeholder-shown:border-gray-500 transition-all outline-none',
                error && '!border-red-600',
                className
            )}
            placeholder=" "
            />

            <label
              htmlFor={inputId}
              className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all">
                {placeholder}
            </label>

            {error && (
                <div className="flex gap-2 items-center mt-2 text-red-600">
                    <CrossCircledIcon/>
                    <span className=" text-xs">{error}</span>
                </div>
            )}
        </div>

    )
})
